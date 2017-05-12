function AlbumGetInfo() {
}

AlbumGetInfo.REQUEST_METHOD = "artist.getinfo";

AlbumGetInfo.prototype = Object.create(LastFmRequest.prototype);

AlbumGetInfo.prototype.constructor = AlbumGetInfo;

AlbumGetInfo.prototype.load = function (artist, album) {
  LastFmRequest.prototype.load.apply(this, [AlbumGetInfo.REQUEST_METHOD, artist, album]);
};

AlbumGetInfo.prototype.doAfterLoad = function () {
  console.log("Album GetInfo: ");
  console.log(LastFmRequest.prototype.parseText.call(null, this.responseText));
}
