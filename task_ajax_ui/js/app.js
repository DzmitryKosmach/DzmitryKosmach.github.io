"use strict";

var topArtists = new TopArtists();
var artistSearch = new ArtistSearch();
var artistGetinfo = new ArtistGetinfo();
var albumGetInfo = new AlbumGetInfo();
var artistTopAlbums = new ArtistTopAlbums();

var submit = document.getElementById("submit");

submit.onclick = function () {  
  artistSearch.load(document.getElementById("input").value);
  return false;
}
topArtists.load();
