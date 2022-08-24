import React from 'react';
import { Typography, Button, Divider } from '@material-ui/core';
import { Elements, CardElement, ElementsConsumer, PaymentElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Review from './Review';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentForm = ({ checkoutToken, backStep }) => {
    const handleSubmit = (event, elements, stripe) => {
        event.preventDefault();

        if (!stripe || !elements) return;

        

    };


    return (
        <>
            <Review checkoutToken={checkoutToken} />
            <Divider />
            <Typography variant="h6" gutterBottom style={{ margin: '20px 0' }}>Начин на плаќање</Typography>
            <Elements stripe={stripePromise}>
                <ElementsConsumer>
                    {({ elements, stripe }) => (
                        <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
                            <CardElement></CardElement>
                            <PaymentElement/>
                            <br /><br />
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Button variant="outlined" onClick={backStep}>Back</Button>
                                <Button type="submit" variant="contained" disabled={stripe} color="primary">
                                        Плати {checkoutToken.live.subtotal.formatted_with_symbol}
                                 </Button>
                            </div>
                        </form>
                    )}

                </ElementsConsumer>

            </Elements>
        </>
    );  
};

export default PaymentForm;