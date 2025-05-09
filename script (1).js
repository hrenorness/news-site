// Fetch and display articles from articles.json
const API_URL = '../data/articles.json';
const container = document.getElementById('articles-container');

async function fetchArticles() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Network response was not ok');
    const articles = await response.json();
    
    articles.forEach(article => {
      const articleHTML = `
        <div class="w3-col m4 w3-margin-bottom">
          <article class="w3-card-4 w3-hover-shadow article-card w3-animate-zoom">
            <img src="${article.image}" alt="${article.title}" class="w3-image" loading="lazy">
            <div class="w3-padding">
              <h3>${article.title}</h3>
              <p class="w3-opacity">By ${article.author} | ${article.date}</p>
              <p>${article.summary}</p>
              <button class="w3-button w3-blue">Read More</button>
            </div>
          </article>
        </div>
      `;
      container.insertAdjacentHTML('beforeend', articleHTML);
    });
  } catch (error) {
    console.error('Failed to load articles:', error);
    container.innerHTML = `<p class="w3-text-red">Error loading articles. Please try again later.</p>`;
  }
}

fetchArticles();