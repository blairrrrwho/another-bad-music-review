const router = require('express').Router();
const axios = require('axios');

const client_id = 'f1135d99729746f1a131d1106e8fc9a0';
const client_secret = '89fd130d397f4927a45cf692bd09f32d';

// Authenticate your requests
axios({
  method: 'post',
  url: 'https://accounts.spotify.com/api/token',
  params: {
    grant_type: 'client_credentials',
  },
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64'),
  },
})
.then(response => {
  const access_token = response.data.access_token;

  // Make a request to get album cover art
  axios({
    method: 'get',
    url: 'https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy',
    headers: {
      'Authorization': 'Bearer ' + access_token,
    },
  })
  .then(response => {
    const album_cover = response.data.images[0].url;
    console.log(album_cover);
  })
  .catch(error => {
    console.error(error);
  });
})
.catch(error => {
  console.error(error);
});

router.get('/albumcover/:artist/:album', async (req, res) => {
  try {
    const { artist, album } = req.params;
    const response = await axios.get(`https://api.spotify.com/v1/search?q=${album}+artist:${artist}&type=album&limit=1`, {
      headers: {
        Authorization: `Bearer YOUR_ACCESS_TOKEN_HERE`
      }
    });
    const imageUrl = response.data.albums.items[0].images[0].url;
    res.send(`<img src="${imageUrl}" alt="${album} album cover">`);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving album cover');
  }
});