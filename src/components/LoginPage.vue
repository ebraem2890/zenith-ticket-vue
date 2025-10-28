<template>
    <h1>Login</h1>
    <div class="register">
        <input type="text" v-model="email" placeholder="Your Email" />
        <input type="password" v-model="password"  placeholder="Your Password"/>
        <button v-on:click="login">Login</button>
        <p class="link">
            <router-link to="/sign-up">Sign up</router-link>
        </p>
    </div>
    </template>

    <script>
    import axios from 'axios'
    export default {
        name: 'LoginPage',
        data()
        {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
          async login()
            {
                let result = await axios.get(
                    `http://localhost:3000/users?email=${this.email}&password=${this.password}`
                )

                if(result.data.length>0)
                      {
                        localStorage.setItem("ticketapp_session", JSON.stringify(result.data[0]))
                        const exist = result.data.some((item=> item.email===this.email));
                        if(exist){
                        this.$router.push({name: 'HomeView'});
                        }else{
                              alert("User does not exist, kindly Sign up");
                        }
                      } 
                      else{
                        alert("User does not exist, kindly Sign up")
                      }
            }
        },
        mounted()
    {
        let user= localStorage.getItem("ticketapp_session")
        if(user)
          {
            this.$router.push({name: 'HomeView'})
          }
    }

    }
</script>