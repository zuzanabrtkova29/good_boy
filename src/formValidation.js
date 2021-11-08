export const nameValidation = (name, fieldType) => {
    if (name.trim() === '') {
        return `pole ${fieldType} je povinné`
    }
    if (name.trim().length < 2 || name.trim().length > 20) {
        return `${fieldType} musí mať 2-20 znakov`
    }
    return null
}

export const emailValidation = (email) => {
    if (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
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
        return null
    }
    if (phone.trim() === '') {
        return null
    }
    return 'prosím zadajte validné telefónne číslo'
}