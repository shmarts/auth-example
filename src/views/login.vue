<template>
  <div>
    <h1>Login page</h1>
    <input type="text" v-model="email">
    <input type="text" v-model="password">
    <button @click="login()">Login</button>
  </div>
</template>

<script>
import auth from '@/services/auth'

export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async login () {
      try {
        const response = await auth.login({
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
