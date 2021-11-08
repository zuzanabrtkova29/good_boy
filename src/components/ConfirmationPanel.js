import React from 'react'
import styled from 'styled-components'
import {colors, countryPhoneCodes, donationTypes} from '../constants'
import {useSelector} from 'react-redux'
import {
    getDonationAmount,
    getDonationType,
    getDonorEmail,
    getDonorName,
    getDonorPhone,
    getDonorPhoneCountry,
    getDonorSurname,
    getSelectedShelter
} from "../reduxUtils";

const ConfirmationPanelItemTitle = styled.div`
  position: absolute;
  height: 19px;
  font-family: Public Sans;
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 19px;
  color: ${colors.basicTitleColor};
  margin-left: 250px;
  margin-top: ${(props) => props.tMargin};
`
const ConfirmationPanelItemValue = styled.div`
  position: absolute;
  height: 19px;
  font-family: Public Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: ${colors.basicTitleColor};
  margin-left: 250px;
  margin-top: ${(props) => props.tMarginI};
`

function ConfirmationPanelItem(props) {
    return (
        <div>
            <ConfirmationPanelItemTitle {...props}>{props.title}</ConfirmationPanelItemTitle>
            <ConfirmationPanelItemValue {...props}>{props.value}</ConfirmationPanelItemValue>
        </div>
    )
}

export default function ConfirmationPanel() {
    const savedDonationType = useSelector(getDonationType)
    const savedSelectedShelter = useSelector(getSelectedShelter)
    const savedAmount = useSelector(getDonationAmount)
    const savedDonorName = useSelector(getDonorName)
    const savedDonorSurname = useSelector(getDonorSurname)
    const savedDonorEmail = useSelector(getDonorEmail)
    const savedDonorPhone = useSelector(getDonorPhone)
    const savedDonorPhoneCountry = useSelector(getDonorPhoneCountry)

    return (
        <div>
            <ConfirmationPanelItem
                title={"Akou formou chcem pomôcť"}
                value={donationTypes[savedDonationType]}
                tMargin={"309px"}
                tMarginI={"336px"}
            />
            <ConfirmationPanelItem
                title={"Najviac mi záleží na útulku"}
                value={savedSelectedShelter}
                tMargin={"377px"}
                tMarginI={"404px"}
            />
            <ConfirmationPanelItem
                title={"Suma ktorou chcem pomôcť"}
                value={savedAmount + " €"}
                tMargin={"445px"}
                tMarginI={"472px"}
            />
            <ConfirmationPanelItem
                title={"Meno a priezvisko"}
                value={savedDonorName + (savedDonorName.length > 0 ? " " : "") + savedDonorSurname}
                tMargin={"513px"}
                tMarginI={"540px"}
            />
            <ConfirmationPanelItem
                title={"E-mailová adresa"}
                value={savedDonorEmail}
                tMargin={"579px"}
                tMarginI={"606px"}
            />
            <ConfirmationPanelItem
                title={"Telefónne číslo"}
                value={countryPhoneCodes[savedDonorPhoneCountry] + " " + savedDonorPhone}
                tMargin={"650px"}
                tMarginI={"677px"}
            />
        </div>
    )
}