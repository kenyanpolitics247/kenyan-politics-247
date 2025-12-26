const featured = JSON.parse(localStorage.getItem("featured")) || [];
const videos = JSON.parse(localStorage.getItem("videos")) || [];

const featuredContainer = document.getElementById("featured-news");
featured.forEach(item => {
  featuredContainer.innerHTML += `
    <article class="card">
      <img src="${item.image}">
      <h3>${item.title}</h3>
      <span class="tag">${item.category}</span>
    </article>
  `;
});

const videoContainer = document.getElementById("video-news");
videos.forEach(video => {
  videoContainer.innerHTML += `
    <iframe src="${video}" allowfullscreen></iframe>
  `;
});
