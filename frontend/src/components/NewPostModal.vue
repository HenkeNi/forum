<template>
  <div class="modal" v-show="value">
    <div class="form">
      <h2 class="title">New Post</h2>
      <form>
        <div class="input-fields">
          <input required type="text" id="message" name="message" placeholder="Enter message" />
          <br />
        </div>
        <div v-if="showCheckbox">
          <label for="warning">Warning message</label>
          <br />
          <input type="checkbox" id="warning" name="warning" />
        </div>
        <input type="submit" @click="submit" value="Post" />
        <button @click.prevent="close">Close</button>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  name: "newpost-Modal",
  props: {
    value: {
      required: true
    },
    threadId: {
      type: Number
    }
  },
  computed: {
    showCheckbox() {
      let user = this.$store.getters.currentUser;
      if (user) {
        return user.userRole === "admin" || user.userRole === "moderator";
      }
      return false;
    }
  },
  methods: {
    close() {
      document.getElementById("message").value = "";
      this.$emit("myEvent", "input", !this.value);
    },
    async submit(e) {

      e.preventDefault();

      let post = {
        message: document.getElementById("message").value,
        userId: this.$store.getters.currentUser.id,
        threadId: this.threadId,
        published_time: Date.now(),
        warning: 0
      };

      if (this.showCheckbox && document.getElementById("warning").checked === true) {
        post.warning = 1;
      }

      //let res = await this.$store.dispatch("postNewPost", post);

      let res = await fetch("/rest/v1/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
      });
      res = await res.json();
      console.log(res);
      this.close();
    },
  }
};
</script>


<style scoped>
.modal {
  z-index: 1;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  text-decoration: underline;
}

.form {
  width: 40%;
  height: 30%;
  /* padding: 20px 50px 50px; */
  background-color: rgb(186, 187, 183);
  display: flex;
  justify-content: center;
  align-content: center;
  flex-flow: column wrap;
  text-align: center;
}

.input-fields {
  padding-bottom: 30px;
}

.input-fields input {
  width: 100%;
}

.warning {
  color: red;
}
</style>