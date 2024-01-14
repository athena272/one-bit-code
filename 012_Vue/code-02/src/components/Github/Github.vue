<script>
export default {
    data() {
        return {
            login: 'johndoe',
            name: 'John Doe',
            bio: '...',
            company: 'Acme Inc.',
            avatar_url: 'https://unsplash.it/256',
            searchInput: ''
        }
    },
    methods: {
        async fetchGithubUser() {
            const res = await fetch(`https://api.github.com/users/${this.searchInput}`)
            const { login, name, bio, company, avatar_url } = await res.json()

            this.login = login
            this.name = name
            this.bio = bio
            this.company = company
            this.avatar_url = avatar_url
        }
    }
}
</script>


<template>
    <h2>GitHub User Data</h2>
    <input type="text" v-model="searchInput">
    <button v-on:click="fetchGithubUser">Carregar Usuário</button>
    <img v-bind:src="avatar_url">
    <strong>@{{ login }}</strong>
    <h1>{{ name }}</h1>
    <h2>{{ company }}</h2>
    <span>{{ bio }}</span>
</template>

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    background-color: #1c1a1d;
    color: #e5e5e5;
}

#app {
    font-family: 'Ubuntu', sans-serif;
    min-height: 100vh;
    max-width: 40rem;
    margin: 0 auto;
    text-align: center;
}

img {
    border: 1px solid #e5e5e5;
    border-radius: 999px;
    display: block;
    margin: 1rem auto;
    width: 8rem;
    height: 8rem;
}

h1,
h2 {
    color: #f64348;
    margin: 1rem auto .25rem;
}

h3 {
    margin: 1rem auto .25rem;
}

span {
    display: block;
    margin: 1rem auto;
}

input,
button {
    max-width: 20rem;
    padding: .5rem;
}

input {
    background-color: #1c1a1d;
    border: 1px solid #f64348;
    border-radius: .25rem;
    color: #e5e5e5;
    margin: 1rem 1rem 1rem 0;
}

button {
    background-color: #f64348;
    border: unset;
    border-radius: .25rem;
    color: #1c1a1d;
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
}

button:hover {
    cursor: pointer;
    filter: brightness(0.95);
}

a {
    color: #f64348;
}
</style>