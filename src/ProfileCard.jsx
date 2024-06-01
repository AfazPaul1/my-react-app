function ProfileCard({title, handle, image}) {
    return (
        <div>
            <img src={image} />
            <div>Title: {title} </div>
            <div>Twitter username: {handle}</div>


        </div>
    )
}
export default ProfileCard