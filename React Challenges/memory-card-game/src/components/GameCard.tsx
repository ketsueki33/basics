interface GameCardProps {
    num: number;
    show: boolean;
    addToSelect: (index: number) => void;
    index: number;
    found?: boolean;
    error?: boolean;
}

export default function GameCard({
    num,
    show,
    addToSelect,
    index,
    found,
    error,
}: GameCardProps) {
    return (
        <div
            data-found={found}
            data-error={error}
            onClick={() => {
                if (!show) addToSelect(index);
            }}
            className="card"
        >
            {show && <p>{num}</p>}
        </div>
    );
}
