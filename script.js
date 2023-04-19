
  function searchFunction() {
    // Get the input value from the search bar
    var input = document.getElementById("search-bar").value.toLowerCase();
  
    // Get all the HTML elements on the page that match the search query
    var matches = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6");
  
    // Loop through all the matches and show/hide them based on the search query
    for (var i = 0; i < matches.length; i++) {
      var text = matches[i].textContent.toLowerCase();
  
      if (text.includes(input)) {
        matches[i].style.display = "block";
      } else {
        matches[i].style.display = "none";
      }
    }
  }
  