
async function newPlayList(userId, name, accessToken, songs){
    console.log('Songs in newPlaylist: ');
    console.log(songs);
    const uris = extractUris(songs);
    console.log('Uris in newPlaylist: ' + uris);
    const playlistId = await createPlaylist(userId, name, accessToken);
    addSongs(uris, accessToken, playlistId);
}

function extractUris(songs){
    return songs.map((song) => song.uri);
}

async function createPlaylist(userId, name, accessToken) {

    //Create url
    const url = `https://api.spotify.com/v1/users/${userId}/playlists`

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + accessToken
    };

    const data = {
        name: name,
        public: false
    }
  
    console.log(`Requesting URL: ${url} with headers:`, headers, `and body:`, data);

    try {
      const response = await fetch(url, {
        method: 'POST', 
        headers: headers,
        body: JSON.stringify(data)
      });
  
      // Check if the request was successful
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      // Parses JSON response into native JavaScript objects
      //return await response.json();
      const responseJson = await response.json();

      console.log(responseJson);

      return responseJson.id; //Sets playlistId

    } catch (error) {
      console.error('Error:', error);
      // Handle errors or rejections here
    }
  }

  async function addSongs(uris, accessToken, playlistId) {

    //Create url
    const url = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + accessToken
    };

    const data = {
        uris: uris
    }
  
    console.log(`Requesting URL: ${url} with headers:`, headers, `and body:`, data);

    try {
      const response = await fetch(url, {
        method: 'POST', 
        headers: headers,
        body: JSON.stringify(data)
      });
  
      // Check if the request was successful
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      // Parses JSON response into native JavaScript objects
      //return await response.json();
      const responseJson = await response.json();

    } catch (error) {
      console.error('Error:', error);
      // Handle errors or rejections here
    }
  }

  export default newPlayList;