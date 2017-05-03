function ArtistGetinfo(artist, api_key) {
  LastFmRequest.apply(this, ["artist.getinfo", artist, null, api_key]);
}

ArtistGetinfo.prototype = Object.create(LastFmRequest.prototype);

ArtistGetinfo.prototype.constructor = ArtistGetinfo;

ArtistGetinfo.prototype.doAfterLoad = function () {
  console.log("Artist Getinfo: ");
  console.log(LastFmRequest.prototype.parseText.call(null, this.responseText));
}
