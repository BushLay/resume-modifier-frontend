<template>
  <header class="header">
    <nav>
      <div class="logo">
        <img src="../assets/vue.svg" alt="Logo" />
        <h2>Logo</h2>
      </div>
      <ul class="nav-links">
        <li><a href="#home">My Resume</a></li>
        <li><a href="#about">Hot Template</a></li>
        <li><a href="#JobMarket">Job Market</a></li>
        <li><a href="#contact">Profile</a></li>
        <li><img src="../assets/profile-photo.png" alt="Profile Photo" /></li>
        <li><button class="sign-in-btn">Sign In</button></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Head'
}
</script>

<script setup>
// 这里可以添加需要的逻辑
</script>

<style scoped>
.header {
  width: 100%;
  padding: 1rem;
  background-color: #f8f0ff;
  box-sizing: border-box;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  padding: 0 1rem;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo h2 {
  color: #000000;
  margin: 0;
}

.nav-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
}

.nav-links a {
  color: #000000;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  line-height: 42px;
}

.nav-links img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
}

.nav-links a:hover {
  color: #646cff;
}
.sign-in-btn {
  background-color: #646cff;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  /* 阴影 */
  box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.5);
}
</style>