
$(document).ready(function () {

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBXpm4owlDd5Lh937ObtnvNHZ_2vDAk5VI",
    authDomain: "projectfamly.firebaseapp.com",
    databaseURL: "https://projectfamly.firebaseio.com",
    projectId: "projectfamly",
    storageBucket: "projectfamly.appspot.com",
    messagingSenderId: "49552131620"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
  const auth = firebase.auth();

  // sign in
  $('#loginBtn').click(function (e) {
    e.preventDefault();
    const email = $('#uname').val();
    const pass = $('#upsw').val();
    const promise = auth.signInWithEmailAndPassword(email, pass);

    promise.catch(e => console.log(e.message));


  });

  // signup event
  $('.signupbtn').click(function (e) {
    e.preventDefault();
    const email = $('#email').val();
    const pass = $('#psw').val();
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    
    promise.catch(e => console.log(e.message));


  });

  auth.onAuthStateChanged(User => {

    if (User){
      // window.location = 'mentorpg.html';
      console.log(User)
    } 
    else {
      console.log('not logged in')
    }
  });
});