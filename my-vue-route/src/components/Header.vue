<template>
  <ul class="nav nav-pills">
    <router-link :to="{name: 'Home'}" tag="li" active-class="active"><a>Home</a></router-link>
    <router-link :to="{name: 'User'}" tag="li" active-class="active"><a>User</a></router-link>
  </ul>
</template>
