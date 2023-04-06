const router = require(".");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '91555f1f00msh06eeb81671ccbb7p167bf4jsn21e60eb52bdf',
		'X-RapidAPI-Host': 'theaudiodb.p.rapidapi.com'
	}
};

fetch('https://theaudiodb.p.rapidapi.com/discography.php?s=drake', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

module.exports = router;    