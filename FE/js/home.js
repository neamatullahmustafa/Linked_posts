let allPosts = [];

fetch("http://localhost:5000/posts/allPosts")
  .then((response) => response.json())
  .then((json) => {
    allPosts = json.posts;
    displayAllPosts();
  });

function displayAllPosts() {
  let allPostsDisplay = ``;
  console.log(allPosts);
  for (let i = 0; i < allPosts.length; i++) {
    allPostsDisplay += `   <div class="col-md-7  card p-4 auto">
                <div class="post">
                    <div class="media">
                        <img src="images/${
                          allPosts[i].gender === 1 ? "man" : "woman"
                        }.jpg" width="60" class="mr-3" alt="...">
                        <div class="media-body">
                            <h5 class="mt-0">${allPosts[i].username}</h5>
                         ${moment(new Date(allPosts[i].createdAt).getTime())}
                        </div>
                    </div>
                    <hr>
                    <h3>${allPosts[i].title}</h3>
                    <p class="pt-4">${allPosts[i].description}</p>
                </div>
            </div>`;
  }
  document.getElementById("AllPosts").innerHTML = allPostsDisplay;
}

document.getElementById("submitPostButton").addEventListener("click", () => {
  const title = document.getElementById("postTitle").value;
  const description = document.getElementById("postDescription").value;

  if (!title || !description) {
    alert("Please fill in both the title and description.");
    return;
  }
  fetch("http://localhost:5000/posts/addPost", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      description: description,
      user_id: localStorage.getItem("userId"),
    }),
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);

      if (json.message === "Post added successfully") {
        alert("Post created successfully!");
        $("#exampleModal").modal("hide");

        fetch("http://localhost:5000/posts/allPosts")
          .then((response) => response.json())
          .then((json) => {
            allPosts = json.posts;
            displayAllPosts();
          });
      } else {
        alert("Error creating post.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Error creating post.");
    });
});
