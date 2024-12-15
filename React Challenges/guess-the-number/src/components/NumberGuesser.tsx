import { useRef, useState } from "react";

type States = "empty" | "right" | "less" | "high";

const generateRandom = () => Math.floor(Math.random() * 100 + 1);

const NumberGuesser = () => {
    const [target, setTarget] = useState(generateRandom);

    const inputRef = useRef<HTMLInputElement>(null);

    const [state, setState] = useState<States>("empty");

    const checkNum = (x: number) => {
        if (x === target) setState("right");
        else if (x >= target) setState("high");
        else setState("less");
    };

    return (
        <form
            className="container"
            onSubmit={(e) => {
                e.preventDefault();
                if (inputRef.current) checkNum(Number(inputRef.current.value));
            }}
        >
            <label>Guess a Number between 1 and 100</label>
            <input ref={inputRef} type="number" required min={1} max={100} />
            <div className="buttons">
                <button
                    type="reset"
                    onClick={() => {
                        setTarget(generateRandom());
                        setState("empty");
                    }}
                >
                    Restart
                </button>
                <button type="reset" disabled={state === "right"}>
                    Clear
                </button>
                <button type="submit" disabled={state === "right"}>
                    Check
                </button>
            </div>
            {state === "right" ? (
                <p>
                    Your guess is <strong>correct</strong>!
                </p>
            ) : null}
            {state === "less" ? (
                <p>
                    Your guess is <em>lower</em> than the number
                </p>
            ) : null}
            {state === "high" ? (
                <p>
                    Your guess is <em>higher</em> than the number
                </p>
            ) : null}
        </form>
    );
};
export default NumberGuesser;
