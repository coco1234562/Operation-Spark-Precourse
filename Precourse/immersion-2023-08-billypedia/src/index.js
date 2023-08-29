const onReady = (data) => {
  // YOUR CODE BELOW HERE //

  // Uncomment this to inspect all available data; delete when done //
  // EXAMPLE: Looping over top rated recordings; replace with your code //
  // const topRated = data.discography.topRated;
  // topRated.forEach((recording) => {
  //   console.log(recording);
  // });
  // $('.heading-article').css('color', 'red');

  /* eslint-enable */

  //todo 3
  $('#section-bio').css('color', 'blue').css('background-color', 'beige');

  $('#section-quotes').css('color', 'red').css('background-color', '');
  //todo4
  let topRated = data.discography.topRated;
  topRated.map(function (recording) {
    return $('#list-top-rated').append('<li class="recording top-rated" id=' + recording.art + '><span class="title">title: ' + recording.title + '</span><br /><span>artist: ' + recording.artist + '<span><br /><span>release: ' + recording.release + '<span><br /><span>year: ' + recording.year + '</span><br /><br /></li>');
  });
  

  //todo 5
  var $newSection = $('<section id="section-recordings" class="recordings">');
  // let underTopRated = $($newSection).append();

  var $heading = $('<h2>Recordings</h2>');
  var $ul = $('<ul id="list-recordings" class="list-recordings">');
  var newNew = $($newSection).append($ul);
  var appendHeading = $($newSection).prepend($heading);
  $('#sidebar').append(newNew);
  let recordings = data.discography.recordings;

  recordings.map(function(recording) {
    return $($ul).append($('<li class="recording" id=' + recording.art + '><div class="title">title: ' + recording.title + '</div><div class="artist">artist: ' + recording.artist + '<div><div class="release">release: ' + recording.release + '<div><div class="year">year: ' + recording.year + '</div><br /></li>'));
  });
  //Todo 6
  $('#section-top-rated').prepend('<div id="image-container-top-rated"><img src=' + topRated[0].art + ' class="image" /></div>');
  $($newSection).prepend('<div id="image-container-recording"><img src=' + recordings[0].art + ' class="image" /></div>');
  //Todo 7
  var billyImage = data.images.billy;
  $('#image-billy').on('click', function() {
    if (billyImage[0] === $('#image-billy').attr('src')) {
      $('#image-billy').attr('src', billyImage[1]);
    } else if (billyImage[1] === $('#image-billy').attr('src')) {
      $('#image-billy').attr('src', billyImage[2]);
    } else if (billyImage[2] === $('#image-billy').attr('src')) {
      $('#image-billy').attr('src', billyImage[3]);
    } else if (billyImage[3] === $('#image-billy').attr('src')) {
      $('#image-billy').attr('src', billyImage[0]);
    }
  });
  //Todo 8
  $('li').on('click', function() {
    $(this).closest('.list-recordings').closest('.recordings')
      .find('img').attr('src', this.id);
  });
  //Todo 9
  var rider = data.rider;
  
  var cTable = function(entry) {
    var cRow = function(val) {
      var $row = $('<tr>');
      var $type = $('<td>').text(val.type);
      var $desc = $('<td>').text(val.desc);
      $row.append($type, $desc);
      return $row;
    };
    var $table = $('<table>');
    var $rows = entry.map(cRow);
    $table.append($rows);
    return $table;
  };
  
  cTable(rider).appendTo('#sections');

  // YOUR CODE ABOVE HERE //
};
/* eslint-disable */
const onFail = (error) => {
  console.error("getJSON on discography failed!");
};

$(document).ready(() => {
  $.getJSON("/src/data.json", onReady).fail(onFail);
});