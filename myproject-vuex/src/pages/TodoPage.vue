<template>
  <div id="app" class="min-h-screen h-full" style="background: #edf2f7;">
    <div class="flex items-center justify-center">
      <div class="w-full flex items-center justify-center font-sans">
        <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg overflow-y-auto">
              <div class="mb-4">
                  <h1 class="text-3xl text-gray-900">Ma Todo</h1>
                  <to-do-input />
              </div>
              <div class="mb-5">
                <to-do-progressbar />
              </div>
              <div v-for="(task, indexOfTask) in this.$store.state.tasks " :key="indexOfTask">
                <to-do-elements :task=task :indexOfTask=indexOfTask @onStateChange="index => stateChange(index)" @onSuppr="index => suppr(index)" />
              </div>
              <div class="flex">
                <!-- <div class="mx-auto">
                  <button class="p-4 rounded-l-md border hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed" @click="goTo(0)" :disabled="$store.state.page <= 0">‹‹</button>
                  <button class="p-4 rounded-y-md border-y border-r hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed" @click="addByParam(-2)" :disabled="$store.state.page <= 0">‹</button>
                  <button class="p-4 rounded-y-md border-y" :disabled="true">{{ $store.state.pageNumber }}</button>
                  <button class="p-4 rounded-y-md border-y border-l hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed" @click="addByParam(2)" :disabled="$store.state.page >= $store.state.tasks.length-2">›</button>
                  <button class="p-4 rounded-r-md border hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed" @click="goTo($store.state.tasks.length-2)" :disabled="$store.state.page >= $store.state.tasks.length-2">››</button>
                </div> -->
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>

import ToDoInput from "@/components/ToDoInput";
import ToDoProgressbar from "@/components/ToDoProgressbar";
import ToDoElements from "@/components/ToDoElements";

export default {
  name: 'TodoPage',
  components: {ToDoInput, ToDoProgressbar, ToDoElements},
  mounted: function(){
    this.$store.dispatch('actionProgressCheck');
    // this.pageCalc();
  },
  methods: {
    // addByParam: function(x) {
    //   this.$store.state.page += x;
    //   this.pageCalc();
    // },
    // pageCalc: function() {
    //   this.$store.state.pageNumber = this.$store.state.page /2 + 1;
    // },
    // goTo: function(x) {
    //   this.$store.state.page = x;
    //   this.pageCalc();
    // }
  }
}
</script>