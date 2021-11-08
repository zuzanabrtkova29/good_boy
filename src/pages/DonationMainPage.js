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

const apiRequest = async () => {
    const options = {
        method: 'GET',
        headers: {},
    }
    const apiUrl = "https://frontend-assignment-api.goodrequest.com/api/v1/shelters"
    const res = await fetch(apiUrl, options)
    if (res.status >= 400) return res
    return await res.json()
}

export function DonationMainPage() {
    const [sheltersList, setSheltersList] = useState([])

    useEffect(() => {
        apiRequest().then((data) => {
            if (data.shelters) {
                setSheltersList(data.shelters)
            }
        })
    }, [])

    return (
        <div className="main">
            <MainTitle>Vyberte si možnosť, ako chcete pomôcť</MainTitle>
            <ShelterDonationButton/>
            <FoundationDonationButton/>
            <ShelterSelectionTitle>O projekte</ShelterSelectionTitle>
            <ShelterMandatoryTitle>{useSelector(getDonationType) ? "Nepovinné" : "Povinné"}</ShelterMandatoryTitle>
            <ShelterSelectorDropdown sheltersList={sheltersList}/>
            <DonationAmountButtonGroup/>
            <NextButton/>
            <BottomBar/>
        </div>
    )
}

export default DonationMainPage