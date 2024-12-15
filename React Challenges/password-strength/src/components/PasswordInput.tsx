interface Props {
    value: string;
    setPass: (x: string) => void;
}
const PasswordInput = ({ value, setPass }: Props) => {
    return <input value={value} onChange={(e) => setPass(e.target.value)} />;
};
export default PasswordInput;
