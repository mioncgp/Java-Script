class UI {
  constructor() {
    this.post = document.querySelector("#posts");
    this.titleInput = document.querySelector("#title");
    this.bodyInput = document.querySelector("#body");
    this.idInput = document.querySelector("#id");
    this.postSubmit = document.querySelector(".post-submit");
    this.forState = "add";
  }

  // Show all posts
  showPosts(posts) {
    let output = "";

    posts.forEach((post) => {
      output += `
            <div class="card mb-3">
              <div class="card-body">
                <h4 class="card-title">${post.title}</h4>
                <p class="card-text">${post.body}</p>
                <a href="#" class="edit card-link" data-id="${post.id}">
                  <i class="fa fa-pencil"></i>
                </a>
                <a href="#" class="delete card-link" data-id="${post.id}">
                <i class="fa fa-remove"></i>
              </a>
              </div>
            </div>
          `;
    });
    this.post.innerHTML = output;
  }
  showAlert(message, className) {
    // create alert element
    const div = document.createElement("div");
    // add class to the element
    div.className = className;
    // create text node for the element
    div.appendChild(document.createTextNode(message));
    // select the main container
    const container = document.querySelector(".postsContainer");
    // select the element before which append
    const posts = document.querySelector("#posts");
    // append the alert before posts
    container.insertBefore(div, posts);
    // remove the alets after certain time
    setTimeout(() => {
      this.clearAlert();
    }, 1000);
  }

  clearAlert() {
    // select the current alert
    const currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  clearFields() {
    // clear all the iunputs after typed
    this.titleInput.value = "";
    this.bodyInput.value = "";
  }

  deletePostFromUI(post) {
    if (post.classList.contains("fa-remove")) {
      post.parentNode.parentNode.parentNode.remove();
    }
  }
}

export const ui = new UI();
