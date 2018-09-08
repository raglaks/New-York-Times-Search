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
    var target = $("#cardh");
    target.empty();
    
    if(startY == "" && endY == "") {
      $.ajax({
        url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
        method: "GET",
        data: {"api-key":"688ebf136fc34c92aa7ab402ce7123df", 'q': Serch, 'begin_date': "20180101","sort":"newest"}
      }).then(function(rensonse) {
        console.log(rensonse.response.docs);
        var arrayArticle = rensonse.response.docs;
        for(var i = 0; i<Qty;i++){
          arrayArticle[i];
          headline1 = arrayArticle[i].headline.main;
          snippet1 = arrayArticle[i].snippet;
          link2 = arrayArticle[i].web_url;
          createDivS(headline1,snippet1,link2);
        }


      });
    } else {
      $.ajax({
        url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
        method: "GET",
        data: {"api-key":"688ebf136fc34c92aa7ab402ce7123df", 'q': Serch, 'begin_date': startY,'end_date':endY,"sort":"newest"}
      }).then(function(rensonse) {
        console.log(rensonse.response.docs);
        var arrayArticle = rensonse.response.docs;
        for(var i = 0; i<Qty;i++){
          arrayArticle[i];
          headline1 = arrayArticle[i].headline.main;
          snippet1 = arrayArticle[i].snippet;
          link2 = arrayArticle[i].web_url;
          createDivS(headline1,snippet1,link2);
        }
      });
    }

    
  });

  function createDivS(headline, snippet,link1) {

      var target = $("#cardh");
      
      var row = $("<div>");
      row.attr("class","row results");
      var card = $("<div>");
      card.attr("style","width: 100%");
      card.attr("class","card");
      var cardbody = $("<div>");
      cardbody.attr("class","card-body text-dark");
      var cardtitle = $("<h5>");
      cardtitle.attr("class","card-title");
      var cardtext = $("<p>");
      cardtext.attr("class","card-text");
      var link = $("<a>");
      link.attr("class","btn btn-primary");
      link.attr("target","blank");
      link.text("Read More")
      cardtitle.text(headline);
      cardbody.text(snippet);
      link.attr("href",link1);
      cardbody.append(cardtitle);
      cardbody.append(cardbody);
      cardbody.append(link);
      card.append(cardbody);
      row.append(card);
      target.append(row);
      target.append("<br>");
      

  };

/* <div class="row results">
    <div class="card" style="width: 100%;">
      <div class="card-body text-dark">
        <h5 class="card-title">Headline goes here</h5>
        <p class="card-text">Snippet goes here</p>
        <a href="#" class="btn btn-primary">Read article</a>
      </div>
    </div>
  </div> */