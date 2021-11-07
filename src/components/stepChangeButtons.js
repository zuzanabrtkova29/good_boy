import React from 'react'
import styled from 'styled-components'
import {colors} from '../constants'
import {useDispatch, useSelector} from 'react-redux'
import {nextStep, getDonationType, getSelectedShelter, getDonationAmount} from '../reduxUtils'

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
  background: ${(props) => props.active ? colors.stepButtonGradientColor : colors.buttonDisabledColor};
`

export function NextButton() {
    const dispatch = useDispatch()
    const selectedDonationType = useSelector(getDonationType)
    const selectedShelter = useSelector(getSelectedShelter)
    const selectedAmount = useSelector(getDonationAmount)

    const nextStepActive = () => {
        if (selectedDonationType === 1 && selectedAmount)
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
            active={active}
        >
            Pokračovať
        </StyledNextButton>
    )
}