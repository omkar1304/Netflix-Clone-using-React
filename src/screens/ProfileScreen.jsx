import React, { useEffect } from 'react'
import './profileScreen.css'
import Nav from '../Nav'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'
import { loadStripe } from '@stripe/stripe-js'
import { useState } from 'react'
import { paymentDone } from '../features/paymentSlice'



let stripePromise;

const getStripe = () => {
  if(!stripePromise){
    stripePromise = loadStripe('pk_test_51MifiwSEcnqBIkQJZWoFGuXJUI9CEvxYU7HrZye0cm2sDbVUVeitNIwMXdhAEGbK36RjodGn3UZY1TIpN7uNs6ne00usAqDOyP');
  }
  return stripePromise;
}

const ProfileScreen = () => {

  const dispatchpaymentTrue = useDispatch();
  const payment = useSelector((state) => state.payment.payment)
  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const item = {
    price : "price_1MifoKSEcnqBIkQJHdGRe6eu",
    quantity : 1,
  }

  const checkoutOptions = {
    lineItems : [item],
    mode : "payment",
    successUrl : `${window.location.origin}`,
    cancelUrl : `${window.location.origin}/cancel`,
  }

  const redirectToCheckout = async () => {
    setIsLoading(true);

    const stripe = await getStripe();
    const {error} = await stripe.redirectToCheckout(checkoutOptions)

    if(error){
      setStripeError(error.message);
    }

    setIsLoading(false)
    
    console.log(payment);
  }

  if(stripeError){
    alert(stripeError);
  }

  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  return (
    <div className='profileScreen'>
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img 
          onClick={payment == true ? () => navigate('/') : () => navigate('/profile')} 
          src="https://th.bing.com/th/id/OIP.XQ-com-ULw7aaf_U3BcQ3AHaHa?pid=ImgDet&rs=1" alt="" />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="prfoileScreen__plans">
              {/* <h3>Plans</h3> */}
              {payment === true
              ? <button className='prfoileScreen__continue' onClick={() => navigate('/')}>Continue Watching</button>
              : <button className='prfoileScreen__buy' onClick={() => redirectToCheckout()}>{isLoading ? "loading..." : "Continue with ₹650"}</button>
            }          
              <button onClick={() => auth.signOut()} className="profileScreen__signOut">Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen