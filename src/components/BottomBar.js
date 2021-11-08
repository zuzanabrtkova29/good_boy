import React from 'react'
import styled from 'styled-components'
import good_boy_logo from '../assets/good_boy_logo.png'
import good_boy_title from '../assets/good_boy_title.png'
import {colors} from '../constants'

const BottomBarSeparator = styled.hr`
  position: absolute;
  width: 1140px;
  border: 0;
  border-bottom: 1px solid #2F2F2F;
  margin: 1012px 0 0 150px;
`

const LogoWrapper = styled.div`
  position: absolute;
  margin: 1108.98px 0 0 150px;
`

const LogoTitleWrapper = styled.div`
  position: absolute;
  margin: 1117.99px 0 0 216.03px;
`

const BottomBarGroupContainer = styled.div`
  position: absolute;
  margin-left: ${(props) => props.left};
`

const BottomBarGroupTitle = styled.div`
  position: absolute;
  width: 170px;
  height: 21px;
  font-family: Public Sans;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 21px;
  margin-top: 1130px;
`
const BottomBarList = styled.ul`
  position: absolute;
  width: 170px;
  padding: 0;
  font-family: Public Sans;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  line-height: 32px;
  color: ${colors.bottomBarItemTextColor};
  margin-top: 1175px;
`
const BottomBarListItem = styled.li`
  list-style: none;
`

const BottomBar = () => {
    return (
        <div>
            <BottomBarSeparator/>
            <LogoWrapper>
                <img src={good_boy_logo} alt={"GoodBoy logo"}/>
            </LogoWrapper>
            <LogoTitleWrapper>
                <img src={good_boy_title} alt={"GoodBoy title"}/>
            </LogoTitleWrapper>
            <BottomBarGroupContainer left={"538px"}>
                <BottomBarGroupTitle>Nadácia Good boy</BottomBarGroupTitle>
                <BottomBarList>
                    <BottomBarListItem>O projekte</BottomBarListItem>
                    <BottomBarListItem>Ako na to</BottomBarListItem>
                    <BottomBarListItem>Kontakt</BottomBarListItem>
                </BottomBarList>
            </BottomBarGroupContainer>
            <BottomBarGroupContainer left={"829px"}>
                <BottomBarGroupTitle>Nadácia Good boy</BottomBarGroupTitle>
                <BottomBarList>
                    <BottomBarListItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum
                        ipsum, sit amet. </BottomBarListItem>
                </BottomBarList>
            </BottomBarGroupContainer>
            <BottomBarGroupContainer left={"1120px"}>
                <BottomBarGroupTitle>Nadácia Good boy</BottomBarGroupTitle>
                <BottomBarList>
                    <BottomBarListItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum
                        ipsum, sit amet. </BottomBarListItem>
                </BottomBarList>
            </BottomBarGroupContainer>
        </div>
    )
}

export default BottomBar