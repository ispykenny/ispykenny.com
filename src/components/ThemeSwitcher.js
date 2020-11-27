import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie'
import sunny from '../assets/sunny.svg';
import dark from '../assets/dark.svg';
function ThemeSwitcher() {
  const [theme, swapTheme] = useState(false)

  useEffect(() => {
    if(!Cookies.get('kenny-theme')) return
    let cookieState = Cookies.get('kenny-theme');

    if(cookieState) {
      swapTheme(true)
      document.querySelector("#changeTheme").checked = true
    } else {
      swapTheme(false)
    }

    const addedClass = theme === true ? 'light' : 'dark'
    document.getElementsByTagName('body')[0].className = addedClass;

  }, [])


  const runThemeSwitch = event => {
    if(event.currentTarget.checked !== true) {
      swapTheme(false)
      Cookies.set('kenny-theme', false)
    } else {
      swapTheme(true)
      Cookies.set('kenny-theme', true)
    }
    const addedClass = theme === true ? 'light' : 'dark'
    document.getElementsByTagName('body')[0].className = addedClass;
  }

  const Icon = () => {
    if(theme) {
      return <div className="theme-switcher__icon"><img src={sunny}/></div>
    } else {
      return <div className="theme-switcher__icon"><img src={dark}/></div>
    }
  }

  return (
    <div className="inner">
      <div className="theme-switcher">
        <div className="theme-switcher__inner">
          <Icon/>
          <input id="changeTheme" type="checkbox" onChange={runThemeSwitch} tabIndex="0"/>
          <label for="changeTheme">
            <span className="screen-reader">Toggle Dark and Light Mode</span>
            <div className={`theme-switcher__bar ${theme ? 'active' : '' }`}>
              <div className="theme-switcher__ball"></div>
            </div>
          </label>
        </div>
      </div>
    </div>
  )
}

export default ThemeSwitcher;