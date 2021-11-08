export const loadSheltersRequest = async () => {
    const options = {
        method: 'GET',
        headers: {},
    }
    const apiUrl = "https://frontend-assignment-api.goodrequest.com/api/v1/shelters"
    const res = await fetch(apiUrl, options)
    if (res.status >= 400) return res
    return await res.json()
}

export const sendDonorFormDataRequest = async (formData) => {
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
    }
    const apiUrl = "https://frontend-assignment-api.goodrequest.com/api/v1/shelters/contribute"
    return await fetch(apiUrl, options)
}