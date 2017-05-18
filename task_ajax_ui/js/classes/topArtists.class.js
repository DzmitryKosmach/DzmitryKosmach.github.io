function TopArtists() {  
}

TopArtists.REQUEST_METHOD = "chart.gettopartists";

TopArtists.prototype = Object.create(LastFmRequest.prototype);

TopArtists.prototype.constructor = TopArtists;

TopArtists.prototype.load = function (page) {
  LastFmRequest.prototype.load.apply(this, [TopArtists.REQUEST_METHOD, null, null, page]);
};

TopArtists.prototype.doAfterLoad = function () {  
  var topArtists = LastFmRequest.prototype.parseText.call(null, this.responseText); 
  var divContent = document.getElementById("artists-content");
  divContent.innerHTML = generateItemsHTML(topArtists.artists.artist, "drawArtistInfo(this)");
  setPaginationHTML(topArtists.artists["@attr"].totalPages);
  toggleHiddenPages(["top-artist-page", "section-top-artists"]);  
}
