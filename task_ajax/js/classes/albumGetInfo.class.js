function AlbumGetInfo(artist, album, api_key) {
  LastFmRequest.apply(this, ["artist.getinfo", artist, album, api_key]);
}

AlbumGetInfo.prototype = Object.create(LastFmRequest.prototype);

AlbumGetInfo.prototype.constructor = AlbumGetInfo;

AlbumGetInfo.prototype.doAfterLoad = function () {
  console.log("Album GetInfo: ");
  console.log(LastFmRequest.prototype.parseText.call(null, this.responseText));
}
