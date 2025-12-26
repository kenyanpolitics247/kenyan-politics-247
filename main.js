fetch("data/news.json")
  .then(response => response.json())
  .then(data => {

    // Featured News
    const featuredContainer = document.getElementById("featured-news");
    data.featured.forEach(item => {
      featuredContainer.innerHTML += `
        <article class="card">
          <img src="${item.image}" alt="${item.title}">
          <h3>${item.title}</h3>
          <span class="tag">${item.category}</span>
        </article>
      `;
    });

    // Trending News
    const trendingContainer = document.getElementById("trending-news");
    data.trending.forEach(news => {
      trendingContainer.innerHTML += `<li>🔺 ${news}</li>`;
    });

    // Videos
    const videoContainer = document.getElementById("video-news");
    data.videos.forEach(video => {
      videoContainer.innerHTML += `
        <iframe src="${video}" allowfullscreen></iframe>
      `;
    });

  })
  .catch(error => console.error("News loading error:", error));
