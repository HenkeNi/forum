<template>
  <div>
    <div @click="goToUserProfile" class="container">
      <h2>{{user.username}}</h2>
      <h2>{{user.email}}</h2>
      <h2>{{user.userRole}}</h2>
      <!-- <div class="rapported" v-if="user.isRapported === 1">
        <h2>Rapported!</h2>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
props: ['user', 'index'],  
methods: {
  goToUserProfile() {
    console.log("GO TO PROFILE"); 
    this.$router.push("/"); // TEMPORARY FIX!!
    this.$router.push({ name: 'ProfilePage', params: {user: this.user } });
  }
},
}
</script>

<style scoped>
.container {
  width: 60vw;
  background-color: rgb(44, 56, 61);
  cursor: pointer;
  color: white;
  border: 2px solid black;
  text-align: center;
  margin-bottom: 5px;
}
.container:hover {
  color: rgb(207, 207, 132);
}


.rapported {
  color: red;
}

</style>