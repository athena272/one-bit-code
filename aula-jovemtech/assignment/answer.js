function validatePhone_version1(input, errorId)
{
    const value = input.value.trim();

    if (value.length < 10)
    {
        setError(input, errorId, "Digite um telefone com pelo menos 10 caracteres.");
        return false;
    }

    clearError(input, errorId);
    return true;
}

function validatePhone_version2(input, errorId)
{
    const digits = input.value.replace(/\D/g, "");
    if (digits.length < 10)
    {
        setError(input, errorId, "Digite um telefone válido.");
        return false;
    }
    clearError(input, errorId);
    return true;
}
