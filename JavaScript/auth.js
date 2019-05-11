
$(document).ready(function () {

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBPTO1NyspDb4daC3OCQkCr8nIEig0HtRE",
    authDomain: "projectfamly.firebaseapp.com",
    databaseURL: "https://projectfamly.firebaseio.com",
    projectId: "projectfamly",
    storageBucket: "projectfamly.appspot.com",
    messagingSenderId: "49552131620"
  };
  firebase.initializeApp(config);

  const db = firebase.firestore();
  const auth = firebase.auth();

  // sign in
  $('#loginBtn').click(function (e) {
    e.preventDefault();
    const email = $('#uname').val();
    const pass = $('#upsw').val();
    const promise = auth.signInWithEmailAndPassword(email, pass).then(() => {
      window.location = 'mentorpg.html';
    });
    promise.catch(e => console.log(e.message));
  });

  // signup event
  $('#signupbtn').click(function (e) {
    e.preventDefault();
    const email = $('#email').val();
    const pass = $('#psw').val();
    auth.createUserWithEmailAndPassword(email, pass).then(cred => {
      return db.collection('users').doc(cred.user.uid).set({
        firstname: $('#firstname').val(),
        lastname: $('#lastname').val(),
        bio: $('#aboutMe').val(),
        nonProfit: $('#organization').val(),
      }).then(() => {
        window.location = 'mentorpg.html';
      })
    });
  })

  // Authentication to make sure the user is signed in
  auth.onAuthStateChanged(User => {
    if (User) {
      db.collection('users').doc(User.uid).get().then(doc => {
        console.log(doc.data().firstname)
      });
      console.log(User)
    }
    else {
      console.log('not logged in')
    }
  });
});