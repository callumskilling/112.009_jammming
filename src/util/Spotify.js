const client_id = '';
const redirect_uri = 'http://localhost:3000';

let accessToken;
export class Spotify extends React.Component {
    getAccessToken() {
        let URL = window.location.href
        if (accessToken) {
            return accessToken;
        }

        // check for access token match
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        if (accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            //Clear the parameters from the URL, so the app doesn’t try grabbing the access token after it has expired
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken
        } else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id-${client_id}&response_type=token&scope-playlist
            modify-public&redirect_uri=${redirect_uri}`;
            window.location = accessUrl;
        }
    }
}