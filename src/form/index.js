import React from "react";
import PropTypes from 'prop-types'
import './style.css'

const Form = (props) => (
  <main role="main">
    <form onSubmit={props.addDonation}>
      <input 
        name="name"
        title="Custom message 1"
        type="text"
        htmlFor="name"
        pattern="([A-z0-9À-ž\s]){2,}"
        required
        value={props.name} 
        onChange={props.onFormChange}
        placeholder="John Doe" 
      /> 
      <input 
        name="email"
        title="Custom message 2" 
        type="email"
        required 
        value={props.email}
        onChange={props.onFormChange} 
        placeholder="john@example.com"
      />
      <input 
        name="phoneNumber"
        title="Enter a valid phone 11 digit number"
        value={props.phoneNumber}
        type="tel" 
        required 
        pattern='^\s*\(?(020[7,8]{1}\)?[ ]?[1-9]{1}[0-9{2}[ ]?[0-9]{4})|(0[1-8]{1}[0-9]{3}\)?[ ]?[1-9]{1}[0-9]{2}[ ]?[0-9]{3})\s*$'
        onChange={props.onFormChange} 
        placeholder="+44 207 123 4567"
      />
      <input 
        name="cardNumber"
        title="Enter a  12 digit valid card number "
        pattern="^\d{12}$"
        type="number"
        required 
        value={props.cardNumber}
        onChange={props.onFormChange}
        placeholder="123456789012" 
      />
      <label>Long number on the front of your card</label>
      <input
        name="threeDigits"
        title="Enter 3 digit CVV code"
        value={props.threeDigits}
        onChange={props.onFormChange}
        type="number"
        pattern="^\d{3}$"
        required
        placeholder="123"
      />
      <label>The 3 digits to the right of the signature strip located on the back of your card</label>
      <input 
        onChange={props.onFormChange}
        name="expiryDate"
        title="Enter a date in this format MM/YY"
        type="text"
        placeholder="10/17" 
        pattern="(?:0[1-9]|1[0-2])/[0-9]{2}"
        required 
        value={props.expiryDate}
      />
      <textarea 
        onChange={props.onFormChange} 
        name="textarea"
        cols="40" rows="25" 
        placeholder="Hello there, I'd like to donate you some money">
      </textarea>
      <footer>
        <button 
          type="submit" 
          id="submit" 
          aria-label="submit"
          tabIndex="0"
        >
          Give Now
        </button>
        <input onChange={(event)=>props.handleChange(event)} type="number" required min="1" placeholder="$50" style={{paddingLeft: '0.5rem'}}/>
      </footer>
        <a href="www.whygive50.com">Why give $<span> 50</span>?</a>
    </form>
  </main>
)

Form.propTypes = {
  addDonation: PropTypes.func.isRequired,
  onFormChange: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  email: PropTypes.string,
  phoneNumber: PropTypes.string,
  cardNumber: PropTypes.string,
  threeDigits: PropTypes.string,
  expiryDate: PropTypes.string
}

export default Form
