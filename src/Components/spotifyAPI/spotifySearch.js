async function spotifySearch(accessToken, search, setSearchResults) {
    const searchBaseURL = 'https://api.spotify.com/v1/search';
    const queryBase = '?q=';
    const generalSearch = encodeURIComponent(search);
    const type = 'type=track';
    const queryString = `${queryBase}${generalSearch}&${type}`;
    const encodedString = encodeURIComponent(queryString);
    const url = searchBaseURL + queryString;

    try {
      const headers = {
        'Authorization': `Bearer ${accessToken}`
      };
  
      // Await the response of the fetch call, including the headers in the options
      const response = await fetch(url, {
        method: 'GET',
        headers: headers 
      });
  
      // Check if the request was successful
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      // Await the response to be parsed as JSON
      const data = await response.json();
      
      // Do something with the data
      const processedSongs = formatSongs(data);
      setSearchResults(processedSongs);
      
    } catch (error) {
      // Log any errors to the console
      console.error('There was a problem with your fetch operation:', error);
    }
  }

  function formatSongs(json){
    if (json.tracks && json.tracks.items){
        const items = json.tracks.items;
        const songs = items.map((item) =>{
          const rawAlbumUri = item.album.uri;
          const index = rawAlbumUri.lastIndexOf(':') +1;
          const albumUri = rawAlbumUri.slice(index);

          const formatedArtists = item.artists.map((artist) => {
            return {
              name: artist.name,
              id: artist.id
            }
          });

          item.artists.map((artist) => {
            return {
              name: artist.name,
              id: artist.id
            }
          });

          return {
              id: item.id,
              songName: item.name,
              artists: formatedArtists,
              album: item.album.name,
              albumUri: albumUri,
              uri: item.uri
          };
        });

        return songs;

    } else {
        return [];
    }

}

  export default spotifySearch;