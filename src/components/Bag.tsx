import { useRef } from "react";
import useMeasure from "use-measure";
import { rarityImageFromItems } from "gear-rarity";
import rarities from "../data/rare.json";
import { colors } from "../helpers/theme";

const ENDPOINT =
  "https://opensea.io/assets/0x8707276df042e89669d69a177d3da7dc78bd8723/";
interface BagProps {
  bag: Bag;
}

const style = {
  container: {
    margin: 16,
    width: "100%",
    maxWidth: 512,
  },
  bag: {
    padding: 16,
    background: "black",
  },
  link: {
    marginRight: 12,
    color: colors.white,
    textDecoration: "none",
  },
  score: {
    marginRight: 12,
  },
  footer: {
    display: "flex",
    padding: 16,
    color: colors.muted,
  },
};

function Bag({ bag }: BagProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { width } = useMeasure(ref);
  const scores = rarities.find((loot) => loot.lootId === Number(bag.id));
  const itemScore = bag.items.reduce((score, item) => item.rarity + score, 0);

  return (
    <div style={style.container} className="bag-container">
      <div style={{ ...style.bag, height: width }} ref={ref} className="bag">
        <img
          src={rarityImageFromItems(bag.items.map((item) => item.name))}
          alt=""
        />
      </div>
      <div style={style.footer} className="bag-footer">
        <a
          style={style.link}
          href={`${ENDPOINT}/${bag.id}`}
          target="_blank"
          rel="noreferrer"
        >
          #{bag.id}
        </a>
        <p style={style.score}>Rank: {scores?.rarest}</p>
        <p style={style.score}>Top: {getRarityPercentage(scores?.rarest)}%</p>
        <p style={style.score}>Item Score: {itemScore}</p>
      </div>
    </div>
  );
}

// show 2 decimals for top 0%
function getRarityPercentage(rank = 8000) {
  const percentage = (rank / 8000) * 100;
  const percentageRounded = percentage.toFixed(0);
  if (Number(percentageRounded)) return percentageRounded;
  return percentage.toFixed(2);
}

export default Bag;
