import { useState } from "react";
import Star from "./Star";

const Stars = () => {
    const [level, setLevel] = useState(0);
    const [actualLevel, setActualLevel] = useState(0);

    const handleClick = (x: number) => setActualLevel(x);

    const handleMouseEnter = (x: number) => setLevel(x);
    const handleMouseLeave = () => setLevel(actualLevel);

    return (
        <div className="container">
            {[1, 2, 3, 4, 5].map((e) => (
                <Star
                    key={e}
                    num={e}
                    level={level}
                    actualLevel={actualLevel}
                    handleClick={handleClick}
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                />
            ))}
        </div>
    );
};
export default Stars;
