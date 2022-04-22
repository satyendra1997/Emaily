
import React,{Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';
import * as actions from '../actions';
class StripeBilling extends Component{
    render()
    {
        
        return(
            
            <StripeCheckout
                name="Emaily"
                description='Pay $5 for 5 credits'
                amount={500}
                token={token=>this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
            <buttton className="btn">
                Add Credits
            </buttton>
            </StripeCheckout>
        );
    }
    


}

export default connect(null,actions)(StripeBilling);