import { useState } from "react";
import PasswordInput from "./PasswordInput";
import ReqList from "./ReqList";
import getPwdStrength from "../utils/getPwdStrength";
import StrengthIndicator from "./StrengthIndicator";

const PasswordChecker = () => {
    const [password, setPassword] = useState("");

    const strength = getPwdStrength(password);

    return (
        <div className="container">
            <PasswordInput value={password} setPass={setPassword} />
            <ReqList pwd={password} />
            <StrengthIndicator strength={strength} />
        </div>
    );
};
export default PasswordChecker;
