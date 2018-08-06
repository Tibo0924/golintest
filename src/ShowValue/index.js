import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

const ShowValue = (props) => (
  <div className="showValue" role="complementary">
    <p>
      {
        props.remainingValue > 0 
          ?`$${props.remainingValue} still needed for this project` 
          : 'We reached the target!'
      }
    </p>
  </div>
)

ShowValue.propTypes = {
  remainingValue: PropTypes.number.isRequired
}

export default ShowValue
