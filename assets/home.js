fetch('./assets/posts.json')
  .then(response => response.json())
  .then(posts => {
    const container = document.getElementById('latest-posts');
    if (!container) return;

    // ✅ GET CATEGORY FROM URL
    const path = window.location.pathname.toLowerCase();
    const category = path.split('/').filter(Boolean).pop(); 
    // Example: /category/blog/ → "blog"

    let filteredPosts = posts;

    // ✅ FILTER ONLY IF CATEGORY PAGE
    if (path.includes('/category/')) {
      filteredPosts = posts.filter(post => {
        if (!post.category) return false;

        if (Array.isArray(post.category)) {
          return post.category.map(c => c.toLowerCase()).includes(category);
        }

        return post.category.toLowerCase() === category;
      });
    }

    // ✅ SORT LATEST FIRST
    filteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

    // ✅ RENDER POSTS
    filteredPosts.forEach(post => {
      const card = document.createElement('div');
      card.className = 'post-card';

      card.innerHTML = `
        <h3>${post.title}</h3>
        <small>${Array.isArray(post.category) ? post.category.join(', ') : post.category || ''}</small>
        <p>${post.excerpt}</p>
        <a href="${post.url}">Read More →</a>
      `;

      container.appendChild(card);
    });

    // ❗ OPTIONAL: SHOW MESSAGE IF EMPTY
    if (filteredPosts.length === 0) {
      container.innerHTML = "<p>No posts found.</p>";
    }

  })
  .catch(err => console.error('Posts load error:', err));
