class EasyHTTP {
    // get data
    async get() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = response.json();
        return data;
    }

    // post data
    async post(url, newData) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newData)
        });

        const data = await response.json();
        return data;
    }

    // Update data
    async put(url, newData) {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newData)
        });

        const data = await response.json();
        return data;
    };


    async delete(url) {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        });

        const data = await 'Deleted';
        return data;
    }
}

