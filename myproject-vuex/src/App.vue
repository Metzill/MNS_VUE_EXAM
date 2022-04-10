<template>
<div id="app">
  <nav class="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
  <div class="mb-2 sm:mb-0">
    <router-link to="/" class="text-2xl no-underline text-grey-darkest hover:text-blue-dark">Home</router-link>
  </div>
  <div>
    <router-link to="/todos" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">TodoList</router-link>
  </div>
</nav>
  <router-view></router-view>
  <div class="bg-gray-100 pt-2 ">
   <div class="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col md:flex-row max-w-6xl">
      <div class="mt-2 ">© Copyright 2022. All Rights Reserved.</div>
   </div>
</div>
</div>
</template>

<script>

</script>