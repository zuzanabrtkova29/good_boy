import styled from 'styled-components'
import {colors} from '../constants'
import fb from '../assets/fb.png'
import ig from '../assets/ig.png'

const StyledTopBar = styled.div`
  position: absolute;
  width: 1440px;
  height: 40px;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.08);
`

const TopBarTitleContainer = styled.div`
  position: absolute;
  width: 121px;
  height: 16px;
  margin: 12px 0 0 174px;
  font-family: Public Sans;
  font-weight: 600;
  font-style: normal;
  font-size: 14px;
  line-height: 16.45px;
  color: ${colors.basicSubtitleColor};
`

const TopBarImgContainer = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  margin-top: 8px;
  margin-left: ${(props) => props.lMargin}
`

export default function TopBar() {
    return (
        <StyledTopBar>
            <TopBarTitleContainer>Nadácia Good Boy</TopBarTitleContainer>
            <TopBarImgContainer src={fb} alt={"fb"} lMargin={"1234px"}/>
            <TopBarImgContainer src={ig} alt={"ig"} lMargin={"1266px"}/>
        </StyledTopBar>
    )
}