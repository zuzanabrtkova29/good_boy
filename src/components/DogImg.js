import dog from '../assets/dog.png'
import styled from 'styled-components'

const DogImgContainer = styled.div`
  position: absolute;
  width: 364px;
  height: 730px;
  margin: 129px 0 0 870px;
`

export default function DogImg() {
    return (
        <DogImgContainer>
            <img src={dog} alt={"dog"}/>
        </DogImgContainer>
    )
}