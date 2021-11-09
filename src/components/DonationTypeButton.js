import React from 'react'
import styled from 'styled-components'
import {colors, donationTypes} from '../constants'
import {useSelector, useDispatch} from 'react-redux'
import {getDonationType, setDonationType} from '../reduxUtils'
import icon from '../assets/icon.png'

const selectedTypeShadow = "0px 100px 80px rgba(0, 0, 0, 0.07), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802)"

const StyledDonationTypeButton = styled.div`
  position: absolute;
  height: 186px;
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  color: ${(props) => props.selected ? colors.selectedButtonTextColor : colors.donationTypeTextColor};
  background: ${(props) => props.selected ? colors.gradientColor : colors.donationTypeButtonColor};
  border: 1px solid #CD8B65;
  box-sizing: border-box;
  box-shadow: ${(props) => props.selected ? selectedTypeShadow : "0 0 0 0"};
  border-radius: ${(props) => props.borderRadius};
  cursor: pointer;
`

const DonationTypeImg = styled.img`
  position: absolute;
  width: 80px;
  height: 80px;
  margin: 23px 0 0 25px;
`

const DonationTypeTitle = styled.div`
  position: absolute;
  width: 199px;
  height: 42px;
  font-family: Public Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  text-align: left;
  line-height: 21px;
  margin: 120px 0 0 25px;
`

export function FoundationDonationButton() {
    const selected = useSelector(getDonationType) === 1
    const dispatch = useDispatch()
    return (
        <StyledDonationTypeButton
            width={"278px"}
            borderRadius={"0 24px 24px 0"}
            margin={"295px 0 0 526px"}
            selected={selected}
            onClick={() => dispatch(setDonationType(1))}
        >
            <DonationTypeImg src={icon} alt={"icon"}/>
            <DonationTypeTitle>{donationTypes[1]}</DonationTypeTitle>
        </StyledDonationTypeButton>
    )
}

export function ShelterDonationButton() {
    const selected = useSelector(getDonationType) === 0
    const dispatch = useDispatch()
    return (
        <StyledDonationTypeButton
            width={"279px"}
            borderRadius={"24px 0 0 24px"}
            margin={"295px 0 0 248px"}
            selected={selected}
            onClick={() => dispatch(setDonationType(0))}
        >
            <DonationTypeImg src={icon} alt={"icon"}/>
            <DonationTypeTitle>{donationTypes[0]}</DonationTypeTitle>
        </StyledDonationTypeButton>
    )
}