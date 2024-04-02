async function spotifyUser(accessToken) {
    try {
      const headers = {
        'Authorization': 'Bearer ' + accessToken,
      };
  
      // Await the response of the fetch call, including the headers in the options
      const response = await fetch('https://api.spotify.com/v1/me', {
        method: 'GET', // GET is the default method, so this is optional
        headers: headers // Pass the plain object directly
      });
  
      // Check if the request was successful
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      // Await the response to be parsed as JSON
      const data = await response.json();
      // Do something with the data
      console.log(data);
      return data;
    } catch (error) {
      // Log any errors to the console
      console.error('There was a problem with your fetch operation:', error);
    }
  }

  export default spotifyUser;