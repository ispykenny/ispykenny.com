import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Inner from './Grid';
import ThemeSwitcher from './ThemeSwitcher';

function Nav({theme, setTheme}) {
  let [navState, setNavState ] = useState(false);
  let [navListItems, setNavListItems ] = useState(false);

  const toggleMobileNav = () => {
    setNavState(!navState)
    setTimeout(() => setNavListItems(!navListItems))
  }

  return (
    <div>
      <header className={ navState ? 'nav-showing' : '' }>
        <ThemeSwitcher theme={theme} setTheme={setTheme} />
        <Inner>
          <div className="nav">
            <div className="nav__item">
              <Link to="/" className="logo" title="link to home page">
                Kenny Krosky
              </Link>

              <button onClick={toggleMobileNav}>
                <span className="screen-reader">Toggle Mobile Menu</span>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
            <div className='nav__item nav-parent'>
              <nav className={ navListItems ? 'showing' : '' }>
                <ul>
                  <li>
                    <Link to="/">
                      About me
                    </Link>
                  </li>
                  <li>
                    <Link to="/blogs">
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </Inner>
      </header>

      <div className="nav-stack"></div>
    </div>
  )
}

export default Nav;