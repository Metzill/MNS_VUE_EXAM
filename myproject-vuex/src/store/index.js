import router from '@/router'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    pageNumber:1,
      page: 0,
      progress: 50,
      inputToLoad: "",
      maxReached: 0,
      minReached: 1, 
      tasks: []
  },
  getters: {
    pageTable: function(state) {
      return state.tasks.slice(state.page,state.page+2)
    }
  },
  mutations: {
    progressCheck: function(state) {
      let progress = 0;
      let i=0;
      for(i; i < state.tasks.length; i++){
        if(state.tasks[i].done === 1) progress += 1;
      }
      state.progress = (progress / state.tasks.length) * 100;
    },
    add: function(state, input) {
      state.tasks.push({
        name: input,
        done: 0,
      });
    },
    suppr: function(state, index) {
      state.tasks.splice(index,1);
    },
    stateChange: function(state, index){
      if(state.tasks[index].done === 0){
        state.tasks[index].done = 1;
      }else if(state.tasks[index].done === 1){
        state.tasks[index].done = 0;
      }
    },
    editPage(state, id) {
      router.push(`/todo/${id}`);
    },
    loadEdit(state, id) {
      state.inputToLoad = state.tasks[id].name;
    },
    updateTask(state, payload){
      state.tasks[payload.id].name = payload.input;
    },
    getTaskFromApi(state, payload){
      for(let i=0; i<payload.length; i++){
        state.tasks.push(payload[i]);
      }      
      console.log(state.tasks)
    }
  },
  actions: {
    actionProgressCheck({ commit }){
      commit('progressCheck');
    },
    actionAdd({ commit }, input) {
      commit('add', input);
    },
    actionSuppr({ commit }, index) {
      commit('suppr', index);
    },
    actionStateChange({ commit }, index) {
      commit('stateChange', index);
    },
    actionEditPage({ commit }, id) {
      commit('editPage', id);
    },
    actionLoadEdit({ commit }, id) {
      commit('loadEdit', id);
    },
    actionUpdateTask({ commit }, payload) {
      commit('updateTask', payload);
    },
    actionGetTaskFromApi({ commit }, payload){
      commit('getTaskFromApi', payload);
    }
  }
})