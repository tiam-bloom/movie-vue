<template>
  <footer class="footer">
    <!-- Footer links -->
    <ul class="nav">
      <li><a href="#">关于</a></li>
      <li><a href="#">博客</a></li>
      <li><a href="#">网站</a></li>
    </ul>
    <!-- Copyright footnote -->
    <span class="copyright">&copy; 2023-5-12 电影大全网站版权所有</span>
  </footer>
</template>

<script setup>

</script>

<style scoped>
.footer {
  background-image: linear-gradient(to right, #ccc, white);
  /* background-color: #ccc; */
  padding: 100px 0 50px;
}

.nav {
  display: flex;
  list-style: none;
  justify-content: center;
}

.nav>li+li {
  margin-left: 30px;
}

li>a {
  text-decoration: none;
}

.copyright {
  display: flex;
  justify-content: center;
}
</style>