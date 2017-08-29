var content = {
  topArtistPage: 
    '<div id="top-artist-page">'+
      '<form id="search" class="text-align-center">'+
        '<input id ="input" type="text" placeholder="Ex.: LP"/>'+
        '<input id="submit" type="submit" value="Search" />'+          
      '</form>'+
      '<div id="section-artist"></div>'+        
    '</div>',
  sectionArtistMatches: 
    '<div id="section-artists">'+
      '<h2>Artist Matches</h2>'+
      '<div id="artists-matches-content"></div>'+
    '</div>',
  sectionTopArtists: 
    '<div id="section-top-artists">'+
      '<h2>Top Artists</h2>'+
      '<div id="artists-content"></div>'+
      '<div id="pagination">'+
        '<p class="text-align-center"></p>'+         
      '</div>'+
    '</div>',
  artistPage: 
    '<div id="artist-page">'+
      '<div id="artist-info">'+
        '<div id="artist-likes">'+
          '<h2 id="artist-name">LP</h2>'+
          '<div id="likes">'+
            '<div id="likes-blank"></div>'+
            '<div id="likes-votes"></div>'+
          '</div>'+
        '</div>'+
        '<div class="clear"></div>'+
      '</div>'+
      '<div id="artist-about">'+
        '<img src="styles/img/empty_img.jpg">'+
        '<p></p>'+
        '<div class="clear"></div>'+
        '<h2>Albums</h2>'+
        '<div id="albums-content"></div>'+
      '</div>'+
    '</div>',
  albumPage: 
    '<div id="album-page">'+
      '<h2>Album</h2>'+
      '<div id="album-info">'+
        '<h2 id="album-name">Album</h2>'+
        '<img id="album-img" src="styles/img/empty_img.jpg"/>'+
        '<p id="album-artist">Artist: <span></span></p>'+
        '<p id="album-yaer">Year: <span>2016</span></p>'+
        '<p id="album-genre">Genre: <span>Pop</span></p>'+
        '<div class="clear"></div>'+
        '<h2>Tracks</h2>'+
        '<div id="tracks-content"></div>'+
      '</div>'+
        '</div>',
  figureTemplate:
        '<div id="figure-template">'+
          '<figure class="artist">'+           
            '<img src="" alt="img"/>'+           
            '<figcaption>LP</figcaption>'+
          '</figure>'+
        '</div>'
};

function setContentInTagId(fragment, content = "", tagId = "content-page"){  
  var placeSet = fragment.getElementById(tagId);
  placeSet.innerHTML = content;     
  return placeSet;                         
}

function setFragmentToPage(fragment) {
  setContentInTagId(document).appendChild(fragment);
}

function createFragment(content) {
  var fragment = document.createDocumentFragment();
  var div = document.createElement("div");
  div.innerHTML = content;
  fragment.appendChild(div.children[0]);
  return fragment;
}
