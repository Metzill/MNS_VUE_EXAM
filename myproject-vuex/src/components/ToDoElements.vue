<template>
    <div v-if="task.done === 0" class="flex mb-4 items-center"> 
        <p v-if="task.done === 0" class="w-full text-gray-900">{{task.name}}</p>
        <p v-else-if="task.done === 1" class="w-full line-through text-green">{{task.name}}</p>
        <button @click="stateChange($store.state.page + indexOfTask)" v-if="task.done === 0" class="flex p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-500 border-green-500 hover:bg-green-500">Fait</button>
        <button @click="stateChange($store.state.page + indexOfTask)" v-else-if="task.done === 1" class="flex p-2 ml-4 mr-2 border-2 rounded hover:text-white text-gray-500 border-gray-500 hover:bg-gray-500">Pas fait</button>
        <button @click="suppr($store.state.page + indexOfTask)" class="flex p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500">supprimer</button>
        <button @click="editPage(indexOfTask)" class="flex p-2 ml-2 border-2 rounded text-blue-500 border-blue-500 hover:text-white hover:bg-blue-500">Edit</button>
    </div>
    <div v-else-if="task.done === 1" class="flex mb-4 items-center">
        <p v-if="task.done === 1" class="w-full line-through text-green">{{task.name}}</p>
        <p v-else-if="task.done === 0" class="w-full text-gray-900">{{task.name}}</p>
        <button @click="stateChange($store.state.page + indexOfTask)" v-if="task.done === 1" class="flex p-2 ml-2 border-2 rounded text-gray-500 border-gray-500 hover:text-white hover:bg-gray-500">Pas fait</button>
        <button @click="stateChange($store.state.page + indexOfTask)" v-else-if="task.done === 0" class="flex p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-500 border-green-500 hover:bg-green-500">Fait</button>
        <button @click="suppr($store.state.page + indexOfTask)" class="flex p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500">supprimer</button>
        <button @click="editPage(indexOfTask)" class="flex p-2 ml-2 border-2 rounded text-blue-500 border-blue-500 hover:text-white hover:bg-blue-500">Edit</button>
    </div>
</template>
  
<script>
  
    export default {
        name: 'ToDoElements',
        props: ['task', 'indexOfTask'],
        methods: {
            suppr: function(i) {
                this.$store.dispatch('actionSuppr', i);
                this.$store.dispatch('actionProgressCheck');
            },
            stateChange: function(i){
                this.$store.dispatch('actionStateChange', i)
                this.$store.dispatch('actionProgressCheck');
            },
            editPage: function(id){
                this.$store.dispatch('actionEditPage', id)
            }
        }
    }

</script>