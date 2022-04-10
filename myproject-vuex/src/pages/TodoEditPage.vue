<template>
  <div id="app" class="min-h-screen h-full" style="background: #edf2f7;">
    <div class="flex items-center justify-center">
      <div class="w-full flex items-center justify-center font-sans">
        <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg overflow-y-auto">
              <div class="mb-4">
                  <h1 class="text-3xl text-gray-900">{{ $store.state.tasks[$route.params.id].name }}</h1>
                  <to-do-edit :inputToLoad="$store.state.inputToLoad" />
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>

import ToDoEdit from "@/components/ToDoEdit";

export default {
  name: 'TodoEditpage',
  components: {ToDoEdit},
  mounted: function() {
        this.$store.dispatch('actionLoadEdit', this.$route.params.id );
    },
}
</script>
    ToDoEdit