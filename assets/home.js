fetch('./assets/posts.json')
  .then(response => response.json())
  .then(posts => {
    const container = document.getElementById('latest-posts');
    if (!container) return;

    posts.forEach(post => {
      const card = document.createElement('div');
      card.className = 'post-card';

      card.innerHTML = `
        <h3>${post.title}</h3>
        <small>${post.category || ''}</small>
        <p>${post.excerpt}</p>
        <a href="${post.url}">Read More →</a>
      `;

      container.appendChild(card);
    });
  })
  .catch(err => console.error('Posts load error:', err));
