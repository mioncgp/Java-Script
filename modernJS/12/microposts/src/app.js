import { http } from "./http";
import { ui } from "./ui";

document.addEventListener("DOMContentLoaded", getPosts);
document.querySelector(".post-submit").addEventListener("click", submitPosts);
document.querySelector("#posts").addEventListener("click", deletePost);

// get posts and pass them to the UI module
function getPosts() {
  http
    .get("http://localhost:3000/posts")
    .then((data) => ui.showPosts(data))
    .catch((err) => console.log(err));
}

// retrive the values from the input and post the data
function submitPosts() {
  const title = document.querySelector("#title").value;
  const body = document.querySelector("#body").value;
  const data = {
    title,
    body,
  };
  // create post req
  http
    .post("http://localhost:3000/posts", data)
    .then((data) => {
      ui.showAlert("Post added", "alert alert-success");
      ui.clearFields();
      getPosts();
    })
    .catch((err) => console.log(err));
}

// delete post
function deletePost(e) {
  e.preventDefault();
  if (e.target.parentElement.classList.contains("delete")) {
    const id = e.target.parentElement.dataset.id;
    http.delete(`http://localhost:3000/posts/${id}`);
    ui.showAlert("Post Removed", "alert alert-success");
    ui.deletePostFromUI(e.target);
  }
}
