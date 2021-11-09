import DonationMainPage from './pages/DonationMainPage'
import DonorFormPage from './pages/DonorFormPage'
import ConfirmationPage from './pages/ConfirmationPage'
import {useSelector} from 'react-redux'
import {getCurrentStep} from './reduxUtils'
import {stepsTitles} from './constants'

function App() {
    const currentStep = useSelector(getCurrentStep)
    document.title = stepsTitles[currentStep]
    return (
        <div className="App">
            {
                (currentStep === 1 && <DonationMainPage/>)
                || (currentStep === 2 && <DonorFormPage/>)
                || (currentStep === 3 && <ConfirmationPage/>)
                || <DonationMainPage/>
            }
        </div>
    );
}

export default App;
