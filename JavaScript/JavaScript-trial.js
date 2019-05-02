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

// Assign the reference to the database to a variable named 'database'
// var database = ...
var database = firebase.database();

// Button for adding projects
$("#submitProject").on("click", function(event) {
  event.preventDefault();

  //  Store input in variables
  var projectName = $("#nameInput")
    .val()
    .trim();
  var mentorEmail = $("#inputEmail4")
    .val()
    .trim();
  var educationChoice = $("#inputEducation");
  var locationChoice = $("#inputLocation");
  var activitiesChoice = $("#inputActivity");
  var rangeChoice = $("#inputRange");
  var projectDetails = $("#projectDetails");

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
  database.ref().push(newProject);

  alert("Project successfully added");

  // Clears all of the text-boxes

  $("#inputEducation").val("");
  $("#inputLocation").val("");
  $("#inputActivity").val("");
  $("#inputRange").val("");
  $("#projectDetails").val("");
});

// Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot) {
  console.log(childSnapshot.val());

  newCard = "<div class='project-group'></div>";

  // Store everything into a variable.
  var name = childSnapshot.val().projectName.text();
});
