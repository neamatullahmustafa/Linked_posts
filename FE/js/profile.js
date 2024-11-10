async function loadUserPosts() {
  const postsContainer = document.getElementById("postsContainer");
  const username = document.getElementById("username");
  const bio = document.getElementById("bio");
  const profile = document.getElementById("profile");
  const cover = document.getElementById("cover");

  try {
    const uid = localStorage.getItem("userId");
    const response = await fetch(
      `http://localhost:5000/posts/userPosts/${uid}`
    );
    const data = await response.json();

    if (response.ok) {
      let postsDisplay = ``;

      bio.innerHTML = data.user.bio;
      username.innerHTML = data.user.username;
      profile.src = data.user.profile;
      cover.src = data.user.cover;
      data.posts.forEach((post) => {
        console.log(post);
        postsDisplay += `
            <div class="col-md-7 card p-4 auto">
              <div class="post">
                <div class="media">
                  <img src="images/${
                    post?.gender === 1 ? "man" : "woman"
                  }.jpg" width="60" class="mr-3" alt="...">
                  <div class="media-body">
                    <h5 class="mt-0">${data.user.username}</h5>
                    ${new Date(post?.createdAt).getTime()}
                  </div>
                </div>
                <hr>
                <h3>${post?.title}</h3>
                <p class="pt-4">${post?.description}</p>
              </div>
            </div>
          `;
      });

      postsContainer.innerHTML = postsDisplay;
    } else {
      postsContainer.innerHTML = `<p class="text-danger">Failed to load posts.</p>`;
    }
  } catch (error) {
    console.error("Error:", error);
    postsContainer.innerHTML = `<p class="text-danger">Error loading posts.</p>`;
  }
}

window.onload = loadUserPosts;
