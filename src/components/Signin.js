import React from 'react';
import firebase from 'firebase/app';
import styled from 'styled-components';

function Signin() {

  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
      console.log("successfully signed up!");
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password= event.target.signinPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      console.log("Successfully signed in!");
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  function doSignOut() {
    firebase.auth().signOut().then(function() {
      console.log("Successfully signed out!");
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  const SignInWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 50px;
  background-color: f7f7f5;
  color: #1d84de;
  flex-wrap: wrap;
  top: 100px;
  width: 100%;
  `;

  return (
    <SignInWrapper>
      <h1>Sign Up</h1>
      <form onSubmit={doSignUp}>
        <input
          type='text'
          name='email'
          placeholder='email'/>
        <input
          type='password'
          name='password'
          placeholder='Password' />
        <button type='submit'>Sign Up</button>
      </form>
      <h1>Sign In</h1>
      <form onSubmit={doSignIn}>
        <input
          type='text'
          name='signinEmail'
          placeholder='email' />
        <input
          type='password'
          name='signinPassword'
          placeholder='Password'/>
        <button type='submit'>Sign In</button>
      </form>
      <h1>Sign Out</h1>
      <button onClick={doSignOut}>Sign Out</button>
    </SignInWrapper>
  );
}

export default Signin