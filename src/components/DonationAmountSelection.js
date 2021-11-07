import React from 'react'
import styled from 'styled-components'
import {colors} from '../constants'
import {useSelector, useDispatch} from 'react-redux'
import {getDonationAmount, setDonationAmount} from '../reduxUtils'
import Price from 'react-price'

const DonationAmountTitle = styled.div`
  position: absolute;
  width: 221px;
  height: 19px;
  font-family: Public Sans;
  color: ${colors.basicTitleColor};
  font-weight: 800;
  font-style: normal;
  font-size: 16px;
  line-height: 19px;
  margin: 685px 0 0 251px;
`

const AmountOptionContainer = styled.div`
  position: absolute;
  height: 53px;
  width: ${(props) => props.width};
  padding: 16px;
  margin-top: 719px;
  margin-left: ${(props) => props.left};
  color: ${(props) => props.selected ? colors.selectedButtonTextColor : colors.basicTitleColor};
  font-family: Public Sans;
  font-style: normal;
  font-weight: 800;
  text-align: center;
  font-size: 16px;
  line-height: 21px;
  background: ${(props) => props.selected ? colors.amountGradientColor : colors.basicButtonColor};
  border: 1px solid #DFDFDF;
  box-sizing: border-box;
  border-radius: 8px;
  cursor: pointer;
`

const CustomAmountInput = styled.input`
  position: absolute;
  height: 53px;
  width: 86px;
  padding: 16px;
  margin: 719px 0 0 696px;
  font-family: Public Sans;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 21px;
  border: 1px solid #DFDFDF;
  box-sizing: border-box;
  border-radius: 8px;
  background: ${(props) => props.selected ? colors.amountGradientColor : colors.basicButtonColor};
  cursor: pointer;
`

export function DonationAmountButtonGroup() {
    const amounts = [
        {amount: 5, lmargin: "251px", width: "58px"},
        {amount: 10, lmargin: "316px", width: "64px"},
        {amount: 20, lmargin: "387px", width: "68px"},
        {amount: 30, lmargin: "462px", width: "68px"},
        {amount: 50, lmargin: "537px", width: "68px"},
        {amount: 100, lmargin: "612px", width: "75px"},
    ]
    const dispatch = useDispatch()
    const selectedAmount = useSelector(getDonationAmount)

    return (
        <div>
            <DonationAmountTitle>Suma, ktorou chcem prispieť</DonationAmountTitle>
            {
                amounts.map(({amount, lmargin, width}, i) => (
                        <AmountOptionContainer
                            key={i}
                            left={lmargin}
                            width={width}
                            onClick={() => dispatch(setDonationAmount(amount))}
                            selected={selectedAmount === amount}
                        >
                            <Price
                                cost={amount}
                                currency={"€"}
                            />
                        </AmountOptionContainer>
                    )
                )
            }
            <CustomAmountInput
                onChange={(e) => dispatch(setDonationAmount(e.target.value))}
            />
        </div>
    )
}