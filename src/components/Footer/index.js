import {VscGithubAlt} from 'react-icons/vsc'
import {FaTwitter} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import './index.css'

export default function Footer() {
  return (
    <div className="foot-head">
      <h1 className="footer_head">
        COVID19
        <span className="footer_span">INDIA</span>
      </h1>
      <p className="footer-content">
        we stand with everyone fighting on the front lines
      </p>
      <div className="footer__icons__container">
        <VscGithubAlt fontSize="40" color="#CBD5E1" />
        <FiInstagram fontSize="40" color="#CBD5E1" />
        <FaTwitter fontSize="40" color="#CBD5E1" />
      </div>
    </div>
  )
}
