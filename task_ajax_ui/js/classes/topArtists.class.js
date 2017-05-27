function TopArtists() {
}

TopArtists.REQUEST_METHOD = "chart.gettopartists";

TopArtists.prototype = Object.create(LastFmRequest.prototype);

TopArtists.prototype.constructor = TopArtists;

TopArtists.prototype.load = function (page) {
  LastFmRequest.prototype.load.apply(this, [TopArtists.REQUEST_METHOD, null, null, page]);
};

TopArtists.prototype.doAfterLoad = function () {
  var topArtists = LastFmRequest.prototype.parseText.call(null, this.responseText);
  setContentInTagId(content.topArtistPage);
  var submit = document.getElementById("submit");
  submit.onclick = function () {
    artistSearch.load(document.getElementById("input").value);
    return false;
  }
  setContentInTagId(content.sectionTopArtists, "section-artist");
  setContentInTagId(generateItemsHTML(topArtists.artists.artist,
          "drawArtistInfo(this)"), "artists-content");
  setPaginationHTML(topArtists.artists["@attr"].totalPages);
}
