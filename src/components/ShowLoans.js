import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';

class ShowLoans extends Component {

  test2 = () => {
    if(!this.props.loans){
        console.log('it aint there')
    } else {
      console.log(this.props.loans[0])
      console.log(this.props.loans)

      return this.props.loans.map(loanInfo => (
        <div className="LoanContainer">
          <div>{loanInfo['75% LTV Proceeds']}</div>
          <div>{loanInfo['# Payments']}</div>
          <div>{loanInfo.Agency}</div>
          <div>{loanInfo['Annual Debt Service']}</div>
          <div>{loanInfo['Debt Constant']}</div>
          <div>{loanInfo['Interest Rate']}</div>
          <div>{loanInfo.NOI}</div>
          <div>{loanInfo.Payoff}</div>
          <div>{loanInfo.Proceeds}</div>
          <div>{loanInfo.Treasury}</div>
          <div>{loanInfo.Type}</div>
          <div>{loanInfo.Value}</div>
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
