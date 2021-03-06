import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  // THIS COULD JUST BE A FUNCTIONAL COMPONENT
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients)
    .map(igKey => {
      return (
        <li key={igKey}>
          <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
          </li>
        )
      });


    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A Delicious burger with the following ingredients:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p><strong>Total Price:</strong> ${this.props.price.toFixed(2)}</p>
        <p>Continue to checkout?</p>
        <Button value='CANCEL' btnType='Danger' clicked={this.props.cancelPurchase}/>
        <Button value='CONTINUE' btnType='Success' clicked={this.props.continuePurchase}/>
      </Aux>
    );
  }
};

export default OrderSummary;
