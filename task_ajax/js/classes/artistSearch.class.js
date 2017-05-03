function ArtistSearch(artist, api_key) {
  LastFmRequest.apply(this, ["artist.search", artist, null, api_key]);
}

ArtistSearch.prototype = Object.create(LastFmRequest.prototype);

ArtistSearch.prototype.constructor = ArtistSearch;

ArtistSearch.prototype.doAfterLoad = function () {
  console.log("Artist Search: ");
  console.log(LastFmRequest.prototype.parseText.call(null, this.responseText));
}
