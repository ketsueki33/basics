import { useEffect, useRef, useState } from "react";

interface Props {
    isTimerActive: boolean;
}

const Timer = ({ isTimerActive }: Props) => {
    const [time, setTime] = useState(0);
    const timeRef = useRef<number | null>(null);

    useEffect(() => {
        if (isTimerActive) {
            timeRef.current = setInterval(() => {
                setTime((prev) => prev + 0.1);
            }, 100);
        }

        return () => {
            if (timeRef.current) {
                clearInterval(timeRef.current);
            }
        };
    }, [isTimerActive]);

    return <div data-over={!isTimerActive} className="timer">{time.toFixed(1)} s</div>;
};

export default Timer;
