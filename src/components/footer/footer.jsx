import { IoLogoGithub } from "react-icons/io";
import "./footer.css"
export default function Footer() {
    return (
        <div className="container-footer">
            <a
                href="https://github.com/Shafosphere"
                target="_blank"
                rel="noopener noreferrer"
            >
                by Shafosphere <IoLogoGithub className="footer-icon" />
            </a>
        </div>
    )
}