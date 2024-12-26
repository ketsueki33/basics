import { useState, useRef, useEffect } from "react";
import GameCard from "./GameCard";

export default function Game() {
    const arr: number[] = [1, 2, 1, 2];
    const [selected, setSelected] = useState<number[]>([]);
    const [found, setFound] = useState<number[]>([]);
    const [error, setError] = useState<number[]>([]);
    const ref = useRef<number | null>(null);
    const [over, setOver] = useState<boolean>(false);

    const addToSelect = (index: number): void => {
        setSelected((prev) => [...prev, index]);
    };

    useEffect(() => {
        if (found.length === 4) {
            setOver(true);
        }
    }, [found.length]);

    useEffect(() => {
        if (over) return;

        if (selected.length === 2) {
            if (arr[selected[0]] === arr[selected[1]]) {
                setFound((prev) => [...prev, selected[0], selected[1]]);
                setSelected([]);
            } else {
                setError([...selected]);
                ref.current = setTimeout(() => {
                    setSelected([]);
                    setError([]);
                }, 2000);
            }
        }

        if (selected.length === 3) {
            if (ref.current) {
                clearTimeout(ref.current);
                setError([]);
            }
            setSelected([selected[2]]);
        }
    }, [selected, over, arr]);

    return (
        <>
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
                    }}
                >
                    Restart
                </button>
            )}
        </>
    );
}
