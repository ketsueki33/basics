interface Props {
    pwd: string;
}

const ReqList = ({ pwd }: Props) => {
    const hasUppercase = /[A-Z]/.test(pwd);
    const hasLowercase = /[a-z]/.test(pwd);
    const hasNumbers = /[0-9]/.test(pwd);
    const hasSpecialChars = /[^A-Za-z0-9]/.test(pwd);

    return (
        <div className="req-list">
            <p data-valid={hasUppercase}> uppercase</p>
            <p data-valid={hasLowercase}> lowercase</p>
            <p data-valid={hasNumbers}> numbers</p>
            <p data-valid={hasSpecialChars}> special characters</p>
        </div>
    );
};
export default ReqList;
