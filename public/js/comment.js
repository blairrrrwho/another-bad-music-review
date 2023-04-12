
console.log("ready to post a comment to a post");

const newCommentBtn = document.getElementById("comment");

newCommentBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  const comment_body = document.getElementById("comment-name").value;

  console.log(comment_body);

  const url = window.location.href;
  const data = url.split("/");
  const post_id = data[data.length - 1];

  console.log(post_id);

  await fetch("/api/comment", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      comment_body: comment_body,
      post_id: post_id,
    }),
  }).then((res) => {
    console.log(res);
    if (res.status == 200) {
      window.location.href = `/post/${post_id}`;
    }
  });
});

var like = document.querySelector(".like")
var dislike = document.querySelector(".dislike")

like.addEventListener("click", async(e) => {
  e.preventDefault()

  console.log("liked")

  var likeValue = document.querySelector(".like").value
  console.log(likeValue)

  const url = window.location.href;
  const data = url.split("/");
  const post_id = data[data.length - 1];

  await fetch("/api/vote", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      vote: likeValue,
      post_id: post_id,
    }),
  }).then((res) => {
    console.log(res);
    if (res.status == 200) {
      window.location.href = `/post/${post_id}`;
    }
  });

})

dislike.addEventListener("click", async(e) => {
  e.preventDefault()

  console.log("disliked")

})