import React from "react"
import PropTypes from 'prop-types'
import './style.css' 

const ProgressBar =(props) => (
  <div className="progress-bar">
    <div className="filler" style={{ width:`${props.percentage}%` }} />
  </div> 
)

ProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired
}

export default ProgressBar
