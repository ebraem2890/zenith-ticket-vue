<template>
  <HeaderTag />
  <h1>Hello {{ name }}, Welcome on Home Page</h1>
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
        <router-link :to="'/update/' + item.id">Update</router-link>
        <button v-on:click="deleteTicket(item.id)">Delete</button>
      </td>
    </tr>
  </table>
</template>
    <script>
import HeaderTag from "./HeaderTag.vue";
import axios from "axios";
export default {
  name: "AppHome",
  data() {
    return {
      name: "",
      ticket: [],
    };
  },
  components: {
    HeaderTag,
  },
  methods: {
    async loadTickets() {
      try {
        const result = await axios.get("http://localhost:3000/tickets");
        this.ticket = result.data;
      } catch (error) {
        console.error("Error loading tickets:", error);
      }
    },
    async deleteTicket(id) {
      let result = await axios.delete("http://localhost:3000/tickets/" + id);
      console.warn(result);
      if (result.status === 200) {
        alert("Ticket deleted successfully");
        this.loadTickets();
      }
    },
  },
  async mounted() {
    let user = localStorage.getItem("ticketapp_session");
    if (!user) {
      this.$router.push({ name: "SignUp" });
      return;
    }
    let result = await axios.get("http://localhost:3000/tickets");
    this.ticket = result.data;
    this.name = JSON.parse(user).name;
    this.loadTickets();
  },
};
</script>
<style>
td {
  width: 160px;
  height: 40px;
}
</style>