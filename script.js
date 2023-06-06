document.getElementById('search-form').addEventListener('submit', function(event) {
  event.preventDefault();

  var searchTerm = document.getElementById('search-input').value;
  var searchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(searchTerm);

  window.open(searchUrl, '_blank');
  document.getElementById('search-input').value = ''; // Clear the search input field
});

window.addEventListener('pageshow', function(event) {
  var searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.value = '';
  }
});

function clock() {
  const fullDate = new Date();
  var hours = fullDate.getHours();
  var mins = fullDate.getMinutes();
  var secs = fullDate.getSeconds();

  if (hours < 10) {
      hours = "0" + hours;
  }
  if (mins < 10) {
      mins = "0" + mins;
  }
  if (secs < 10) {
      secs = "0" + secs;
  }

  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML =":" + mins;
  document.getElementById("second").innerHTML =":" + secs;
}

setInterval(clock, 100);