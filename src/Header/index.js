import React from "react"
import PropTypes from 'prop-types'
import TimeAgo from 'react-timeago'
import frenchStrings from 'react-timeago/lib/language-strings/en'

import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'

import "./style.css"



const Header = (props) => (

  <header role="banner">
    <TimeAgo date='Aug 7, 2018' />
    <p><span>Only 3 days left</span> to fund this project.</p>
    <p>Join the <span className="counter">{props.supporters}</span> other donor who have already supported this project. Every dollar helps.</p>
  </header>
)

Header.propTypes = {
  supporters: PropTypes.number.isRequired
}

export default Header
