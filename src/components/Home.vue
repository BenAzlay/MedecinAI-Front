<template>
  <div>
    <h1>Welcome to our XML project</h1>
    <p>
      Made by: <br/>
      Benjamin AZOULAY <br/>
      Thomas SELVA <br/><br/>
      You are logged in as {{ this.$parent.currentUser.username }} (id = {{ this.$parent.currentUser.id }})
    </p>
  </div>
</template>

<script>
export default {
  name: 'Home' //this is the name of the component
}
</script>
<style>
</style>
