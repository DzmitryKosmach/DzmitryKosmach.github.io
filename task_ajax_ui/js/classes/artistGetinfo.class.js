function ArtistGetinfo() {
}

ArtistGetinfo.REQUEST_METHOD = "artist.getinfo";

ArtistGetinfo.prototype = Object.create(LastFmRequest.prototype);

ArtistGetinfo.prototype.constructor = ArtistGetinfo;

ArtistGetinfo.prototype.load = function (artist) {
  LastFmRequest.prototype.load.apply(this, [ArtistGetinfo.REQUEST_METHOD, artist]);
};

ArtistGetinfo.prototype.doAfterLoad = function () {
  var artistInfo = LastFmRequest.prototype.parseText.call(null, this.responseText);
  var fragment = createFragment(content.artistPage);
  setContentInTagId(fragment, artistInfo.artist.name, "artist-name");
  fragment.getElementById("likes-votes").setAttribute("style", "width: " + randomWidthLikesVotes() + "px;");
  fragment.getElementById("artist-about").children[0].setAttribute("src", artistInfo.artist.image[2]["#text"]);
  fragment.getElementById("artist-about").children[1].innerHTML = artistInfo.artist.bio.content;
  setFragmentToPage(fragment);
}
