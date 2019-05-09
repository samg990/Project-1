  
  // log out button
  
  $('#logout-button').click(function (e) { 
    e.preventDefault();

    auth.signOut();

    window.location = 'index.html';    
  });