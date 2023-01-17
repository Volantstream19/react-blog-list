import { React, checkError, client } from 'react';

export async function getBlogs() {
  const resp = await client.from('blogs').select('*');
  return checkError(resp);
}
