<template>
    <div>
        <p>Please select a User</p>
        <hr>
        <ul class="list-group">
            <router-link tag="li"
              class="list-group-item"
              :to="{name: 'UserDetail', params: { id: '1'}}"
              style="cursor: pointer">User 1</router-link>
            <router-link tag="li"
              class="list-group-item"
              :to="{name: 'UserDetail', params: { id: '2'}}"
              style="cursor: pointer">User 2</router-link>
            <router-link tag="li"
              class="list-group-item"
              :to="{name: 'UserDetail', params: { id: '3'}}"
              style="cursor: pointer">User 3</router-link>

              <router-link :to="{ name: 'routeName', params: { property: value}}"></router-link>
        </ul>
    </div>
</template>
