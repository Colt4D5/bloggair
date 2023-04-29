<script>
  $: blogPosts = []

  const loadPosts = async () => {
    const res = await fetch('/api/posts', {
      method: 'GET'
    })
    const posts = await res.json()
    blogPosts = [...posts]
  }
</script>

<h1>Blog</h1>

<button on:click={loadPosts}>Load Posts</button>

{#each blogPosts as post }
  <h2>{post.title}</h2>
  <p>{post.body.substring(0, 200)}...</p>
{/each}