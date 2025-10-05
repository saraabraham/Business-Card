import insta from "./assets/Instagram Icon.png"
import git from "./assets/GitHub Icon.png"

export default function Footer() {
    return (
        <div className="footer">
            <a href="https://www.instagram.com/sara._.abraham_?utm_source=qr&igsh=cjZmcGFibWRwZHdu" target="_blank" className="icon">
                <img src={insta} className="insta-icon"></img>
            </a>

            <a href="https://github.com/saraabraham" target="_blank" className="icon">
                <img src={git} className="git-icon"></img>
            </a>


        </div>

    )


}