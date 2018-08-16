import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';

class ShowLoans extends Component {


state = {
  currentID: 3,
  active: false
}

handleClick = () => {
  this.setState({
    active: !this.state.active
  })
}

loanDisplay = () => {
    if(this.props.loans){
        return this.props.loans.map((loanInfo, index) => (
          <div id={index} className= { index < 3 || this.state.active ? "LoanContainer" : "hiddenLoans" }>
            <h2>Loan number {index + 1}</h2>
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
            <hr/>
          </div>
        ))
      }
    }


  render(){
    if(this.props.loans){
      return(
        <div>
          <h1>Loan Data</h1>
          {this.loanDisplay()}
          <button onClick={() => this.handleClick()}>{this.state.active ? 'Show Fewer Loans' : 'Show More Loans'}</button>
        </div>
      )
    } else {
      return <div> </div>
    }
  }


}

const mapStateToProps = state => ({
  loans: state.loan_data.data.terms
})



export default connect(mapStateToProps)(ShowLoans);
