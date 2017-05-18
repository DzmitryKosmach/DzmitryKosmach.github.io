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
  var divContent = document.getElementById("albums-content");
  divContent.innerHTML = generateItemsHTML(artistTopAlbums.topalbums.album, "drawAlbumInfo(this)", artistTopAlbums.topalbums["@attr"].artist);
  toggleHiddenPages("artist-page");  
}
