const router = require('express').Router();

router.get("/fetch", async (req, res) => {
	try {
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': '91555f1f00msh06eeb81671ccbb7p167bf4jsn21e60eb52bdf',
				'X-RapidAPI-Host': 'theaudiodb.p.rapidapi.com'
			}
		};
		
		const data = await fetch('https://theaudiodb.p.rapidapi.com/discography.php?s=drake', options)
		const response = data.json()
		res.status(200).json({
			message: "hello"
		}
		)
		
		
	} catch (error) {
		res.status(500).json({
			message: error
		})
		
	}
})

module.exports = router;    