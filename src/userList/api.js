const URL = 'https://jsonplaceholder.typicode.com/users'

async function findAll () {
  const result = await fetch(URL)

  return result.json()
}

async function update(user) {
    try {
        const response = await fetch(`${URL}/${user.id}`, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        return response.json()
    } catch (error) {
        console.error(error)
        throw error
    }
}

async function remove(id) {
    try {
        await fetch(`${URL}/${id}`, {
            method: 'DELETE',
        });
    } catch (error) {
        console.error(error)
        throw error
    }
}

export default {
    findAll,
    update,
    remove
}
