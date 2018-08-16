import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShowLoans from './ShowLoans';
import { connect } from 'react-redux';
import { addInfo } from '../actions/formActions';
import '../App.css';

class MainForm extends Component {

  state = {
    income: '',
    expenses: '',
    rate: '',
    noi: '',
    address: {
      street: '',
      city  : '',
      state : '',
      county: '',
      zip   : ''
    }
};

onSubmit = (e) => {
  e.preventDefault();
  const {income, expenses, address} = this.state
  const noiCalc = income - expenses
  const rateCalc = parseFloat((income - expenses) / income)
  
  const data = {
    income: income,
    expenses: expenses,
    rate: rateCalc,
    noi: noiCalc,
    address: {
      street: address.street,
      city  : address.city,
      state : address.state,
      county: address.county,
      zip   : address.zip
    }
  }

  this.props.addInfo(data);
}

onAddressChange = (e) => {
  const newAddress = { ...this.state.address, [e.target.name]: e.target.value};
  this.setState({ address: newAddress });

};

onCalcChange = (e) => {
  this.setState({[e.target.name]: e.target.value})
};

  render() {

    return (
      <div className='Container'>
      <h1>Greystone Labs</h1>

      <form onSubmit={this.onSubmit}>
          <label>Income</label>
          <input type='text' name='income'
          onChange={this.onCalcChange}
          value={this.state.income}
          />

          <label>Expenses</label>
          <input type='text' name='expenses'
          onChange={this.onCalcChange}
          value={this.state.expenses}
          />

          <label>Street</label>
          <input type='text' name='street'
          onChange={this.onAddressChange}
          value={this.state.street}
          />

          <label>City</label>
          <input type='text' name='city'
          onChange={this.onAddressChange}
          value={this.state.city}
          />

          <label>State</label>
          <input type='text' name='state'
          onChange={this.onAddressChange}
          value={this.state.state}
          />

          <label>County</label>
          <input type='county' name='county'
          onChange={this.onAddressChange}
          value={this.state.county}
          />

          <label>Zip</label>
          <input type='zip' name='zip'
          onChange={this.onAddressChange}
          value={this.state.zip}
          />

        <input className='button' type="submit" value="Submit"/>
      </form>

      <ShowLoans/>
    </div>
    );
  }
}


MainForm.propTypes = {
    addInfo: PropTypes.func.isRequired
};


const mapStateToProps = state => ({
  loans: state.loan_data.data.terms
})

export default connect(mapStateToProps, {addInfo})(MainForm);
