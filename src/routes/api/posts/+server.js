import { error } from '@sveltejs/kit';

export async function GET({ url, fetch }) {
  const limit = Number(url.searchParams.get('limit') ?? 10);
  const skip = Number(url.searchParams.get('skip') ?? 0);

  const res = await fetch('/src/lib/posts.json')
  const posts = await res.json()

  console.log(posts)

  return new Response(JSON.stringify(posts));
}