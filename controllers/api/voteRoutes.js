const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/:id', withAuth, async (req, res) => {
  try {
    const likeData = await Post.update(req.params.id, {
        where: {
            vote: req.body.vote
        }
    });
    res.status(200).json(likeData)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/:id', withAuth, async (req, res) => {
  try {
    const dislikeData = await Post.update(req.params.id, {
        where: {
            vote: req.body.vote
        }
    });

    res.status(200).json(dislikeData)
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router