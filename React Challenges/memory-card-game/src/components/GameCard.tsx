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
            data-show={show}
            onClick={() => {
                if (!show) addToSelect(index);
            }}
            className="card"
        >
            <div className="card-content">
                <div className="front"></div>
                <div className="back" data-found={found} data-error={error}>
                     <Icon size={70} className="card-icon" />
                </div>
            </div>
        </div>
    );
}
