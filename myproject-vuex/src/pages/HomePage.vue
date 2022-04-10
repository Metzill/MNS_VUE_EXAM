<template>
  <div id="app" class="min-h-screen h-full" style="background: #edf2f7;">
    <div class="flex items-center justify-center">
      <div class="w-full flex items-center justify-center font-sans">
        <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg overflow-y-auto">
          <p>Bienvenue mon gaw</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('http://localhost:3000/api/v1/todos/')
      .then(async response => (await this.$store.dispatch('actionGetTaskFromApi', response.data)))
  }
}

</script>
