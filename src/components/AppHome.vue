<template>
    <HeaderTag />
    <h1>Hello {{name}}, Welcome on Home Page</h1>
    <table border="1">
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Contact</td>
            <td>Address</td>
            <td>Actions</td>
        </tr>
        <tr v-for="item in ticket" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.contact }}</td>
            <td>{{ item.address }}</td>
            <td>
                <router-link :to="'/update/' +item.id">Update</router-link>
                <button v-on:click="deleteTicket(item.id)">Delete</button>
            </td>
        </tr>
    </table>
    </template>
    <script>
    import HeaderTag from './HeaderTag.vue'
import axios from 'axios'
    export default {
        name: 'AppHome',
        data(){
            return {
                name: '',
                ticket: []
            }
        },
        components: {
            HeaderTag
        },
        methods: {
           async deleteTicket(id)
            {
                let result = await axios.delete('http://localhost:3000/tickets/'+id);
                console.warn(result)
            }
        },
        async mounted()
        {
            let user = localStorage.getItem("ticketapp_session");
            this.name= JSON.parse(user).name
            if(!user)
              {
                this.$router.push({name: 'SignUp'})
              }
              let result = await axios.get('http://localhost:3000/tickets');
              this.ticket = result.data;
        }
    }
</script>
<style>
td{
    width: 160px;
    height: 40px
}
</style>