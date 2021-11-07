export const nameValidation = (name, fieldType, required) => {
    if (name.trim() === '') {
        if (required) {
            return `pole ${fieldType} je povinné`
        }
        return null
    }
    if (name.trim().length < 2 || name.trim().length > 20) {
        return `${fieldType} musí mať 2-20 znakov`
    }
    return null;
}

export const emailValidation = (email) => {
    if (
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            email,
        )
    ) {
        return null;
    }
    if (email.trim() === '') {
        return 'pole email je povinné'
    }
    return 'prosím zadajte validný email'
}

export const phoneValidation = (phone) => {
    if (
        /^\d{3}\s?\d{3}\s?\d{3}$/.test(
            phone.trim(),
        )
    ) {
        return null;
    }
    if (phone.trim() === '') {
        return 'pole telefónne číslo je povinné'
    }
    return 'prosím zadajte validné telefónne číslo'
}