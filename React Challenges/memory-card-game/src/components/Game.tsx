import {
    Anchor,
    Bird,
    Bone,
    Carrot,
    Fish,
    Leaf,
    LucideIcon,
    Snail,
    Umbrella,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import GameCard from "./GameCard";
import Timer from "./Timer";

function shuffleAndDouble(): LucideIcon[] {
    const icons: LucideIcon[] = [Bone, Snail, Fish, Bird, Leaf, Carrot, Anchor, Umbrella];

    const doubled = [...icons, ...icons];
    for (let i = doubled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [doubled[i], doubled[j]] = [doubled[j], doubled[i]];
    }
    return doubled;
}

export default function Game() {
    const [arr, setArr] = useState(shuffleAndDouble);
    const [selected, setSelected] = useState<number[]>([]);
    const [found, setFound] = useState<number[]>([]);
    const [error, setError] = useState<number[]>([]);
    const ref = useRef<number | null>(null);
    const [over, setOver] = useState<boolean>(false);

    const [isTimerActive, setIsTimerActive] = useState(false);

    const addToSelect = (index: number): void => {
        if (!isTimerActive) setIsTimerActive(true);

        if (error.length > 0) return;
        setSelected((prev) => [...prev, index]);
    };

    const clearError = () => {
        setTimeout(() => setError([]), 500);
    };

    useEffect(() => {
        if (found.length === arr.length) {
            setOver(true);
            setIsTimerActive(false);
        }
    }, [found.length, arr.length]);

    useEffect(() => {
        if (over) return;

        if (selected.length === 2) {
            if (arr[selected[0]] === arr[selected[1]]) {
                setFound((prev) => [...prev, selected[0], selected[1]]);
                setSelected([]);
            } else {
                setError(selected);
                ref.current = setTimeout(() => {
                    setSelected([]);
                    clearError();
                }, 1200);
            }
        }
    }, [selected, over, arr]);

    return (
        <>
            <h2>
                {!isTimerActive && !over ? (
                    "Start clicking to make pairs"
                ) : (
                    <Timer isTimerActive={isTimerActive} />
                )}
            </h2>
            <div className="container">
                {arr.map((ele, i) => (
                    <GameCard
                        key={i}
                        addToSelect={addToSelect}
                        index={i}
                        num={ele}
                        show={selected.includes(i) || found.includes(i)}
                        found={found.includes(i)}
                        error={error.includes(i)}
                    />
                ))}
            </div>
            {over && (
                <button
                    onClick={() => {
                        setFound([]);
                        setSelected([]);
                        setOver(false);
                        setArr(shuffleAndDouble);
                    }}
                >
                    Restart
                </button>
            )}
        </>
    );
}
