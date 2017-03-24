<template>
  <!-- <div>
    <p>Server Status: {{ status }}</p>
    <hr>
    <button @click="changeStatus">Change Status</button>
  </div> -->
  <div>
    <app-servers-status v-for="(server, i) in 5" key="i"></app-servers-status>
  </div>
</template>

<script>

  import ServerStatus from './ServerStatus.vue';
  export default {
    // data: function(){
    //   return {
    //     status: 'Critical'
    //
    //   }
    // },
    // methods: {
    //   changeStatus() {
    //     this.status= 'Normal';
    //   }
    // }
    componets: {
      'app-servers-status': ServerStatus
    }
  }
</script>
