function TopArtists() {  
}

TopArtists.REQUEST_METHOD = "chart.gettopartists";

TopArtists.prototype = Object.create(LastFmRequest.prototype);

TopArtists.prototype.constructor = TopArtists;

TopArtists.prototype.load = function () {
  LastFmRequest.prototype.load.apply(this, [TopArtists.REQUEST_METHOD]);
};

TopArtists.prototype.doAfterLoad = function () {
  console.log("Top Artists: ");
  console.log(LastFmRequest.prototype.parseText.call(null, this.responseText));
}
