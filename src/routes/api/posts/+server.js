import mysql from 'mysql2/promise'
import { error } from '@sveltejs/kit';

const connection = await mysql.createConnection({
  host:'localhost', 
  user: 'root', 
  password: 'Muffinita1',
  database: 'blogai'
});

export async function GET({ url, fetch }) {
  const limit = Number(url.searchParams.get('limit') ?? 10);
  const skip = Number(url.searchParams.get('skip') ?? 0);

  const sql = 'SELECT * FROM posts'
  const [rows, fields] = await connection.execute(sql);

  return new Response(JSON.stringify(rows));
}

export async function POST({ request, fetch }) {
  const { title, content } = await request.json()

  // const html = post.split('\n').filter(line => String(line).length > 0).map(line => `<p>${line}</p>`).join('')
  
  // const postObj = {
  //   "title": "",
  //   "body": "",
  //   "tags": [],
  //   "reactions": 2
  // }

  const sql = 'INSERT INTO posts (title, content, tags, likes) VALUES (?, ?, ?, ?);'
  const [rows, fields] = await connection.execute(
    sql, 
    [title, content, 'ai, python', 0]
  );

  return new Response(JSON.stringify({ status: 201, msg: 'Success!!'}))
}