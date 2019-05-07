$(document).ready(function() {
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBXpm4owlDd5Lh937ObtnvNHZ_2vDAk5VI",
    authDomain: "projectfamly.firebaseapp.com",
    databaseURL: "https://projectfamly.firebaseio.com",
    projectId: "projectfamly",
    storageBucket: "projectfamly.appspot.com",
    messagingSenderId: "49552131620",
    appId: "1:49552131620:web:84d6ea0a4305a5cf"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // // Initialize Firebase
  // const firebaseConfig = {
  //   apiKey: "AIzaSyDUocsfxxFDln7Mx1k-wpn_mtmb0mjVIwc",
  //   authDomain: "test1-ebe40.firebaseapp.com",
  //   databaseURL: "https://test1-ebe40.firebaseio.com",
  //   projectId: "test1-ebe40",
  //   storageBucket: "test1-ebe40.appspot.com",
  //   messagingSenderId: "48362215663",
  //   appId: "1:48362215663:web:5d4a7ca53c9c9612"
  // };

  // firebase.initializeApp(firebaseConfig);

  // Assign the reference to the database to a variable named 'database'
  // var database = ...
  var db = firebase.database();

  // var db = firebase.firestore();

  // Button for adding projects
  $("#submitBTN").on("click", function(event) {
    event.preventDefault();

    //  Store input in variables
    var projectName = $("#nameInput")
      .val()
      .trim();
    var mentorEmail = $("#inputEmail4")
      .val()
      .trim();
    var educationChoice = $("#inputEducation")
      .find(":selected")
      .text();
    var locationChoice = $("#inputLocation")
      .find(":selected")
      .text();
    var activitiesChoice = $("#inputActivity")
      .find(":selected")
      .text();
    var rangeChoice = $("#inputRange")
      .val()
      .trim();
    var projectDetails = $("#projectDetails")
      .val()
      .trim();

    //Upload all inputs to Firebase
    var newProject = {
      ProjectName: projectName,
      MentorEmail: mentorEmail,
      EducationChoice: educationChoice,
      LocationChoice: locationChoice,
      ActivitiesChoice: activitiesChoice,
      RangeChoice: rangeChoice,
      ProjectDetails: projectDetails
    };

    // Uploads project data to the database FMLY @ Firebase
    db.ref().push(newProject);

    // console.log("new project added");

    // db.collection("MentorEvents")
    //   .doc("activity")
    //   .set({
    //     ProjectName: $("#nameInput").val(),
    //     MentorEmail: $("#inputEmail4").val(),
    //     EducationChoice: $("#inputEducation")
    //       .find(":selected")
    //       .text(),
    //     LocationChoice: $("#inputLocation")
    //       .find(":selected")
    //       .text(),
    //     ActivitiesChoice: $("#inputActivity")
    //       .find(":selected")
    //       .text(),
    //     RangeChoice: $("#inputRange"),
    //     ProjectDetails: $("#projectDetails").val()
    //   })
    //   .then(function() {
    //     console.log("success");
    //   })
    //   .catch(function(error) {
    //     console.error("error");
    //   });
    // console.log(projectName);
    // console.log(mentorEmail);
    // console.log(educationChoice);
    // console.log(locationChoice);
    // console.log(activitiesChoice);
    // console.log(rangeChoice);
    // console.log(projectDetails);

    console.log("Project successfully added");
    console.log(childSnapshot.val().ProjectName);

    // Clears all of the text-boxes and options
    $("#nameInput").val("");
    $("#inputEmail4").val("");
    $("#inputEducation").find("");
    $("#inputLocation").find("");
    $("#inputActivity").find("");
    $("#inputRange").val("");
    $("#projectDetails").val("");

    //remove form from display

    // // Retrieve project information @ Firebase  and generate a new projectCard with all info.
    database.ref().on("child_added", function(childSnapshot) {
      console.log(childSnapshot.val());
      // document.$("id01").style.display = "none";

      var newCard = $("#projectCard").append(
        childSnapshot.val().ProjectName.html("#projectTitle"),
        childSnapshot.val().MentorEmail.html("#projectMentor"),
        childSnapshot.val().ProjectDetails.html("#projectDetails"),
        childSnapshot.val().RangeChoice.html("#projectGoal")
      );

      // Append the card to project list
      $("#projectCard").append(newCard);
    });
  });
});
