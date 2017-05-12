function ArtistSearch() {
}

ArtistSearch.REQUEST_METHOD = "artist.search";

ArtistSearch.prototype = Object.create(LastFmRequest.prototype);

ArtistSearch.prototype.constructor = ArtistSearch;

ArtistSearch.prototype.load = function (artist) {
  LastFmRequest.prototype.load.apply(this, [ArtistSearch.REQUEST_METHOD, artist]);
};

ArtistSearch.prototype.doAfterLoad = function () {
  console.log("Artist Search: ");
  console.log(LastFmRequest.prototype.parseText.call(null, this.responseText));
}
