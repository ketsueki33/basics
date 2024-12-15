function getPwdStrength(password: string) {
    // Check if password is empty
    if (!password) return "empty";

    // Remove leading and trailing whitespace
    password = password.trim();

    // Check length and complexity
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSpecialChars = /[^A-Za-z0-9]/.test(password);

    // Determine strength based on length and character types
    if (password.length < 8) return "weak";

    // Count number of different character types
    const complexityCount = [
        hasUppercase,
        hasLowercase,
        hasNumbers,
        hasSpecialChars,
    ].filter(Boolean).length;

    // Strength assessment
    if (complexityCount >= 3 && password.length >= 12) return "strong";
    if (complexityCount >= 2 && password.length >= 10) return "medium";

    return "weak";
}

export default getPwdStrength;
