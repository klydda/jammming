async function spotifySearch(accessToken, search, setSearchResults) {
    const searchBaseURL = 'https://api.spotify.com/v1/search';
    const queryBase = '?q=';
    const generalSearch = encodeURIComponent(search);
    const type = 'type=track';
    const queryString = `${queryBase}${generalSearch}&${type}`;
    const encodedString = encodeURIComponent(queryString);
    const url = searchBaseURL + queryString;

    console.log(url);

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
      console.log(data);
      
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
          let artists = '';
          
          item.artists.forEach((artist, index) => {
            return artists = artists += ', ' + artist.name;
          });

          artists = artists.slice(2, artists.length); //Removes first to characters, which are always ', '.

          return {
              id: item.id,
              songName: item.name,
              artist: artists,
              album: item.album.name,
              uri: item.uri
          };
        });

        return songs;

    } else {
        return [];
    }

}

  export default spotifySearch;