$(document).ready(function() {
  // Initialize Firebase
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
  //   firebase.initializeApp(config);

  var database = firebase.database();
  const auth = firebase.auth();
  var user = firebase.auth().currentUser;

  // sign in
  $("#loginBtn").click(function(e) {
    e.preventDefault();
    const email = $("#uname").val();
    const pass = $("#upsw").val();
    const promise = auth.signInWithEmailAndPassword(email, pass);

    promise.catch(e => console.log(e.message));
  });

  // signup event
  $(".signupbtn").click(function(e) {
    e.preventDefault();
    const email = $("#email").val();
    const pass = $("#psw").val();
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    var firstName = $("#firstname")
      .val()
      .trim();
    var lastName = $("#lastname")
      .val()
      .trim();

    promise.catch(e => console.log(e.message));

    var profile = {
      firstname: firstName,
      lastname: lastName,
      email: email,
    };

    database.ref().push(profile);

    console.log(user);

    // $("#mentor-name").text();
    // $("#mentor-name").append(profile.firstname);

    // console.log(profile.firstname);
    // console.log(profile.lastname);
    // console.log(profile.email);
  });

  auth.onAuthStateChanged(User => {
    if (User) {
      window.location = "mentorpg.html";
      console.log(User);
    } else {
      console.log("not logged in");
    }
  });
});
