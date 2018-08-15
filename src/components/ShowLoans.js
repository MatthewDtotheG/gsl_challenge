import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';

class ShowLoans extends Component {


  componentWillReceiveProps = () => {
    console.log(this.props.loans)

  }



  render(){
    return(
      <div>
        <h1>Loan Data</h1>
      </div>
    )
  }


}

const mapStateToProps = state => ({
  loans: state.loan_data.data.terms
})



export default connect(mapStateToProps)(ShowLoans);
