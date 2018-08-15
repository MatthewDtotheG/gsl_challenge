import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';

class ShowLoans extends Component {

  state = {
    clicked: true
  }


  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
    console.log(this.state.clicked)
  }

  test2 = () => {
    if(this.props.loans){

      return this.props.loans.map(loanInfo => (
        <div className="LoanContainer">
          <label>75% LTV Proceeds</label>
          <br/>
          <div>{loanInfo['75% LTV Proceeds']}</div>
          <label># Payments</label>
          <br/>
          <div>{loanInfo['# Payments']}</div>
          <label>Agency</label>
          <br/>
          <div>{loanInfo.Agency}</div>
          <label>Annual Debt Service</label>
          <br/>
          <div>{loanInfo['Annual Debt Service']}</div>
          <label>Debt Constant</label>
          <br/>
          <div>{loanInfo['Debt Constant']}</div>
          <label>Interest Rate</label>
          <br/>
          <div>{loanInfo['Interest Rate']}</div>
          <label>NOI</label>
          <br/>
          <div>{loanInfo.NOI}</div>
          <label>Payoff</label>
          <br/>
          <div>{loanInfo.Payoff}</div>
          <label>Proceeds</label>
          <br/>
          <div>{loanInfo.Proceeds}</div>
          <label>Treasury</label>
          <br/>
          <div>{loanInfo.Treasury}</div>
          <label>Type</label>
          <br/>
          <div>{loanInfo.Type}</div>
          <label>Value</label>
          <br/>
          <div>{loanInfo.Value}</div>
          <label>Years</label>
          <br/>
          <div>{loanInfo.Years}</div>
        </div>
      ))
    }
  }


  render(){
    return(
      <div>
        <h1>Loan Data</h1>
        {this.test2()}
      </div>
    )
  }


}

const mapStateToProps = state => ({
  loans: state.loan_data.data.terms
})



export default connect(mapStateToProps)(ShowLoans);
