import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as a from '../../store/actions/index';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter} />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                  {this.props.storedResults.map(strResult => <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>)}

                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
  return{
    ctr: state.ctr.counter,
    storedResults: state.res.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch(a.increment()),
    onDecrementCounter: () => dispatch(a.decrement()),
    onAddCounter: () => dispatch(a.addCounter(5)),
    onSubtractCounter: () => dispatch(a.subtractCounter(5)),
    onStoreResult: (result) => dispatch(a.storeResultAsync(result)),
    onDeleteResult: (id) => dispatch(a.deleteResult(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
