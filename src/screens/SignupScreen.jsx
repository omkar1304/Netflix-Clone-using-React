import React from 'react'
import './signupScreen.css'
import { auth } from '../firebase'
import {useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { paymentDone } from '../features/paymentSlice'

const SignupScreen = () => {

  const dispatchpaymentFalse = useDispatch();
  const payment = useSelector((state) => state.payment.payment);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (event) => {

    dispatchpaymentFalse(paymentDone(false));
    console.log(payment);
    
    event.preventDefault();

    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    )
    .then((userAuth) => {
      console.log(userAuth);
    })
    .catch((error) => {
      alert(error);
    })
  }

  const signIn = (event) => {

    dispatchpaymentFalse(paymentDone(true));
    event.preventDefault();

    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    )
    .then((userAuth) => {
      console.log(userAuth);
    })
    .catch((error) => {
      alert(error);
    })
  }


  return (
    <div className='signupScreen' >
        <form>
            <h1>Sign In</h1>
            <input type="email" placeholder='Email' ref={emailRef}/>
            <input type="password" placeholder='Password' ref={passwordRef}/>
            <button type='submit' onClick={signIn}>Sign In</button>

            <h4>
              <span className='signupScreen__gray'>New to Netflix? </span>
              <span className="signupScreen__link" onClick={register}>Sign Up now</span>
            </h4>
        </form>
    </div>
  )
}

export default SignupScreen