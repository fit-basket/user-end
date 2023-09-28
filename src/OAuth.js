// OAuth.js

import React, { useEffect } from "react";

function OAuth() {
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const code = queryParams.get("code");

    if (code) {
      // You have received an OAuth code, now exchange it for an access token.
      exchangeCodeForAccessToken(code);
    }
  }, []);

  const exchangeCodeForAccessToken = async (code) => {
    const CLIENT_ID = "enrKBx_IRkGeEFzQLotTCw";
    const CLIENT_SECRET = "ojEprnFT5DfTuolQcXm2koiQ3ptugRzK";
    const REDIRECT_URI = "http://localhost:3000/oauth-callback";

    const authData = {
      grant_type: "authorization_code",
      code,
      redirect_uri: REDIRECT_URI,
    };

    const headers = {
      Authorization: `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
      "Content-Type": "application/x-www-form-urlencoded",
    };

    try {
      const response = await fetch("https://zoom.us/oauth/token", {
        method: "POST",
        headers,
        body: new URLSearchParams(authData),
      });

      const data = await response.json();
      const accessToken = data.access_token;
      console.log("Access Token:", accessToken);

      // You can now use the access token for authenticated API requests.
    } catch (error) {
      console.error("Error exchanging code for access token:", error);
    }
  };

  return (
    <div>
      <h2>OAuth Handling</h2>
      {/* Add UI elements here if needed */}
    </div>
  );
}

export default OAuth;
