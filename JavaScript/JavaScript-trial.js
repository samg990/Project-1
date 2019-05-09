// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBPTO1NyspDb4daC3OCQkCr8nIEig0HtRE",
  authDomain: "test1-ebe40.firebaseapp.com",
  databaseURL: "https://test1-ebe40.firebaseio.com",
  projectId: "test1-ebe40",
  storageBucket: "test1-ebe40.appspot.com",
  messagingSenderId: "48362215663",
  appId: "1:48362215663:web:5d4a7ca53c9c9612"
};

firebase.initializeApp(firebaseConfig);

// Assign the reference to the database to a variable named 'database'
// var database = ...
var database = firebase.database();

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
  var rangeChoice = $("#inputRange");
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
  database.ref().push(newProject);

  // console.log(projectName);
  // console.log(mentorEmail);
  // console.log(educationChoice);
  // console.log(locationChoice);
  // console.log(activitiesChoice);
  // console.log(rangeChoice);
  // console.log(projectDetails);

  // alert("Project successfully added");

  // // Clears all of the text-boxes

  // $("#inputEducation").val("");
  // $("#inputLocation").val("");
  // $("#inputActivity").val("");
  // $("#inputRange").val("");
  // $("#projectDetails").val("");

  // // Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
  // database.ref().on("child_added", function(childSnapshot) {
  //   console.log(childSnapshot.val());

  //   var newCard = $("<div class='project-group'></div>").append(
  //     $("#card-title").text(childSnapshot.val().projectName),
  //     $("#activity-title").text(childSnapshot.val().activitiesChoice),
  //     $("#card-text").text(childSnapshot.val().projectDetails)
  //   );

  //   // Append the new row to the table
  //   $("<div class='project-group'></div>").append(newCard);
  // });
});
