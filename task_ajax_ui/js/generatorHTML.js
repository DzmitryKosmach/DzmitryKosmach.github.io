function generateItemsHTML(items, stringFuncOnclick, artist) {
  var divTemplate = document.createElement("div");
  divTemplate.innerHTML = content.figureTemplate;
  figureTemplate = divTemplate.children[0].children[0];
  var resultHTML = "";
  var artist = artist ? artist + "," : "";
  items.forEach(function (item) {
    var album = item.name;
    var srcImg = item.image[2]["#text"];
    if (srcImg) {
      figureTemplate.setAttribute("data-item", (artist + album));
      figureTemplate.setAttribute("onclick", stringFuncOnclick);
      figureTemplate.children[0].setAttribute("src", srcImg);
      figureTemplate.children[1].textContent = album;
      resultHTML += figureTemplate.outerHTML;
    }
  });
  return resultHTML;
}

var currentPage = 1;
var numberShowingPages = 10;
var startPage = currentPage;
var endPage = numberShowingPages;
function setPaginationHTML(fragment, totalPages) {
  var sectionPagination = fragment.getElementById("pagination").children[0];
  sectionPagination.innerHTML = "";
  if (currentPage > endPage) {
    endPage++;
    startPage++;
  }
  if (currentPage < startPage) {
    endPage--;
    startPage--;
  }
  if (startPage > 1) {
    appendNumberPage(startPage - 1, "<--");
  }
  for (var i = startPage; i <= endPage; i++) {
    appendNumberPage(i, i)
  }
  if (endPage < totalPages) {
    appendNumberPage(endPage + 1, "-->");
  }
  function appendNumberPage(numberPage, stringPage) {
    var a = document.createElement('a');
    a.setAttribute("data-page", numberPage);
    a.textContent = stringPage;
    if (numberPage == currentPage) {
      a.className = "current-page";
    }
    a.onclick = drawTopArtists;
    sectionPagination.appendChild(a);
  }
}

function setTracksHTML(fragment,tracks) {
  var sectionTracks = fragment.getElementById("tracks-content");
  sectionTracks.innerHTML = "";
  tracks.forEach(function (track) {
    var trackName = document.createElement("p");
    trackName.textContent = track.name;
    var audio = document.createElement("audio");
    audio.setAttribute("controls", "");
    sectionTracks.appendChild(trackName);
    sectionTracks.appendChild(audio);
  });
}

function drawTopArtists() {
  currentPage = this.getAttribute("data-page");
  topArtists.load(currentPage);
}

function drawArtistInfo(element) {
  var artist = element.getAttribute("data-item").split(",", 2)[0];
  artistGetinfo.load(artist);
  artistTopAlbums.load(artist);
}

function drawAlbumInfo(element) {
  dataArray = element.getAttribute("data-item").split(",", 2);
  var artist = dataArray[0];
  var album = dataArray[1];
  albumGetInfo.load(artist, album);
}

function randomWidthLikesVotes() {
  return (Math.floor(Math.random() * 5) + 1) * 17;
}
