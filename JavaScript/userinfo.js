// Initialize Firebase
var config = {
  apiKey: "AIzaSyBXpm4owlDd5Lh937ObtnvNHZ_2vDAk5VI",
  authDomain: "projectfamly.firebaseapp.com",
  databaseURL: "https://projectfamly.firebaseio.com",
  projectId: "projectfamly",
  storageBucket: "projectfamly.appspot.com",
  messagingSenderId: "49552131620",
};
firebase.initializeApp(config);

const db = firebase.firestore();
const auth = firebase.auth();


$(document).ready(function () {
  // If the user is signed in the information from his/her acount will be displayed in their profile


  auth.onAuthStateChanged(user => {
    if (user) {
      // account info 
      db.collection("users")
        .doc(user.uid)
        .get()
        .then(doc => {
          // Main Title
          $("#mentor-name").text(
            doc.data().firstname + " " + doc.data().lastname,
          );
          // inside model
          $(".modal-title").text(
            "Hi! I'm " + doc.data().firstname + " " + doc.data().lastname,
          );
          $("#feed-input").text(doc.data().bio);
          $(".profile-Bio").text(doc.data().bio);

        })
    }
  });


  // edit profile
  $(document).on("click", "#submitbtn", function (e) {

    e.preventDefault();


    auth.onAuthStateChanged(user => {
      db.collection("users")
        .doc(user.uid)
        .update({
          firstname: $('#firstnameEdit').val(),
          lastname: $('#lastnameEdit').val(),
          bio: $('#mentorbio').val(),
        })
        .then(function() {
          console.log("Document successfully written!");
          document.location.reload()
        })

    })

  });
});


