<template>
  <div>
    <h1>Register page</h1>
    <input type="text" v-model="email">
    <input type="text" v-model="password">
    <button @click="register()">Register</button>
  </div>
</template>

<script>
import auth from '@/services/auth'

export default {
  name: 'register',
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async register () {
      try {
        const response = await auth.register({
          email: this.email,
          password: this.password
        })
        console.log(response)
      } catch (error) {
        this.error = error.response.data
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../assets/sass/_all.sass'

</style>
