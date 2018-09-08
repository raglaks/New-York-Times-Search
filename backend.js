  $(".btn").on("click",function() {
    event.preventDefault();
    var Serch = $("#searchTerm").val();
    var Qty = $("#records option:selected").text();
    var startY = $("#start").val();
    var endY = $("#end").val();
    
    console.log(Serch);
    console.log(Qty);
    console.log(startY);
    console.log(endY);
    
    if(startY == "" && endY == "") {
      $.ajax({
        url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
        method: "GET",
        data: {"api-key":"688ebf136fc34c92aa7ab402ce7123df", 'q': Serch, 'begin_date': "20180101","sort":"newest"}
      }).then(function(rensonse) {
        console.log(rensonse);
      });
    } else {
      $.ajax({
        url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
        method: "GET",
        data: {"api-key":"688ebf136fc34c92aa7ab402ce7123df", 'q': Serch, 'begin_date': startY,'end_date':endY,"sort":"newest"}
      }).then(function(rensonse) {
        console.log(rensonse);
      });
    }

    
  });

  