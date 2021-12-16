<template>
  <form id="editForm" @submit.prevent="handleSubmit">
    <label for="id">ID</label>
    <input name="id" v-model.lazy="id" type="text" />
    <label for="userId">User Id</label>
    <input name="userId" v-model.lazy="userId" type="text" />
    <label for="description">Description</label>
    <input name="description" v-model.lazy="description" type="text" />
    <label for="merchantId">Merchant Id</label>
    <input name="merchantId" v-model.lazy="merchantId" type="text" />
    <label for="debit">Debit</label>
    <input name="debit" v-model.lazy="debit" type="text" />
    <label for="credit">Credit</label>
    <input name="credit" v-model.lazy="credit" type="text" />
    <label for="amount">Amount</label>
    <input name="amount" v-model.lazy="amount" type="text" />
  </form>
  <button type="submit" form="editForm">Edit</button>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const parsedData = computed(() => store.state.parsedData)
const id = ref('')
const userId = ref('')
const description = ref('')
const merchantId = ref('')
const debit = ref('')
const credit = ref('')
const amount = ref('')
const handleSubmit = () => {
  const editedData = {
    id: id.value,
    userId: userId.value,
    description: description.value,
    merchantId: merchantId.value,
    debit: debit.value,
    credit: credit.value,
    amount: amount.value
  }
  store.commit('updateData', editedData)
}
</script>