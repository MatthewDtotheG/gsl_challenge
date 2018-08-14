import React, { Component } from 'react';
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
  const data = {
    income: this.state.income,
    expenses: this.state.expenses,
    rate: this.state.rate,
    noi: this.state.income,
    address: {
      street: this.state.street,
      city  : this.state.city,
      state : this.state.state,
      county: this.state.county,
      zip   : this.state.zip
    }
  }
  console.log(this.state)
  this.props.addInfo(data);
}

onChange = (e) => {
  const newAddress = { ...this.state.address, [e.target.name]: e.target.value};
  this.setState({ address: newAddress });
};

onCalcChange = (e) => {
  this.setState({[e.target.name]: e.target.value})
};


  render() {
    return (
      <div>
      <h1>Greystone Labs</h1>

      <form onSubmit={this.onSubmit}>
      <label>income</label>
      <input
        type='text'
        name='income'
        onChange={this.onCalcChange}
        value={this.state.income}
      />


      <label>expenses</label>
      <input
        type='text'
        name='expenses'
        onChange={this.onCalcChange}
        value={this.state.expenses}
      />


      <label>rate</label>
      <input
        type='text'
        name='rate'
        onChange={this.onCalcChange}
        value={this.state.rate}
      />
      <label>noi</label>
      <input
        type='text'
        name='noi'
        onChange={this.onCalcChange}
        value={this.state.noi}
      />

        <label>street</label>
        <input
          type='text'
          name='street'
          onChange={this.onChange}
          value={this.state.street}
        />

        <label>City</label>
        <input
        type='text'
        name='city'
        onChange={this.onChange}
        value={this.state.city}
        />

        <label>State</label>
        <input
        type='text'
        name='state'
        onChange={this.onChange}
        value={this.state.state}
        />

        <label>County</label>

        <input
        type='county'
        name='county'
        onChange={this.onChange}
        value={this.state.county}
        />

        <label>Zip</label>

        <input
        type='zip'
        name='zip'
        onChange={this.onChange}
        value={this.state.zip}
        />

        <button type='submit' value='submit'>Submit</button>
      </form>
    </div>
    );
  }
}


const mapStateToProps = state => ({
  info: state.info
})

export default connect(mapStateToProps, {addInfo})(MainForm);
