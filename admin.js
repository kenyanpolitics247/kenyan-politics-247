let featured = JSON.parse(localStorage.getItem("featured")) || [];
let videos = JSON.parse(localStorage.getItem("videos")) || [];

function addNews() {
  const title = document.getElementById("title").value;
  const image = document.getElementById("image").value;
  const category = document.getElementById("category").value;

  if (!title || !image) {
    alert("Headline and image required");
    return;
  }

  featured.unshift({ title, image, category });
  localStorage.setItem("featured", JSON.stringify(featured));

  alert("Article published successfully");
}

function addVideo() {
  const video = document.getElementById("video").value;
  if (!video) return alert("Video URL required");

  videos.unshift(video);
  localStorage.setItem("videos", JSON.stringify(videos));

  alert("Video published successfully");
}

function clearAll() {
  if (confirm("Are you sure? This will delete all content.")) {
    localStorage.clear();
    alert("All content cleared");
  }
}
