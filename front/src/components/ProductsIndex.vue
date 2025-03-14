<script lang="ts">
import axios from "axios"

export default {
  data() {
    return {
      orders: [] as Array<{ increment_id: string, email: string, payment_card: string, total: number, items: Array<any> }>,
      ordersFiltered: [] as Array<{ increment_id: string, email: string, payment_card: string, total: number, items: Array<any> }>,
      filterIncrementId: "",
      filterPrice: ""
    }
  },

  async mounted() {
    const response = await axios.get("http://localhost:3000/orders")
    this.orders = response.data
    this.ordersFiltered = response.data
  },

  methods: {
    incrementIdFilter() {
      if (this.filterIncrementId === "") {
        return this.orders
      }
      const filteredOrder = this.orders.filter(order => order.increment_id === this.filterIncrementId.trim())
      this.ordersFiltered = filteredOrder
    },

    PriceFilter() {
      if (this.filterPrice === "") {
        return this.orders
      }
      const filteredOrder = this.orders.filter(order => order.total >= this.filterPrice)
      this.ordersFiltered = filteredOrder
    },

    clearFilters() {
      this.ordersFiltered = this.orders;
    }
  }
}

</script>

<template>
  <div class="container content">
    <div class="main">
      <div class="filter">
        <h2 class="filter-title">Filters:</h2>
        <div class="inputs">
          <div class="div-filter">
            <label class="label-filter" for="filterIncrementId">Increment ID:</label>
            <input class="input-filter" type="text" v-model="filterIncrementId" placeholder="12345-67890"/>
            <button class="button-filter" @click="incrementIdFilter">Filter</button>
          </div>
          <div class="div-filter">
            <label class="label-filter" for="filterPrice">Above X Price:</label>
            <input class="input-filter" type="text" v-model="filterPrice" placeholder="133"/>
            <button class="button-filter" @click="PriceFilter">Filter</button>
          </div>
        </div>
        <button @click="clearFilters" v-if="ordersFiltered != orders">Clear filters</button>
      </div>
      <div class="orders">
        <table>
          <thead>
            <tr>
              <th>Increment Id</th>
              <th>Email</th>
              <th>Payment Method</th>
              <th>Total</th>
              <th>Items</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in ordersFiltered" :key="order.increment_id">
              <td>{{ order.increment_id }}</td>
              <td>{{ order.email }}</td>
              <td>{{ order.payment_card }}</td>
              <td>{{ order.total }}</td>
              <td>{{ order.items.length }}</td>
              <td>
                <div class="actions">
                  <button class="edit">Editar</button>
                  <button class="delete">Deletar</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  padding-top: 3rem;
}

.main {
  background-color: #262d31;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
}

.filter {
  background-color: #1E2427;
  color: var(--light);
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  gap: 1rem;
  flex-direction: column;
}

.products {
  display: grid;
  grid-template-rows: auto;
  gap: 1rem;
}

table {
  width: 100%;
  border-collapse: collapse;
  text-align: center;
}

thead {
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  border-bottom: solid 4px #1E2427;
}

tr {
  border-bottom: 1px solid #1E2427;
}

th {
  color: #959899;
  padding: 0.5rem;
}

tbody tr td {
  padding: 0.5rem;
  text-align: center;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

button {
  background-color: #1E2427;
  color: #959899;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
}

.edit:hover {
  color: green;
}

.delete:hover {
  color: darkred;
}

.input-filter {
  background-color: #1E2427;
  color: #959899;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
}

.label-filter {
  color: #959899;
}

.div-filter {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
  background-color: #262d31;
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
}

.button-filter {
  background-color: #1E2427;
  color: #959899;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
}

.button-filter:hover {
  color: green;
}

.inputs {
  display: flex;
  gap: 1rem;
}

filter-title {
  color: #959899;
  margin-bottom: 1rem;
  width: 100%;
  text-align: center;
}

</style>