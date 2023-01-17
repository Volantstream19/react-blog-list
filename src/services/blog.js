import { checkError, client } from './client';

export async function getBlogs() {
  const resp = await client.from('blogs').select('*');
  console.log(resp);
  return checkError(resp);
}
