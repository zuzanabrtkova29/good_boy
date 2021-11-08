import React from 'react'
import styled from 'styled-components'
import {colors} from '../constants'
import {useDispatch, useSelector} from 'react-redux'
import {
    nextStep,
    backStep,
    finishDonation,
    getDonationType,
    getSelectedShelter,
    getDonationAmount,
    getDonorName,
    getDonorSurname,
    getDonorEmail,
    getDonorPhone,
    getAgreementChecked,
    getSelectedShelterID,
} from '../reduxUtils'
import {nameValidation, emailValidation, phoneValidation} from '../formValidation'
import {sendDonorFormDataRequest} from '../apiCalls'

const nextStepActiveShadow = "0px 100px 80px rgba(0, 0, 0, 0.07), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802)"

const StyledNextButton = styled.button`
  position: absolute;
  width: ${(props) => props.width};
  height: 59px;
  border-radius: 100px;
  font-family: Public Sans;
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  color: ${colors.selectedButtonTextColor};
  line-height: 19px;
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  box-shadow: ${nextStepActiveShadow};
  background: ${(props) => props.disabled ? colors.buttonDisabledColor : colors.stepButtonGradientColor};
`

export function NextButton() {
    const dispatch = useDispatch()
    const selectedDonationType = useSelector(getDonationType)
    const selectedShelter = useSelector(getSelectedShelter)
    const selectedAmount = useSelector(getDonationAmount) || ""

    const nextStepActive = () => {
        if (selectedDonationType === 1 && selectedAmount && parseInt(selectedAmount) > 0)
            return true
        if (selectedDonationType === 0 && selectedShelter && selectedAmount)
            return true
        return false
    }
    const active = nextStepActive()

    const onClick = () => {
        if (!nextStepActive())
            return
        dispatch(nextStep())
    }

    return (
        <StyledNextButton
            width={"124px"}
            margin={"844px 0 0 682px"}
            padding={"20px 24px 20px 24px"}
            onClick={onClick}
            disabled={!active}
        >
            Pokračovať
        </StyledNextButton>
    )
}


export function NextConfirmButton() {
    const dispatch = useDispatch()
    const donorName = useSelector(getDonorName)
    const donorSurname = useSelector(getDonorSurname)
    const donorEmail = useSelector(getDonorEmail)
    const donorPhone = useSelector(getDonorPhone)

    const nextStepActive = () => {
        return !nameValidation(donorName || "", "meno")
            && !nameValidation(donorSurname || "", "priezvisko")
            && !emailValidation(donorEmail || "")
            && !phoneValidation(donorPhone || "")
    }
    const active = nextStepActive()

    const onClick = () => {
        dispatch(nextStep())
    }

    return (
        <StyledNextButton
            width={"124px"}
            margin={"764px 0 0 682px"}
            padding={"20px 24px 20px 24px"}
            onClick={onClick}
            disabled={!active}
        >
            Pokračovať
        </StyledNextButton>
    )
}

export function FinishConfirmButton() {
    const dispatch = useDispatch()
    const active = useSelector(getAgreementChecked)
    const formData = {
        "firstName": useSelector(getDonorName),
        "lastName": useSelector(getDonorSurname),
        "email": useSelector(getDonorEmail),
        "phone": useSelector(getDonorPhone),
        "value": useSelector(getDonationAmount),
        "shelterID": useSelector(getSelectedShelterID),
    }

    const onClick = () => {
        sendDonorFormDataRequest(formData).then((result) => {
            if (result.status === 200) {
                //after successful sending data to endpoint, all data should be reset to initial values
                window.alert("Formulár úspešne odoslaný.")
                dispatch(finishDonation())
            } else {
                window.alert("Odoslanie formulára neúspešné. Skúste prosím neskôr.")
            }
        })
    }

    return (
        <StyledNextButton
            width={"164px"}
            margin={"827px 0 0 638px"}
            padding={"20px 24px 20px 24px"}
            disabled={!active}
            onClick={onClick}
        >
            Odoslať formulár
        </StyledNextButton>
    )
}

const StyledBackButton = styled.button`
  position: absolute;
  width: 81px;
  height: 59px;
  border-radius: 100px;
  font-family: Public Sans;
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  color: ${colors.basicTitleColor};
  line-height: 19px;
  margin: ${(props) => props.margin};
  padding: 20px 24px 20px 24px;
  box-shadow: ${nextStepActiveShadow};
  background: ${colors.backButtonColor};
`

export function BackButton(props) {
    const dispatch = useDispatch()

    const onClick = () => {
        dispatch(backStep())
    }

    return (
        <StyledBackButton
            {...props}
            onClick={onClick}
        >
            Späť
        </StyledBackButton>
    )
}