function AlbumGetInfo() {
}

AlbumGetInfo.REQUEST_METHOD = "album.getinfo";

AlbumGetInfo.prototype = Object.create(LastFmRequest.prototype);

AlbumGetInfo.prototype.constructor = AlbumGetInfo;

AlbumGetInfo.prototype.load = function (artist, album) {
  LastFmRequest.prototype.load.apply(this, [AlbumGetInfo.REQUEST_METHOD, artist, album]);
};

AlbumGetInfo.prototype.doAfterLoad = function () {
  var albumInfo = LastFmRequest.prototype.parseText.call(null, this.responseText);
  setContentInTagId(content.albumPage);
  document.getElementById("album-name").innerHTML = albumInfo.album.name;
  document.getElementById("album-img").setAttribute("src", albumInfo.album.image[4]["#text"]);
  document.getElementById("album-artist").children[0].textContent = albumInfo.album.artist;
  setTracksHTML(albumInfo.album.tracks.track);
}
