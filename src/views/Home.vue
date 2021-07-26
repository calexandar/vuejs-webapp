<template>
  <div class="home">
    <BlogPost :post="welcomeScreen"/>
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index"/>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost"
export default {
  name: "Home",
  components: {BlogPost},
  data() {
    return {
      welcomeScreen: {
        title: "Welcome",
        blogPost:
        "Weekly blog article",
        welcomeScreen:true,
        photo: "coding",
      },
      sampleBlogPost: [
        {
          title: "This is Filler",
          blogHTML: "This is a blog title",
          blogCoverPhoto: "beautiful-stories",
        },
         {
          title: "This is Filler",
          blogHTML: "This is a blog title",
          blogCoverPhoto: "designed-for-everyone",
        },
      ],
    };
  },
};
</script>
