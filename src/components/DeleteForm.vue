<template>
  <form id="deleteForm" @submit.prevent="handleSubmit">
    <label for="id">ID</label>
    <input name="id" v-model.lazy="id" type="text" />
  </form>
  <button form="deleteForm" type="submit">Delete</button>
</template>

<script setup>
import { ref } from 'vue'
import {useStore} from 'vuex'
const store = useStore()
const id = ref('')
const handleSubmit = () => {
  store.commit('deleteData', id.value)
}
</script>