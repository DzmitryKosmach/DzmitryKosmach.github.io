function TopArtists(api_key) {
  LastFmRequest.apply(this, ["chart.gettopartists", null, null, api_key]);
}

TopArtists.prototype = Object.create(LastFmRequest.prototype);

TopArtists.prototype.constructor = TopArtists;

TopArtists.prototype.doAfterLoad = function () {
  console.log("Top Artists: ");
  console.log(LastFmRequest.prototype.parseText.call(null, this.responseText));
}
