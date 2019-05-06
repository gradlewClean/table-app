<template>
  <div class = 'container'>
    <div  class = 'row'>
      <div id = 'header' class = 'col-12'>
        <h1>Сотрудники <button @click = 'add' class="btn btn-success"> + </button></h1>
      </div>
      <table align = 'center' v-if = 'employees.length > 0' class = 'col-auto table table-sm'>
        <thead>
          <tr>
            <th>#</th>
            <th>ФИО</th>
            <th>Должность</th>
            <th>Оклад</th>
            <th>Статус</th>
            <th>Дата приема</th>
            <th>Уд.</th>
          </tr>
        </thead>
        <tbody>
          <tr is = 'employee-row'
              v-for = '(item, index) in employees'
              :employee = 'item'
              :i = 'index'
              v-bind:key = 'index'
              @remove-employee = 'remove($event)'></tr> <!-- heandling remove event button -->
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import EmployeeRow from './components/EmployeeRow.vue'
import { mapMultiRowFields } from 'vuex-map-fields' //for heandling chenges in v-model
import { mapActions } from 'vuex'

export default {
  name: 'table-app',
  components: { EmployeeRow },
  computed: {
    ...mapMultiRowFields(['employees']) //getter for employees from vuex-map-fields
  },
  methods: { 
    ...mapActions(['add', 'remove'])
  }
}
</script>

<style lang="scss">
#header {
  position: sticky;
  top: 5px;
  color: rgba(102, 102, 102, 0.2);
  z-index: 111;
  margin-bottom: 5px;
}
</style>
