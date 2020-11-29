import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie'
import sunny from '../assets/sunny.svg';
import dark from '../assets/dark.svg';
function ThemeSwitcher() {
  const [theme, swapTheme] = useState("")

  useEffect(() => {
    let settings = Cookies.get('kenny-theme');

    if(settings) {
      if(settings === "true") {
        document.querySelector("#changeTheme").checked = true
        swapTheme("true")
        document.getElementsByTagName('body')[0].className = 'dark';
      } 
  
      if(settings === "false") {
        swapTheme("false")
        document.querySelector("#changeTheme").checked = false
        document.getElementsByTagName('body')[0].className = 'light';
      }
    }

  }, [theme])


  const runThemeSwitch = event => {
    if(event.currentTarget.checked === true) {
      Cookies.set('kenny-theme', "true")
      swapTheme("true")
    } else {
      Cookies.set('kenny-theme', "false")
      swapTheme("false")
    }
    const addedClass = theme === "false" ? 'light' : 'dark'
    document.getElementsByTagName('body')[0].className = addedClass;
  }

  const Icon = () => {
    if(theme === "true") {
      return <div className="theme-switcher__icon"><img src={sunny} alt="sun icon"/></div>
    } else {
      return <div className="theme-switcher__icon"><img src={dark} alt="moon icon"/></div>
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