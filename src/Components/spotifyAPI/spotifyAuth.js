const client_id = '88ae3e12bdf1469d8cd50cec3ecb2172';
const redirect_uri = 'http://localhost:3000/';

const scope = 'user-read-private user-read-email playlist-modify-public playlist-modify-private';

let url = 'https://accounts.spotify.com/authorize';
url += '?response_type=token';
url += '&client_id=' + encodeURIComponent(client_id);
url += '&scope=' + encodeURIComponent(scope);
url += '&redirect_uri=' + encodeURIComponent(redirect_uri);

console.log(url);

export function redirectToAuth(){
    window.location = url;
}

export function extractToken(){
    const currentURL = window.location.href;

    //Extract token
    const match = currentURL.match(/access_token=([^&]*)/);
    const token = match ? match[1] : null;

    console.log('Token in extractToken: ' + token);
    
    return token;
}



