<template>
  <div class="post-list">
    <PostListItem 
      v-for="post in posts"
      :key = "post.id"
      :post="post"
      :thread="thread"
    />
  </div>  
</template>

<script>
import PostListItem from './PostListItem.vue';

export default {
   components: {
    PostListItem,
  },
  props: ['posts', 'thread'], 
  methods: {
    reload() {
      this.$parent.fetchPosts();
    },
    passQuotedPost(post) {
      this.$parent.setQuotedPost(post);
    }
  },
}
</script>


<style scoped>

.post-list {
  top: 0px;
  /* height: 100vh; */
  background-color: gray;
  text-align: center;
  display: flex;
  justify-content: flex-start;
  align-content: center;
  flex-direction: column;
  margin-bottom: 10px;
}

</style>