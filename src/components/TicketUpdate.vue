<template>
    <HeaderTag />
    <h1>Welcome on Update Ticket page</h1>
    <form class="add">
        <input type="text" name="name" placeholder="Enter Name" v-model="ticket.name" />
        <input type="text" name="address" placeholder="Enter Address" v-model="ticket.address" />
        <input type="text" name="name" placeholder="Enter contact" v-model="ticket.contact" />
        <button type="button" v-on:click="updateTicket" >Update</button>
    </form>
</template>

<script>
    import HeaderTag from "./HeaderTag.vue";
    import axios from 'axios'
    export default {
        name: 'TicketUpdate',
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
        methods: {
            async updateTicket()
            {
                console.warn(this.ticket)
                const result = await axios.put('http://localhost:3000/tickets/'+this.$route.params.id, {
                    name:this.ticket.name,
                    address:this.ticket.address,
                    contact:this.ticket.contact
                });
                if(result.status)
                {
                    this.$router.push({name: 'AppHome'})
                }
            }
        },
        async mounted()
        {
            let user = localStorage.getItem("ticketapp_session");
            if(!user)
              {
                this.$router.push({name: 'SignUp'})
              }
                try{
                      const result = await axios.get('http://localhost:3000/tickets/'+this.$route.params.id)
              console.warn(result.data)
            //   this.ticket=result.data
                }catch(e){
                    //
                }
            
        }
    }
</script>