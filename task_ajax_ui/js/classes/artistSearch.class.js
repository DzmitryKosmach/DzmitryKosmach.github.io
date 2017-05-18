function ArtistSearch() {
}

ArtistSearch.REQUEST_METHOD = "artist.search";

ArtistSearch.prototype = Object.create(LastFmRequest.prototype);

ArtistSearch.prototype.constructor = ArtistSearch;

ArtistSearch.prototype.load = function (artist) {
  LastFmRequest.prototype.load.apply(this, [ArtistSearch.REQUEST_METHOD, artist]);
};

ArtistSearch.prototype.doAfterLoad = function () {   
  var artistMatches = LastFmRequest.prototype.parseText.call(null, this.responseText);  
  var divContent = document.getElementById("artists-matches-content");
  divContent.innerHTML = generateItemsHTML(artistMatches.results.artistmatches.artist, "drawArtistInfo(this)");
  toggleHiddenPages(["top-artist-page", "section-artist-matches"]);
}
