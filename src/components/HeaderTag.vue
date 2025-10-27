<template>
    <div class="nav">
        <h2>Zenith Ticket</h2>
        <router-link to="/home">Home</router-link>
        <router-link to="/create">Create Ticket</router-link>
        <router-link to="/update">Update Ticket</router-link>
        <a v-on:click="logout" href="#">Logout</a>
    </div>
    </template>
    <script>
    export default{
        name: 'HeaderTag',
        methods: {
            logout()
            {
                localStorage.clear();
                this. $router.push({name:'LoginPage'})
            }
        }
    }
</script>
<style>
.nav {
    background: white;
    width: 100%;
    height: 100px;
    overflow: hidden;
}
.nav h2{
    font-size: 24px;
    float: left;
    margin-left: 15px;
    margin-top: 30px;
}
.nav router-link, a {
    float: right;
    color: #111;
    padding: 14px 14px;
    text-align: center;
    text-decoration: none;
    margin-right: 5px;
    margin-top: 20px;
}
.nav router-link, a:hover{
    background: #ff6600;
}
</style>