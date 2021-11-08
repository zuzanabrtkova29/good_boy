import React from 'react'
import styled from 'styled-components'
import {colors} from '../constants'
import {useDispatch, useSelector} from 'react-redux'
import {getAgreementChecked, setAgreementChecked} from "../reduxUtils";

const AgreementLabel = styled.div`
  position: absolute;
  width: 368px;
  height: 21px;
  font-family: Public Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  color: ${colors.basicTitleColor};
  margin-left: 300px;
  margin-top: 748px;
  opacity: 0.8;
`

const StyledAgreementCheckbox = styled.input`
  position: absolute;
  width: 34px;
  height: 34px;
  margin-left: 250px;
  margin-top: 742px;
`

export default function AgreementCheckbox() {
    const agreementChecked = useSelector(getAgreementChecked)
    const dispatch = useDispatch()

    return (
        <div>
            <AgreementLabel>Súhlasím so spracovaním mojich osobných údajov</AgreementLabel>
            <StyledAgreementCheckbox
                defaultChecked={agreementChecked}
                type="checkbox"
                onClick={() => dispatch(setAgreementChecked())}
            />
        </div>
    )
}