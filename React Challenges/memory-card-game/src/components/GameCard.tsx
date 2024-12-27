import { LucideIcon } from "lucide-react";

interface GameCardProps {
    num: LucideIcon;
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
    const Icon = num;
    return (
        <div
            data-found={found}
            data-error={error}
            onClick={() => {
                if (!show) addToSelect(index);
            }}
            className="card"
        >
            {show && <Icon size={80} className="card-icon"/>}
        </div>
    );
}
