<template>
  <div class="about">
    <h1>Results</h1>
    <a href="" @click.prevent="fetchResource">Fetch</a><br/>
    <a href="" @click.prevent="fetchResourceCabinQuest">Fetch Cabin</a><br/>
    <a href="" @click.prevent="fetchSecureResource">Fetch Secure Resource</a>
    <p v-for="r in resources" :key="r.timestamp">
      Server Timestamp: {{r.timestamp | formatTimestamp }}
    </p>
    <p v-for="branch in branches" :key="branch.title">
      Title: {{branch.title}}
    </p>
    <p>{{error}}</p>
  </div>
</template>

<script>

import $backend from '../backend'

export default {
  name: 'about',
  data () {
    return {
      resources: [],
      error: '',
      branches: [],
    }
  },
  methods: {
    fetchResource () {
      $backend.fetchResource()
        .then(responseData => {
          this.resources.push(responseData)
        }).catch(error => {
          this.error = error.message
        })
    },
    fetchResourceCabinQuest () {
      $backend.fetchResourceCabinQuest('cabinporn')
        .then(responseData => {
          console.log("cabinquest ", responseData);
          this.branches = responseData.branches
        }).catch(error => {
          this.error = error.message
        })
    },
    fetchSecureResource () {
      $backend.fetchSecureResource()
        .then(responseData => {
          this.resources.push(responseData)
        }).catch(error => {
          this.error = error.message
        })
    }
  }
}

</script>

<style lang="scss">
</style>
