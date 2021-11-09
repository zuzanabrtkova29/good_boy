import React, {useState} from 'react'
import styled from 'styled-components'
import {colors} from '../constants'
import {useSelector, useDispatch} from 'react-redux'
import {getSelectedShelter, setSelectedShelter, setSelectedShelterID} from '../reduxUtils'
import arrow from '../assets/arrow.png'

const ShelterSelectorContainer = styled.div``

const ShelterHeader = styled.div`
  position: absolute;
  width: 557px;
  height: 74px;
  border: 1px solid #DFDFDF;
  border-radius: 8px;
  box-sizing: border-box;
  background: ${colors.basicButtonColor};
  margin: 571px 0 0 249px;
  cursor: pointer;
`
const ShelterHeaderTitle = styled.div`
  position: absolute;
  width: 53px;
  height: 21px;
  padding: 16px 0 0 24px;
  font-family: Public Sans;
  font-weight: 800;
  font-style: normal;
  font-size: 16px;
  line-height: 21px;
  color: ${colors.basicTitleColor};
`
const ShelterHeaderSubtitle = styled.div`
  position: absolute;
  width: 220px;
  height: 21px;
  padding: 37px 0 0 24px;
  font-family: Public Sans;
  font-weight: normal;
  font-style: normal;
  font-size: 16px;
  line-height: 21px;
  color: ${(props) => props.selectedShelter ? colors.basicTitleColor : colors.basicSubtitleColor};
`

const ShelterDropdownArrow = styled.img`
  position: absolute;
  margin: 35px 0 0 518px;
`
const ShelterList = styled.ul`
  position: absolute;
  padding: 0;
  width: 557px;
  font-family: Public Sans;
  font-weight: 800;
  font-style: normal;
  font-size: 16px;
  line-height: 21px;
  color: ${colors.basicTitleColor};
  border: 1px solid #DFDFDF;
  box-sizing: border-box;
  margin: 645px 0 0 249px;
`
const ShelterListItem = styled.li`
  list-style: none;
  padding: 10px 0 0 21px;
  height: 36px;
  cursor: pointer;
  background: ${colors.basicButtonColor};

  &:hover {
    background: ${colors.gradientColor};
    color: ${colors.selectedButtonTextColor};
  }
;
`

const ShelterSelectionDropdown = ({sheltersList}) => {
    const [isOpen, setIsOpen] = useState(false)
    const selectedShelter = useSelector(getSelectedShelter)
    const dispatch = useDispatch()

    const toggleSelector = () => setIsOpen(!isOpen)

    return (
        <ShelterSelectorContainer>
            <ShelterHeader onClick={toggleSelector}>
                <ShelterHeaderTitle>Útulok</ShelterHeaderTitle>
                <ShelterHeaderSubtitle
                    selectedShelter={selectedShelter}
                >
                    {selectedShelter
                        ? selectedShelter
                        : "Vyberte útulok zo zoznamu"
                    }
                </ShelterHeaderSubtitle>
                <ShelterDropdownArrow src={arrow} alt={"arrow"}/>
            </ShelterHeader>
            {isOpen && (
                <ShelterList>
                    {sheltersList && sheltersList.map(({id, name}) => (
                            <ShelterListItem
                                className="shelterItem"
                                key={id}
                                onClick={() => {
                                    dispatch(setSelectedShelter(name))
                                    dispatch(setSelectedShelterID(id))
                                    setIsOpen(false)
                                }}
                            >
                                {name}
                            </ShelterListItem>
                        )
                    )
                    }
                </ShelterList>
            )}
        </ShelterSelectorContainer>
    )
}

export default ShelterSelectionDropdown