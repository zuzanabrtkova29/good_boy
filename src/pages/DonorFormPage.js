import React from 'react'
import MainTitle from '../components/MainTitle'
import DonorForm from '../components/DonorForm'
import {BackButton, NextConfirmButton} from '../components/stepChangeButtons'

export function DonorFormPage() {
    return (
        <div className="form">
            <MainTitle>Potrebujeme od Vás zopár informácií</MainTitle>
            <DonorForm/>
            <BackButton margin={"764px 0 0 250px"}/>
            <NextConfirmButton/>
        </div>
    )
}

export default DonorFormPage