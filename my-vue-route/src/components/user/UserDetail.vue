<template>
  <div class="">
    <h3>Some User Details</h3>
    <p>User loaded has ID: {{ $route.params.id }}</p>
    <router-link
      tag="button"
      :to="{name: 'UserEdit', params: { id: $route.params.id }, query: {local:'en', q:'100'}}"
      class="btn btn-primary"
      >Edit User</router-link>
  </div>
</template>
