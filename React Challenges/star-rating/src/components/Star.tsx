interface Props {
    num: number;
    level: number;
    actualLevel: number;
    handleClick: (x: number) => void;
    handleMouseLeave: () => void;
    handleMouseEnter: (x: number) => void;
}

const Star = ({
    num,
    handleClick,
    handleMouseEnter,
    handleMouseLeave,
    level,
    actualLevel,
}: Props) => {
    return (
        <span
            data-state={actualLevel >= num ? "active" : "inactive"}
            onClick={() => handleClick(num)}
            onMouseEnter={() => handleMouseEnter(num)}
            onMouseLeave={handleMouseLeave}
        >
            {level >= num ? "★" : "☆"}
        </span>
    );
};
export default Star;
