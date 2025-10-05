import profileImg from "./assets/ProfilePic.jpeg"
import mail from "./assets/Mail.png"
import link from "./assets/linkedin.png"

export default function Info() {
    return (
        <>
            <img src={profileImg} alt="profile-pic" className="profile-pic" />
            <h1 className="Title">Sara Abraham</h1>
            <h2 className="Designation">Full Stack Developer</h2>
            <h3 className="Job">SwipeJobb AB, Malmö</h3>
            <div className="btn">
                <a type="button" className="btn1" href="mailto:saraabraham765@gmail.com" target="_blank">
                    <img src={mail} className="icon" />Email
                </a>
                <a type="button" className="btn2" href="https://www.linkedin.com/in/sara-abraham-3872aa184/" target="_blank">
                    <img src={link} className="icon" />LinkedIn
                </a>

            </div>
        </>)

}
