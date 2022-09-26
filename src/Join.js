import { Link } from 'react-router-dom'

export default function Join() {
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
        <section className='join-main-section'>
          <h1 className='join-text'>Join the 
            <span className='accent-text'> fun.</span>
          </h1>
          <form className='join-form' action="">
            <div className="input-group">
              <label htmlFor="name">Name:</label>
              <input type="text" />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email:</label>
              <input type="email" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password:</label>
              <input type="password" />
            </div>
            <div className="input-group">
              <button className='btn' type='submit'>Join Now</button>
            </div>
          </form>
        </section>
      </div>

      <div className="join-page-circle-1"></div>
      <div className="join-page-circle-2"></div>
      
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
