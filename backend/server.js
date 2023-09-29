const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

async function exchangeCodeForAccessToken(authorizationCode) {
  const clientId = "enrKBx_IRkGeEFzQLotTCw";
  const clientSecret = "ojEprnFT5DfTuolQcXm2koiQ3ptugRzK";
  const redirectUri = "http://localhost:3000/oauth-callback";

  const tokenUrl = "https://zoom.us/oauth/token";

  const requestBody = {
    grant_type: "authorization_code",
    code: authorizationCode,
    redirect_uri: redirectUri,
  };

  const authHeader = {
    Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString(
      "base64"
    )}`,
  };

  try {
    const response = await axios.post(tokenUrl, requestBody, {
      headers: authHeader,
    });
    return response.data;
  } catch (error) {
    console.error("Error exchanging code for access token:", error);
    throw error;
  }
}

app.get("/", (req, res) => {
  res.send({ message: "Hello Home!" });
});

app.get("/api/hello", (req, res) => {
  res.send({ message: "Hello from server!" });
});

app.get("/oauth/callback", async (req, res) => {
  // Handle the OAuth callback here
  const authorizationCode = req.query.code;
  const tokenResponse = await exchangeCodeForAccessToken(authorizationCode);
  const accessToken = tokenResponse.access_token;

  res.send("OAuth callback complete. You can close this window.");
});

app.get("/get-access-token", (req, res) => {
  const accessToken = "your-access-token";
  res.json({ accessToken });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
