// signout event
// Initialize Firebase
$(document).ready(function() {
  var config = {
    apiKey: "AIzaSyBXpm4owlDd5Lh937ObtnvNHZ_2vDAk5VI",
    authDomain: "projectfamly.firebaseapp.com",
    databaseURL: "https://projectfamly.firebaseio.com",
    projectId: "projectfamly",
    storageBucket: "projectfamly.appspot.com",
    messagingSenderId: "49552131620",
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
  // firebase.initializeApp(config);

  var database = firebase.database();
  const auth = firebase.auth();

  $("#logout-button").click(function(e) {
    e.preventDefault();

    auth.signOut();

    window.location = "index.html";
  });
});
