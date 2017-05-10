function ArtistGetinfo() {
}

ArtistGetinfo.REQUEST_METHOD = "artist.getinfo";

ArtistGetinfo.prototype = Object.create(LastFmRequest.prototype);

ArtistGetinfo.prototype.constructor = ArtistGetinfo;

ArtistGetinfo.prototype.load = function (artist) {
  LastFmRequest.prototype.load.apply(this, [ArtistGetinfo.REQUEST_METHOD, artist]);
};

ArtistGetinfo.prototype.doAfterLoad = function () {
  console.log("Artist Getinfo: ");
  console.log(LastFmRequest.prototype.parseText.call(null, this.responseText));
}
