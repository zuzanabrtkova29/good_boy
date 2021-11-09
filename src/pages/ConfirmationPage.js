import React from 'react'
import MainTitle from '../components/MainTitle'
import {BackButton, FinishConfirmButton} from '../components/stepChangeButtons'
import ConfirmationPanel from '../components/ConfirmationPanel'
import ConfirmationCheckbox from '../components/AgreementCheckbox'
import BottomBar from '../components/BottomBar'
import DogImg from '../components/DogImg'
import TopBar from '../components/TopBar'
import StepIndicator from '../components/StepIndicator'

export function ConfirmationPage() {
    return (
        <div className="form">
            <StepIndicator/>
            <DogImg/>
            <TopBar/>
            <MainTitle>Skontrolujte si zadané údaje</MainTitle>
            <ConfirmationPanel/>
            <ConfirmationCheckbox/>
            <BackButton margin={"827px 0 0 250px"}/>
            <FinishConfirmButton/>
            <BottomBar/>
        </div>
    )
}

export default ConfirmationPage