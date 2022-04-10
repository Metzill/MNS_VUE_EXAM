<template>
    <div class="flex mt-4">
      <input  v-model="input" class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-700" :placeholder="inputToLoad">
      <button @click="updateTask" class="flex p-2 border-2 rounded text-blue-500 border-blue-500 hover:text-white hover:bg-blue-500">Modifier</button>
    </div>
</template>
  
  <script>

    export default {
    name: 'ToDoEdit',
    props: ['inputToLoad'],
    data: function () {
      return {
        input: "",
      }
    },
    methods: {
      updateTask() {
        let payload = {
          'id': this.$route.params.id,
          'input': this.$data.input
        }
        this.$store.dispatch('actionUpdateTask', payload);
      }
    }
  }

  </script>