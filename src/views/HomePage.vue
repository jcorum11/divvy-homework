<template>
  <h1 v-if="loading">Loading...</h1>
  <h1 v-if="error">¯\_(ツ)_/¯</h1>
  <tx-table-vue v-if="dataIsReturned" />
  <button @click="romanize">Romanize!</button>
</template>

<script setup>
import { ref, computed } from 'vue'
import TxTableVue from '../components/TxTable.vue'
import { useStore } from 'vuex'
const error = ref(false)
const loading = ref(false)
const dataIsReturned = ref(false)
const store = useStore()
const parsedRows = computed(() => store.state.parsedData)
const parseCsvString = (csvString) => {
  const csvLines = csvString.split(/\n/)
  let row
  let id
  let userId
  let description
  let merchantId
  let debit
  let credit
  let amount
  const result = []
  for (let i = 1; i < csvLines.length; i++) {
    // id,user_id,description,merchant_id,debit,credit,amount
    row = csvLines[i].split(',')
    id = row[0]
    userId = row[1]
    description = row[2]
    merchantId = row[3]
    debit = row[4]
    credit = row[5]
    amount = row[6]
    row = {
      id,
      userId,
      description,
      merchantId,
      debit,
      credit,
      amount
    }
    result.push(row)
  }
  return result
}

fetch('http://localhost:3000/data.csv')
  .then(response => response.text())
  .then(response => parseCsvString(response))
  .then(parsedData => {
    store.commit('overwriteData', parsedData)
  })
  .then(() => {
    dataIsReturned.value = true
  })
const romanize = () => {
  store.commit('romanizeData')
}
</script>