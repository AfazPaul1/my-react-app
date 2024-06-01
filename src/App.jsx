import ProfileCard from "./ProfileCard"
import AlexaImage from "./images/alexa.png"
import CortanaImage from "./images/cortana.png"
import SiriImage from "./images/siri.png"
function App() {
    return (
        <div>
            <div>Personal Digital Assistants</div>
            <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImage}/>
            <ProfileCard title="Cortana" handle="@cortana22" image={CortanaImage}/>
            <ProfileCard title="siri" handle="@siri01" image={SiriImage}/>
        </div>
    )
}

export default App