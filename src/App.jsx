import ProfileCard from "./ProfileCard"

function App() {
    return (
        <div>
            <div>Personal Digital Assistants</div>
            <ProfileCard title="Alexa" handle="@alexa99"/>
            <ProfileCard title="Cortana" handle="@cortana22"/>
            <ProfileCard title="siri" handle="@siri01"/>
        </div>
    )
}

export default App