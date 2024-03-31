const client_id = '88ae3e12bdf1469d8cd50cec3ecb2172';
const redirect_uri = 'http://localhost:3000/';

const scope = 'user-read-private user-read-email';

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
    const tokenStringStartIndex = currentURL.indexOf('=') +1;
    const tokenStringEndIndex = currentURL.indexOf('&');
    const token = currentURL.slice(tokenStringStartIndex, tokenStringEndIndex);

    return token;
}



