// Promises
const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

function createPost(post) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      posts.push(post);
      const err = true;
      if (!err) {
        resolve();
      } else {
        reject("there was an error!");
      }
    }, 2000);
  });
}

function getPosts() {
  setTimeout(function () {
    let output = "";
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

// 1 create new append 2 get posts
createPost({ title: "Post three", body: "this is post three" })
  .then(getPosts)
  .catch(function (err) {
    console.log(err);
  });
