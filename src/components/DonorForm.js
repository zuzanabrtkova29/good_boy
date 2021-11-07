import React from 'react'
import styled from 'styled-components'
import {colors, countryPhoneCodes} from '../constants'
import {useDispatch, useSelector} from 'react-redux'
import {
    getDonorEmail,
    getDonorName,
    getDonorPhone,
    getDonorSurname,
    getDonorPhoneCountry,
    setDonorEmail,
    setDonorName,
    setDonorPhone,
    setDonorSurname,
    setDonorPhoneCountry,
} from '../reduxUtils'
import {nameValidation, emailValidation, phoneValidation} from '../formValidation'
import sk from '../assets/sk.png'
import cz from '../assets/cz.png'

const FormTitle = styled.div`
  position: absolute;
  width: 37px;
  height: 19px;
  font-family: Public Sans;
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 19px;
  color: ${colors.basicTitleColor};
  margin: 309px 0 0 250px;
`

const FormItem = styled.div`
  position: absolute;
  width: 557px;
  height: ${(props) => props.height ? props.height : "74px"};
  background: ${colors.basicButtonColor};
  border: 1px solid #DFDFDF;
  box-sizing: border-box;
  border-radius: 8px;
  margin-left: 250px;
  margin-top: ${(props) => props.tMargin};
`

const FormItemTitle = styled.div`
  position: absolute;
  width: 132px;
  height: 21px;
  font-family: Public Sans;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 21px;
  color: ${colors.basicTitleColor};
  padding: 16px 0 0 24px;
`

const FormItemInput = styled.input`
  position: absolute;
  width: 220px;
  height: 21px;
  font-family: Public Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  color: ${colors.basicSubtitleColor};
  padding-left: ${(props) => props.lPadding ? props.lPadding : "0"};
  border-style: none;
  margin-left: ${(props) => props.lMargin ? props.lMargin : "24px"};
  margin-top: ${(props) => props.tMargin ? props.tMargin : "37px"};
  cursor: pointer;

  &::placeholder {
    opacity: 1;
  }
`

const CountryFlag = styled.div`
  position: absolute;
  width: 27px;
  height: 17px;
  padding: 0;
  margin: 45px 0 0 26px;
  background-image: url(${(props) => props.country});
`

const CountryPhoneCode = styled.div`
  position: absolute;
  width: 34px;
  height: 21px;
  font-family: Public Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  color: ${colors.basicSubtitleColor};
  border: none;
  padding: 0;
  margin: 44px 0 0 61px;
`

const ErrorInfo = styled.div`
  font-family: Public Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 14px;
  padding-left: 5px;
  padding-top: 2px;
  color: ${colors.errorMessageColor};
`

export default function DonorForm() {
    const dispatch = useDispatch()
    const savedDonorName = useSelector(getDonorName)
    const savedDonorSurname = useSelector(getDonorSurname)
    const savedDonorEmail = useSelector(getDonorEmail)
    const savedDonorPhone = useSelector(getDonorPhone)
    const savedDonorPhoneCountry = useSelector(getDonorPhoneCountry)

    const validationNameResult = savedDonorName !== null
        ? nameValidation(savedDonorName, "meno", false)
        : null
    const validationSurnameResult = savedDonorSurname !== null
        ? nameValidation(savedDonorSurname, "priezvisko", true)
        : null
    const validationEmailResult = savedDonorEmail !== null
        ? emailValidation(savedDonorEmail)
        : null
    const validationPhoneResult = savedDonorPhone !== null
        ? phoneValidation(savedDonorPhone)
        : null

    const formInputOnBlur = (event, type) => {
        const typedValue = event.target.value || ""
        switch (type) {
            case "name":
                dispatch(setDonorName(typedValue))
                break
            case "surname":
                dispatch(setDonorSurname(typedValue))
                break
            case "email":
                dispatch(setDonorEmail(typedValue))
                break
            case "phone":
                dispatch(setDonorPhone(typedValue))
                break
            default:
                break
        }
    }

    const changePhoneCountry = () => {
        if (savedDonorPhoneCountry === "sk") {
            dispatch(setDonorPhoneCountry("cz"))
        } else {
            dispatch(setDonorPhoneCountry("sk"))
        }
    }

    return (
        <div>
            <FormTitle>O vás</FormTitle>
            <FormItem tMargin={"341px"}>
                <FormItemTitle>Meno</FormItemTitle>
                <FormItemInput
                    defaultValue={savedDonorName || ""}
                    placeholder={"Zadajte Vaše meno"}
                    onBlur={(e) => {
                        formInputOnBlur(e, "name")
                    }}
                />
                {validationNameResult && <ErrorInfo>* {validationNameResult}</ErrorInfo>}
            </FormItem>
            <FormItem tMargin={"431px"}>
                <FormItemTitle>Priezvisko</FormItemTitle>
                <FormItemInput
                    defaultValue={savedDonorSurname || ""}
                    placeholder={"Zadajte Vaše priezvisko"}
                    onBlur={(e) => {
                        formInputOnBlur(e, "surname")
                    }}
                />
                {validationSurnameResult && <ErrorInfo>* {validationSurnameResult}</ErrorInfo>}
            </FormItem>
            <FormItem tMargin={"523px"}>
                <FormItemTitle>E-mailová adresa</FormItemTitle>
                <FormItemInput
                    defaultValue={savedDonorEmail || ""}
                    placeholder={"Zadajte Váš email"}
                    onBlur={(e) => {
                        formInputOnBlur(e, "email")
                    }}
                />
                {validationEmailResult && <ErrorInfo>* {validationEmailResult}</ErrorInfo>}
            </FormItem>
            <FormItem tMargin={"616px"} height={"80px"} lMargin={"311px"}>
                <FormItemTitle>Telefónne číslo</FormItemTitle>
                <CountryFlag
                    country={savedDonorPhoneCountry === "sk" ? sk : cz}
                    onClick={changePhoneCountry}
                />
                <FormItemInput
                    defaultValue={savedDonorPhone || ""}
                    onBlur={(e) => {
                        formInputOnBlur(e, "phone")
                    }}
                    lPadding={"36px"}
                    lMargin={"61px"}
                    tMargin={"43px"}
                />
                <CountryPhoneCode>{countryPhoneCodes[savedDonorPhoneCountry]}</CountryPhoneCode>
                {validationPhoneResult && <ErrorInfo>* {validationPhoneResult}</ErrorInfo>}
            </FormItem>
        </div>
    )
}