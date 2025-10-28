<template>
  <h1>Sign Up</h1>
  <div class="register">
    <input type="text" v-model="name" placeholder="Your Name" />
    <input type="text" v-model="email" placeholder="Your Email" />
    <input type="password" v-model="password" placeholder="Your Password" />
    <button v-on:click="signUp">Sign Up</button>
    <div class="link">
      <router-link to="/log-in">Login</router-link>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      console.log("PAYLOAD CHECK");
      console.log("Name:", this.name);
      console.log("Email:", this.email);
      console.log(
        "Password:",
        this.password ? "Set (" + this.password.length + " chars)" : "Empty"
      );
      console.log("---------------------");
      let result = await axios.post("http://localhost:3000/users", {
        email: this.email,
        password: this.password,
        name: this.name,
      });
      console.warn(result);
      if (result.status) {
        localStorage.setItem("ticketapp_session", JSON.stringify(result.data));
        this.$router.push({ name: "HomeView" });
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("ticketapp_session");
    if (user) {
      this.$router.push({ name: "HomeView" });
    }
  },
};
</script>
<style>
.link {
  display: flex;
  color: #ff6600;
  margin: 10px;
  padding: 10px 40px;
  margin-left: 320px;
  width: 100%;
}
</style>