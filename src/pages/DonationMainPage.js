import React, {useState, useEffect} from 'react'
import MainTitle from '../components/MainTitle'
import {ShelterDonationButton, FoundationDonationButton} from '../components/DonationTypeButton'
import {ShelterSelectionTitle, ShelterMandatoryTitle} from '../components/ShelterSelectionTitles'
import ShelterSelectorDropdown from '../components/ShelterSelectionDropdown'
import {useSelector} from 'react-redux'
import {getDonationType} from '../reduxUtils'
import {DonationAmountButtonGroup} from '../components/DonationAmountSelection'
import {NextButton} from '../components/stepChangeButtons'
import BottomBar from '../components/BottomBar'
import DogImg from '../components/DogImg'
import {loadSheltersRequest} from '../apiCalls'

export function DonationMainPage() {
    const [sheltersList, setSheltersList] = useState([])

    useEffect(() => {
        loadSheltersRequest().then((data) => {
            if (data.shelters) {
                setSheltersList(data.shelters)
            }
        })
    }, [])

    return (
        <div className="main">
            <DogImg/>
            <MainTitle>Vyberte si možnosť, ako chcete pomôcť</MainTitle>
            <ShelterDonationButton/>
            <FoundationDonationButton/>
            <DonationAmountButtonGroup/>
            <NextButton/>
            <BottomBar/>
            <ShelterSelectionTitle>O projekte</ShelterSelectionTitle>
            <ShelterMandatoryTitle>{useSelector(getDonationType) ? "Nepovinné" : "Povinné"}</ShelterMandatoryTitle>
            <ShelterSelectorDropdown sheltersList={sheltersList}/>
        </div>
    )
}

export default DonationMainPage