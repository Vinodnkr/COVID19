import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => (
  <>
    <div className="cont">
      <img
        src="https://res.cloudinary.com/amst/image/upload/v1639762911/notfnd_e79uve.jpg"
        alt="not-found-pic"
      />
      <h1>PAGE NOT FOUND</h1>
      <p>
        we are sorry, the page you requested could not be found
        <br />
        Please go back to the homepage
      </p>
      <div>
        <Link to="/">
          <button type="button" className="home__button">
            Home
          </button>
        </Link>
      </div>
    </div>
  </>
)

export default NotFound
