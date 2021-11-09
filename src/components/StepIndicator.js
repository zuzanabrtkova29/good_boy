import styled from 'styled-components'
import {useSelector} from 'react-redux'
import {getCurrentStep} from '../reduxUtils'
import {colors} from '../constants'

const StepIndicatorContainer = styled.div`
  position: absolute;
  height: 6px;
  margin: 129px 0 0 249px;
`

const StepIndicatorItem = styled.div`
  position: absolute;
  width: ${(props) => props.long ? "43.77px" : "20.6px"};
  height: 6px;
  order: ${(props) => props.order};
  flex: none;
  flex-grow: 0;
  padding: 0;
  background: ${(props) => props.long ? colors.gradientColor : colors.buttonDisabledColor};
  border-radius: 10px;
  margin-left: ${(props) => props.lMargin};
`

export default function StepIndicator() {
    const currentStep = useSelector(getCurrentStep)

    return (
        <StepIndicatorContainer>
            <StepIndicatorItem lMargin={"0"} long={currentStep === 1}/>
            <StepIndicatorItem lMargin={currentStep === 1 ? "49px" : "26px"} long={currentStep === 2}/>
            <StepIndicatorItem lMargin={currentStep === 3 ? "51px" : "74px"} long={currentStep === 3}/>
        </StepIndicatorContainer>
    )
}