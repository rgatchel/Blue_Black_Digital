$(document).ready(function() {
  // Search Start
  $("form").submit(function(e) {
    e.preventDefault();
  });
  $("#_search").on("change", function(e) {
    if (e.keyCode == 13) {
      
    }

    var x = document.getElementById("_search").value;
    $.ajax({
      type: "GET",
      url:
        "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
          x +
          "&limit=10&namespace=0&format=json",
      success: function(data) {
        var n = data[1];
        var href = data[3];
        var i = 0;
        var j = 0;
        var nHtml = "";
        var hHtml = "";

        for (i = 0, j = 0; i < 10, j < 10; i++, j++) {
          (hHtml +=
            "<a href=" + href[j] + ">" + n[i] + "</a>" + "<br>"), (nHtml +=
            n[i] + "<br>");
        }
        $("#test").html(hHtml);
      },
      dataType: "jsonp"
    });
  });
});