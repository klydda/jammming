
async function spotifyAlbum(accessToken, albumUri, setSearchResults) {
    const searchBaseURL = 'https://api.spotify.com/v1/albums/';
    const id = albumUri;
    const url = searchBaseURL + id;

    console.log('spotifyAlbum was called');

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
          
          const formatedArtists = item.artists.map((artist) => {
            return {
              name: artist.name,
              id: artist.id
            }
          });

          return {
            id: item.id,
            songName: item.name,
            artists: formatedArtists,
            album: json.name,
            albumUri: json.id,
          };
        });

        return songs;

    } else {
        return [];
    }

}

export default spotifyAlbum;