import ProfileCard from "./ProfileCard"
import AlexaImage from "./images/alexa.png"
import CortanaImage from "./images/cortana.png"
import SiriImage from "./images/siri.png"
function App() {
    return (
        <div>
            <section className="hero i-primary">
                <div className="hero-body">
                    <p className="title">Personal Digital Assistants</p>
                </div>
            </section>
            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-4">
                        <ProfileCard 
                        title="Alexa" 
                        handle="@alexa99" 
                        image={AlexaImage}
                        description="Amazon's voice-controlled assistant that powers smart home devices and provides information, entertainment, and assistance."

                        />
                        </div>
                        <div className="column is-4">
                        <ProfileCard 
                        title="Cortana" 
                        handle="@cortana22" 
                        image={CortanaImage}
                        description="Microsoft's virtual assistant designed to help with tasks, reminders, and information retrieval."
                        />

                        </div>
                        <div className="column is-4">
                        <ProfileCard 
                        title="siri" 
                        handle="@siri01" 
                        image={SiriImage}
                        description="    Apple's intelligent assistant that responds to voice commands for performing various tasks on Apple devices."
                        />

                        </div>

                    </div>
                </section>
            </div>

        </div>
    )
}

export default App