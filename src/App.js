import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './App.css';
import Form from './form'
import ProgressBar from './progress-bar'
import Header from './Header'
import ShowValue from './ShowValue'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      targetValue: props.targetValue,
      currentValue: props.currentValue,
      endDate: props.endDate,
      supporters: props.supporters,
      donationValue: 0,
      inputs: {
        name: '',
        email: '',
        phoneNumber: '',
        cardNumber: '',
        threeDigits: '',
        expiryDate: '',
      }
    }  
  }

  // adding donation 
   addDonation = (e) => {
    e.preventDefault()

    const donationValue = this.state.donationValue
    const newValue = this.state.currentValue + donationValue
    const supporters = this.state.supporters + 1
    
    this.setState({
      currentValue: newValue,
      supporters: supporters,
      donationValue: 0,
      inputs: {
        name: '',
        email: '',
        phoneNumber: '',
        cardNumber: [],
        threeDigits: '',
        expiryDate: '',
      }
    })

  }

  // only positive integers donations
  handleDonationChange = (event) => {
    if(Number(event.target.value) > 0) {
      this.setState({
        donationValue : Number(event.target.value),
      })
    }
  }

  // assign every input field values to state
  formChangeHandler = (event) => {
    const newInputsState = Object.assign({}, this.state.inputs, {[event.target.name]: event.target.value})
    this.setState({ inputs: newInputsState })
  }

  calculatePercentage = () => (
    this.state.currentValue / this.state.targetValue < 1
      ? 100 * (this.state.currentValue / this.state.targetValue)
      : 100
  )
  
  render() {
    const percentage = this.calculatePercentage()
    const remainingValue = this.state.targetValue - this.state.currentValue
    return (
      <div className="App">
        <ShowValue remainingValue={remainingValue} />
        <ProgressBar percentage={percentage} />
        <Header supporters={this.state.supporters} />
        <Form 
          handleChange={this.handleDonationChange} 
          addDonation={this.addDonation} 
          onFormChange={this.formChangeHandler} 
          donationValue={this.state.donationValue} 
          {...this.state.inputs}
        />
      </div>
    )
  }
}

App.propTypes = {
  targetValue: PropTypes.number.isRequired,
  currentValue: PropTypes.number.isRequired,
  endDate: PropTypes.string.isRequired,
  supporters: PropTypes.number.isRequired,
}

export default App
