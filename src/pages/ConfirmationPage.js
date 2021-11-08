import React from 'react'
import MainTitle from '../components/MainTitle'
import {BackButton, FinishConfirmButton} from '../components/stepChangeButtons'
import ConfirmationPanel from '../components/ConfirmationPanel'
import ConfirmationCheckbox from '../components/AgreementCheckbox'

export function ConfirmationPage() {
    return (
        <div className="form">
            <MainTitle>Skontrolujte si zadané údaje</MainTitle>
            <ConfirmationPanel/>
            <ConfirmationCheckbox/>
            <BackButton margin={"827px 0 0 250px"}/>
            <FinishConfirmButton/>
        </div>
    )
}

export default ConfirmationPage