$(document).ready(function () {
    $("sidenav").sidenav();

    var queryURL = "https://andruxnet-random-famous-quotes.p.rapidapi.com/?count=1&cat=famous";


    $.ajax({
        method: 'POST',
        url: queryURL,
        headers: { 
          "X-RapidAPI-Host": "andruxnet-random-famous-quotes.p.rapidapi.com",
          "X-RapidAPI-Key": "4d3c3b7107msh21e5af43ee1b335p1026dbjsn1407616621c1",
          "Content-Type": "application/x-www-form-urlencoded"
        }
        }).then (function (response){
            console.log (response[0].quote)
            console.log (response[0].author)
        
    });

    // var options = { 
    //   method: 'POST',
    //   url: queryURL,
    //   headers: { 
    //     "X-RapidAPI-Host": "andruxnet-random-famous-quotes.p.rapidapi.com",
    //     "X-RapidAPI-Key": "4d3c3b7107msh21e5af43ee1b335p1026dbjsn1407616621c1",
    //     "Content-Type": "application/x-www-form-urlencoded"
    //   }
    // }
    
    // request(options, function (error, response, body) {
    //   if (error) throw new Error(error);
    //   console.log(body);
    //   console.log(response)
    // });





});
