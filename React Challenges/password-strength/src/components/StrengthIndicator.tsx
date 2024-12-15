interface Props {
    strength: "weak" | "empty" | "strong" | "medium";
}

const StrengthIndicator = ({ strength }: Props) => {
    return (
        <div className="strong-container">
            <div className="strong" data-strength={strength} />
        </div>
    );
};
export default StrengthIndicator;
