<script>
  $: blogPosts = []

  const loadPosts = async () => {
    const res = await fetch('/api/posts', {
      method: 'GET'
    })
    const posts = await res.json()
    blogPosts = posts
  }

  const addPost = async (e) => {
    const formData = new FormData(e.target)
    const title = formData.get('title')
    const content = formData.get('content')
    const res = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({title, content})
    })
    document.querySelector('form input#title').value = ''
    document.querySelector('form textarea#content').value = ''
  }
</script>

<h1>Blog</h1>

<form on:submit|preventDefault={addPost}>
  <input type="text" name="title" id="title" placeholder="Post title...">
  <textarea name="content" id="content" cols="30" rows="5" placeholder="Post Content..."></textarea>
  <button type="submit">Add Post</button>
</form>

<button on:click={loadPosts}>Load Posts</button>

{#each blogPosts as post (post.id) }
  <h2>{post.title}</h2>
  <p>{@html post.content.substring(0, 200)}...</p>
{/each}
