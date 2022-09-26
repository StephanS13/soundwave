import { Link } from 'react-router-dom'

export default function Discover() {
  return (
    <body className="full-height-grow">
      <div className="container full-height-grow">
        <header className="main-header">
          <a href="/" className="brand-logo">
            <img src="logo.png" alt="" />
            <div className="brand-logo-name">Soundwave - Discover</div>
          </a>
          <nav className="main-nav">
            <ul>
              <li><Link to='/discover'>
                  Discover
                </Link>
                </li>
              <li><Link to='/join'>
                  Join
                </Link></li>
            </ul>
          </nav>
        </header>
        <section className='discover-main-section'>
          <div className='call-to-action'>
            <h1 className='title'>Discover new music</h1>
            <div className='icon-section'>
              <div className="icon">
                <img src="microphone.svg" alt="" />
                Charts
              </div>
              <div className="icon">
                <img src="albums.svg" alt="" />
                Album
              </div>
              <div className="icon">
                <img src="more.svg" alt="" />
                More
              </div>
            </div>
            <div>By joining you can benefit by listening to the latest albums released</div>
          </div>
          <img className='covers-image' src="covers.jpg" alt="" />
        </section>
      </div>

      <footer className='main-footer'>
        <div className="container">
          <nav className='footer-nav'>
            <ul>
              <li><Link to='/'>About Us</Link></li>
              <li><Link to='/'>Contact</Link></li>
            </ul>
          </nav>
          <nav className='footer-nav'>
            <ul>
              <li><Link to='/' className='social-link'><img src="twitter.svg" />Twitter</Link></li>
              <li><Link to='/' className='social-link'><img src="facebook.svg" />Facebook</Link></li>
            </ul>
          </nav>
        </div>
      </footer>
    </body>
  )
}