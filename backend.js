



$.ajax({
    url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
    method: "GET",
    data: {"api-key":"688ebf136fc34c92aa7ab402ce7123df", 'q': "obama"}
  }).then(function(rensonse) {
    console.log(rensonse);
  });