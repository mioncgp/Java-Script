class Github {
    constructor(client_id, client_secret, repos_count, repos_sort) {
        this.client_id = client_id;
        this.client_secret = client_secret;
        this.repos_count = repos_count;
        this.repos_sort = repos_sort;
    }

    async getUser(user) {

        

        const response = await fetch(`https://api.github.com/users/${user}?cliend_id${this.client_id}&${this.client_secret}`);

        if(response === 404) {
            console.log('lol')
        }
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}cliend_id${this.client_id}&${this.client_secret}`);

        const profile = await response.json();

        const repos = await reposResponse.json();

        return {
            profile,
            repos
        };
    }
}

// fix bug
// hide api keys