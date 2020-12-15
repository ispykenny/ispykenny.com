import React, { useEffect } from 'react';
import Cookies from 'js-cookie'
import sunny from '../assets/sunny.svg';
import dark from '../assets/dark.svg';

const ThemeSwitcher = ({theme , setTheme}) => {

  useEffect(() => {
    let settings = Cookies.get('kenny-theme');

    if(settings) {
      if(settings === "true") {
        document.querySelector("#changeTheme").checked = true
        setTheme("true")
      } 
  
      if(settings === "false") {
        setTheme("false")
        document.querySelector("#changeTheme").checked = false
      }
    }

  }, [theme, setTheme])


  const runThemeSwitch = event => {
    if(event.currentTarget.checked === true) {
      Cookies.set('kenny-theme', "true")
      setTheme("true")
    } else {
      Cookies.set('kenny-theme', "false")
      setTheme("false")
    }
  }

  const Icon = () => {
    if(theme === "true") {
      return <div className="theme-switcher__icon"><img src={sunny} alt="sun icon" height="22px" width="22px"/></div>
    } else {
      return <div className="theme-switcher__icon"><img src={dark} alt="moon icon" height="22px" width="22px"/></div>
    }
  }

  return (
    <div className="inner">
      <div className="theme-switcher">
        <div className="theme-switcher__inner">
          <Icon/>
          <input id="changeTheme" type="checkbox" onChange={runThemeSwitch} tabIndex="0"/>
          <label htmlFor="changeTheme">
            <span className="screen-reader">Toggle Dark and Light Mode</span>
            <div 
              className={`theme-switcher__bar ${theme === "true" ? 'active' : '' }`}>
              <div className="theme-switcher__ball"></div>
            </div>
          </label>
        </div>
      </div>
    </div>
  )
}

export default ThemeSwitcher;