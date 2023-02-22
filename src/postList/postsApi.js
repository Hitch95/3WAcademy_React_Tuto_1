const URL = "https://jsonplaceholder.typicode.com";

async function findAll() {
  const response = await fetch(`${URL}/posts`);
  return await response.json();
}

async function remove(id) {
  await fetch(`${URL}/posts/${id}`, {
    method: 'DELETE',
  });
}

async function update(post) {
  console.log(post.id); // add this line to check the value of post.id
  const response = await fetch(`${URL}/posts/${post.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  });
  console.log('Response:', response);
  return await response.json();
}

export default {
  findAll,
  remove,
  update
};
