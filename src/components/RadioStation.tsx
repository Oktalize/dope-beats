import { useEffect, useRef, useState } from "react";
import useMeasure from "use-measure";
import { rarityImageFromItems } from "gear-rarity";
import rarities from "../data/rare.json";
import { colors } from "../helpers/theme";
import Item from "./Item";

const pizzicato = require('pizzicato');

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

function RadioStation({ bag }: BagProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { width } = useMeasure(ref);
    const scores = rarities.find((loot) => loot.lootId === Number(bag.id));
    const itemScore = bag.items.reduce((score, item) => item.rarity + score, 0);

    // Default sounds
    const testVehicle = new pizzicato.Sound('https://ipfs.infura.io/ipfs/QmcCTgmosvmFEw2dacjkUedAXB7R8igkuWdqDsqPmpwLpY');
    const testDrug = new pizzicato.Sound('https://ipfs.infura.io/ipfs/QmZCnHG3hrtx36UfJ1WAjzGWQn4HznuacD8DFTFf9yzxYr')
    const testSound = new pizzicato.Group([testVehicle, testDrug])

    const [track, setTrack] = useState(testSound)
    console.log('wave reloaded')
    const [vehicle, setVehicle] = useState(bag.vehicle)
    const [playing, setPlaying] = useState(false)

    const [vehicleSound, setVehicleSound] = useState()

    useEffect(() => {
        const defaultVehicleSound = new pizzicato.Sound({
            source: 'wave',
            options: { frequency: 440 }
        });
    }, [])

    // Update track
    useEffect(() => {
        if (playing) {
            track.play()
        } else {
            track.pause()
        }
    }, [playing])



    function startPlaying() {
        setPlaying(true)
    }

    function stopPlaying() {
        setPlaying(false)
    }

    console.log(bag.items)
    return (
        <div style={style.container} className="bag-container">
            <button onClick={startPlaying}>Play</button>
            <button onClick={stopPlaying}>Stop</button>
            {/* <div style={{ ...style.bag, height: width }} ref={ref} className="bag">
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
            </div> */}
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

export default RadioStation;
