const router = require('express').Router();
const request = require('request');

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

module.exports = router;
