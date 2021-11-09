import React from 'react'
import MainTitle from '../components/MainTitle'
import DonorForm from '../components/DonorForm'
import {BackButton, NextConfirmButton} from '../components/stepChangeButtons'
import BottomBar from '../components/BottomBar'
import DogImg from '../components/DogImg'
import TopBar from '../components/TopBar'
import StepIndicator from '../components/StepIndicator'

export function DonorFormPage() {
    return (
        <div className="form">
            <StepIndicator/>
            <DogImg/>
            <TopBar/>
            <MainTitle>Potrebujeme od Vás zopár informácií</MainTitle>
            <DonorForm/>
            <BackButton margin={"764px 0 0 250px"}/>
            <NextConfirmButton/>
            <BottomBar/>
        </div>
    )
}

export default DonorFormPage