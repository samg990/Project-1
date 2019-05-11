$(document).ready(function() {
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBPTO1NyspDb4daC3OCQkCr8nIEig0HtRE",
    authDomain: "projectfamly.firebaseapp.com",
    databaseURL: "https://projectfamly.firebaseio.com",
    projectId: "projectfamly",
    storageBucket: "projectfamly.appspot.com",
    messagingSenderId: "49552131620",
    appId: "1:49552131620:web:84d6ea0a4305a5cf"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Assign the reference to the database to a variable named 'database'
  // var database = ...
  var db = firebase.database();

  var projectFB = db.ref();
  projectFB.on("value", function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      // document.$("id01").style.display = "none";
      //   console.log(childSnapshot.val());

      //   //hold donation amount in a variable in order to compare when donating.
      var donationGOAL = childSnapshot.val().RangeChoice;

      var newCard = `<div class="wrapper actCardWrapper ">
        <div style="width: 17rem; height: 30rem; margin:3%;" class="card education-act">
            <img id="actMentor" class="card-img-top" src="images/other/avatar.png"
                alt="Card image cap" data-toggle="modal" data-target="#mentorBio">
            <div class="card-body">
                <h4 class="card-goal">GOAL: $${
                  childSnapshot.val().RangeChoice
                }</h4>
                <hr>
                <!-- <h5 class="card-title">Entertainment</h5> -->
                <p class="card-text">${childSnapshot.val().ProjectName}</p>
                <hr>
                <p class="actDescription">${
                  childSnapshot.val().ProjectDetails
                }</p>
            </div>
            <div class="card-footer">
                <!-- <a href="#" style="margin:0%" 
                    class="btn btn-primary stretched-link">Mentor</a>  -->
                <a href="#" style="margin:1%" class="btn btn-primary stretched-link"
                    id="donDonBtn" data-toggle="modal"
                    data-target="#donDonate">Donate</a><br>
                <small class="text-muted">Mentor Part of APCH™ Network</small>
            </div>
        </div>
    </div>`;

      //   Append the card to project list
      $("#card-container").append(newCard);
    });

    // <-- Cart -->
    // //Cart Array Variables
    // var arrSum = totalArray => totalArray.reduce((a, b) => a + b, 0);

    // array that will hold total of donations
    var totalDonArr = [];

    var donInput = $("#donDonAmount").val();

    var numAr = donInput;

    //total cart
    var totalCart = 0;

    // on click of the Donate button within the modal trigger additiona to cart and show diplay total
    $("#donDONBTN").on("click", function(event) {
      event.preventDefault();

      //Add donation amount to Array

      totalDonArr.push($("#donDonAmount").val());
      console.log(totalDonArr);

      //   [0, 1, 2, 3, 4].reduce((accumulator, currentValue, currentIndex, array) => {
      //     return accumulator + currentValue;

      // function for adding two numbers. Easy!
      const add = (accumulator, currentValue) => accumulator + currentValue;
      // use reduce to sum our array
      const sum = totalDonArr.reduce(add);

      //   console.log(totalCart);

      //   for (var i = 0; i < totalDonArr.length; i++) {
      //     totalCart += totalDonArr[i];
      //   }

      //display array REDUCED total in HTML
      $("#donationTotal").html(sum);
      console.log(sum);

      //   //display array REDUCED total in HTML
      //   $("#donationTotal").html(arrSum);

      //   //close modal and show donor page
      //   window.location.href = "donerpg.html";
      $(this).hide();

      //   $("#donDonate").style.display = "none";
    });
  });
});
