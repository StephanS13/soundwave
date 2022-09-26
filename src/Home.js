import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <body className="container full-height-grow">
      <header className="main-header">
        <a href="/" className="brand-logo">
          <img src="logo.png" alt="" />
          <div className="brand-logo-name">Soundwave</div>
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
      <section className="home-main-section">
        <div className="img-wrapper">
          <div className="lady-image"></div>
        </div>
        <div className="call-to-action">
          <h1 className="title">Feel The Music</h1>
          <span className="subtitle">Stream over 20 thousand songs with one click</span>
          <a className="btn" href="join.html">Join Now</a>
        </div>
      </section>
      <div className="home-page-circle-1"></div>
      <div className="home-page-circle-2"></div>
      <div className="home-page-circle-3"></div>
    </body>
  )
}
