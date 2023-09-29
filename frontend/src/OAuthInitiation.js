// OAuthInitiation.js

import React from "react";

function OAuthInitiation() {
  // const CLIENT_ID = "enrKBx_IRkGeEFzQLotTCw";
  // const REDIRECT_URI = "http://localhost:3000/oauth-callback";
  const AUTHORIZATION_URL = `https://zoom.us/oauth/authorize?response_type=code&client_id=enrKBx_IRkGeEFzQLotTCw&redirect_uri=https%3A%2F%2Fthepurplemango.netlify.app%2Foauth-callback`;

  //zoom.us/oauth/authorize?response_type=code&client_id=enrKBx_IRkGeEFzQLotTCw&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Foauth-callback

  return (
    <div>
      <h2>Connect Your Zoom Account</h2>
      <p>Click the button below to connect your Zoom account:</p>
      <a href={AUTHORIZATION_URL}>Authorize with Zoom</a>
    </div>
  );
}

export default OAuthInitiation;
