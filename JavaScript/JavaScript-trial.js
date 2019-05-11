$(document).ready(function() {

  // Assign the reference to the database to a variable named 'database'
  // var database = ...
  var db = firebase.database();

  $("#submitBTN").on("click", function(event) {
    event.preventDefault();

    // // Create Firebase event for adding employee to the database and a row in the html when a user adds an entry

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
    console.log("Project successfully added");

    // Clears all of the text-boxes and options
    // $("#nameInput").val("");
    // $("#inputEmail4").val("");
    // $("#inputEducation").find("");
    // $("#inputLocation").find("");
    // $("#inputActivity").find("");
    // $("#inputRange").val("");
    // $("#projectDetails").val("");

    window.location.href = "donerpg.html";

    // var projectFB = db.ref("newProject");
    // projectFB.on("value", function(snapshot) {
    //   snapshot.forEach(function(childSnapshot) {
    //     var childData = childSnapshot.val();

    //     // // Retrieve project information @ Firebase  and generate a new projectCard with all info.
    //     projectFB.ref().on("child_added", function(snapshot) {
    //       // document.$("id01").style.display = "none";

    //       var newCard = $("#projectCard").append(
    //         childData.ProjectName.html("#card-text"),
    //         childData.ProjectDetails.html(".actDescription"),
    //         childData.RangeChoice.html("#card-goal")
    //       );

    //       // Append the card to project list
    //       $("#projectCard").append(newCard);
    //     });
    //   });
    // });
  });
});
