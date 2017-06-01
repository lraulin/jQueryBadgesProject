$(function() {

  $.ajax({
      url: 'https://www.codeschool.com/users/lraulin.json',
      dataType: 'jsonp',
      success: function(response) {
        // handle response
        console.log(JSON.stringify(response.courses.completed));
        for (var i = 0; i < response.courses.completed.length; i++) {
          var title = response.courses.completed[i].title;
          var url = response.courses.completed[i].url;
          var badge = response.courses.completed[i].badge;
          $("#badges").append('<div class="course"><h3>' + title + '</h3><img src="' + badge + '" href="' + url + '"></div>');
        }
      }
    });


});
