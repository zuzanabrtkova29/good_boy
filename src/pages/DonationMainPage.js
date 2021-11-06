import MainTitle from '../components/MainTitle'
import {ShelterDonationButton, FoundationDonationButton} from "../components/DonationTypeButton";

export function DonationMainPage() {
    return (
        <div className="main">
            <MainTitle>Vyberte si možnosť, ako chcete pomôcť</MainTitle>
            <ShelterDonationButton/>
            <FoundationDonationButton/>
        </div>
    )
}

export default DonationMainPage