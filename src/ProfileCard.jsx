function ProfileCard(props) {
    return (
        <div>
            <div>Title: {props.title} </div>
            <div>Twitter username: {props.handle}</div>
        </div>
    )
}
export default ProfileCard