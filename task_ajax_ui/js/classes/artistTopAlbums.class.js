function ArtistTopAlbums() {
}

ArtistTopAlbums.REQUEST_METHOD = "artist.getTopAlbums";

ArtistTopAlbums.prototype = Object.create(LastFmRequest.prototype);

ArtistTopAlbums.prototype.constructor = ArtistTopAlbums;

ArtistTopAlbums.prototype.load = function (artist) {
  LastFmRequest.prototype.load.apply(this, [ArtistTopAlbums.REQUEST_METHOD, artist]);
};

ArtistTopAlbums.prototype.doAfterLoad = function () {
  var artistTopAlbums = LastFmRequest.prototype.parseText.call(null, this.responseText);
  setContentInTagId(generateItemsHTML(artistTopAlbums.topalbums.album,
          "drawAlbumInfo(this)", artistTopAlbums.topalbums["@attr"].artist), "albums-content");
}
