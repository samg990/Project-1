  
  // signout event
   // Initialize Firebase
  //  var config = {
  //   apiKey: "AIzaSyBXpm4owlDd5Lh937ObtnvNHZ_2vDAk5VI",
  //   authDomain: "projectfamly.firebaseapp.com",
  //   databaseURL: "https://projectfamly.firebaseio.com",
  //   projectId: "projectfamly",
  //   storageBucket: "projectfamly.appspot.com",
  //   messagingSenderId: "49552131620"
  // };
  // firebase.initializeApp(config);

  // const db = firebase.firestore();
  // const auth = firebase.auth();


  
  // log out button
  
  $('#logout-button').click(function (e) { 
    e.preventDefault();

    auth.signOut();

    window.location = 'index.html';    
  });