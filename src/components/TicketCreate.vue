<template>
    <HeaderTag />
    <h1>Welcome on Create Ticket page</h1>
    <form class="add">
        <input type="text" name="name" placeholder="Enter Name" v-model="ticket.name" />
        <input type="text" name="address" placeholder="Enter Address" v-model="ticket.address" />
        <input type="text" name="name" placeholder="Enter contact" v-model="ticket.contact" />
        <button type="button" v-on:click="createTicket" >Create</button>
    </form>
</template>

<script>
    import HeaderTag from "./HeaderTag.vue";
    import axios from 'axios'
    export default {
        name: 'TicketCreate',
        components: {
            HeaderTag
        },
        data()
        {
            return {
                ticket :{
                    name:'',
                    address: '',
                    contact: ''
                }
            }
        },
        methods:{
           async  createTicket()
            {
                const result = await axios.post("http://localhost:3000/tickets", {
                    name:this.ticket.name,
                    address:this.ticket.address,
                    contact:this.ticket.contact
                });
                if(result.status)
                {
                    this.$router.push({name: 'AppHome'})
                }
                    console.warn(result) 
            }
        },
        mounted()
        {
            let user = localStorage.getItem("ticketapp_session");
            if(!user)
              {
                this.$router.push({name: 'SignUp'})
              }
        }
    }
</script>