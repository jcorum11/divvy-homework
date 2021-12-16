<template>
  <table>
    <tbody>
      <tr class="header">
        <td>ID</td>
        <td>User ID</td>
        <td>Description</td>
        <td>Merchant ID</td>
        <td>Debit</td>
        <td>Credit</td>
        <td>Amount</td>
      </tr>
      <tr v-for="row in parsedData">
        <td>{{ row.id }}</td>
        <td>{{ row.userId }}</td>
        <td>{{ row.description }}</td>
        <td>{{ row.merchantId }}</td>
        <td>{{ row.debit }}</td>
        <td>{{ row.credit }}</td>
        <td>{{ row.amount }}</td>
      </tr>
    </tbody>
  </table>
  <data-input-vue />
</template>

<script setup>
import { ref, computed } from 'vue'
import DataInputVue from './DataInput.vue';
import { useStore } from 'vuex'
const store = useStore()
const parsedData = computed(() => store.state.parsedData)

const editTable = (editedData) => {

}
</script>

<style lang="postcss">
.header {
  font-weight: bold;
}
</style>