import {configureStore, createSlice} from '@reduxjs/toolkit';

const initialState = {
    currentStep: 1,
    donationType: 1,
    selectedShelter: null,
    donationAmount: null,
    name: null,
    surname: null,
    email: null,
    phone: null,
    phoneCountry: "sk",
    agreementChecked: false,
}

const goodBoySlice = createSlice({
    name: 'good_boy',
    initialState,
    reducers: {
        nextStep: (state) => {
            state.currentStep += 1;
        },
        backStep: (state) => {
            state.currentStep -= 1;
        },
        finishDonation: (state) => {
            state.currentStep = 1
        },
        setDonationType: (state, action) => {
            state.donationType = action.payload
        },
        setSelectedShelter: (state, action) => {
            state.selectedShelter = action.payload
        },
        setDonationAmount: (state, action) => {
            state.donationAmount = action.payload
        },
        setDonorName: (state, action) => {
            state.name = action.payload
        },
        setDonorSurname: (state, action) => {
            state.surname = action.payload
        },
        setDonorEmail: (state, action) => {
            state.email = action.payload
        },
        setDonorPhone: (state, action) => {
            state.phone = action.payload
        },
        setDonorPhoneCountry: (state, action) => {
            state.phoneCountry = action.payload
        },
        setAgreementChecked: (state) => {
            state.agreementChecked = !state.agreementChecked
        },
    },
})

export const {
    nextStep,
    backStep,
    finishDonation,
    setDonationType,
    setSelectedShelter,
    setDonationAmount,
    setDonorName,
    setDonorSurname,
    setDonorEmail,
    setDonorPhone,
    setDonorPhoneCountry,
    setAgreementChecked,
} = goodBoySlice.actions

export const getCurrentStep = (state) => state.currentState.currentStep
export const getDonationType = (state) => state.currentState.donationType
export const getSelectedShelter = (state) => state.currentState.selectedShelter
export const getDonationAmount = (state) => state.currentState.donationAmount
export const getDonorName = (state) => state.currentState.name
export const getDonorSurname = (state) => state.currentState.surname
export const getDonorEmail = (state) => state.currentState.email
export const getDonorPhone = (state) => state.currentState.phone
export const getDonorPhoneCountry = (state) => state.currentState.phoneCountry
export const getAgreementChecked = (state) => state.currentState.agreementChecked

export const store = configureStore({
    reducer: {
        currentState: goodBoySlice.reducer,
    },
})