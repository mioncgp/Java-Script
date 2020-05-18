class EasyHTTP {
    // get data
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
            .then(err => reject(err));
        })
    }

    // post data
    post(url, newData) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(newData)
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
    }

    // Update data
    put(url, newData) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(newData)
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
    }

    delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(() => resolve('Deleted'))
            .catch((err) => reject(err));
        });
    }
}

document.querySelector('#player').remove()