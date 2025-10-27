<template>
    <HeaderTag />
    <h1>Welcome on Create Ticket page</h1>
</template>

<script>
    import HeaderTag from "./HeaderTag.vue";
    export default {
        name: 'TicketCreate',
        components: {
            HeaderTag
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