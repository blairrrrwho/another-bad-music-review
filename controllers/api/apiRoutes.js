const router = require('express').Router();

const request = require('request');

router.get('/albums', async (req, res) => {
  try {
    const artist = req.params.artist;
    const album = req.params.album;
    const API_KEY = '91555f1f00msh06eeb81671ccbb7p167bf4jsn21e60eb52bdf';

    const options = {
      method: 'GET',
      url: 'https://theaudiodb.p.rapidapi.com/searchalbum.php',
      qs: { s: artist, a: album },
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': 'theaudiodb.p.rapidapi.com',
        'useQueryString': true
      }
    };

    request(options, function (error, response, body) {
      if (error) {
        console.error(error);
        res.status(500).send('An error occurred while fetching the album data.');
        return;
      }

      if (response.statusCode !== 200) {
        console.error(`Unexpected status code: ${response.statusCode}`);
        res.status(500).send('An error occurred while fetching the album data.');
        return;
      }

      const data = JSON.parse(body);

      // Handle cases where no album is found
      if (!data.album) {
        res.status(404).send('Album not found');
        return;
      }

      const albumData = data.album[0];
      const albumCover = albumData.strAlbumThumb;

      // Send album cover image URL as response
      res.send(albumCover);
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while fetching the album data.');
  }
});

module.exports = router;
