import { useCallback, useMemo, useRef, useState } from "react";
import useMeasure from "use-measure";
import { rarityImageFromItems } from "gear-rarity";
import rarities from "../data/rare.json";
import { colors } from "../helpers/theme";
import Item from "./Item";
import { soundFromBagItems } from "../helpers/beats";

const ENDPOINT =
  "https://opensea.io/assets/0xff9c1b15b16263c61d017ee9f65c50e4ae0113d7/";
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

  const audioSources = useMemo(() => {
    return soundFromBagItems(bag.items);
  }, [bag]);

  const [playing, setPlaying] = useState(false);

  let audioRefs = useRef<{ [id: string]: HTMLAudioElement; }>({});

  const onPlay = useCallback(() => {
    if (!playing) {
      setPlaying(true);
      Object.values(audioRefs.current).forEach((ar) => ar.play());
    } else {
      setPlaying(false);
      Object.values(audioRefs.current).forEach((ar) => ar.pause());
    }
  }, [playing, audioRefs, setPlaying]);

  return (
    <div style={style.container} className="bag-container">
      <div style={{ ...style.bag, height: "550px" }} ref={ref} className="bag">
        <img
          src={rarityImageFromItems(
            bag.items
              .map((item) => item.slot)
              .sort(byOrder)
              .map((slot) => {
                const key = slot as keyof typeof Item;
                const item = bag.items.find((item) => item.slot === key);
                return item!.name;
              })
          )}
          alt=""
        />
        <button onClick={onPlay}>{playing ? "Pause" : "Play"} radio</button>
      </div>
      {audioSources.map((src) =>
        <audio
          key={src}
          src={src}
          ref={r => {
            if (!r) return;

            audioRefs.current[src] = r;
          }}
          loop
        />
      )}
      <div style={style.footer} className="bag-footer">
        <a
          style={style.link}
          href={`${ENDPOINT}/${bag.id}`}
          target="_blank"
          rel="noreferrer"
        >
          #{bag.id}
        </a>
        {/* <p style={style.score}>Rank: {scores?.rarest}</p>
        <p style={style.score}>Top: {getRarityPercentage(scores?.rarest)}%</p>
        <p style={style.score}>Item Score: {itemScore}</p> */}
      </div>
    </div>
  );
}

// show 2 decimals for top 0%
// function getRarityPercentage(rank = 8000) {
//   const percentage = (rank / 8000) * 100;
//   const percentageRounded = percentage.toFixed(0);
//   if (Number(percentageRounded)) return percentageRounded;
//   return percentage.toFixed(2);
// }

const slotOrder = [
  "clothes",
  "foot",
  "hand",
  "neck",
  "ring",
  "waist",
  "weapon",
  "drugs",
  "vehicle",
];

function byOrder(a: String, b: String) {
  const aIndex = slotOrder.indexOf(a as string);
  const bIndex = slotOrder.indexOf(b as string);
  if (aIndex > bIndex) return 1;
  if (aIndex < bIndex) return -1;
  return 0;
}

export default Bag;
