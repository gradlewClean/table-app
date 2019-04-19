<template>
  <tr>
    <td>
      {{ i + 1 }}
    </td>
    <td>
      <input  type="text"
              placeholder = 'ФИО сотрудника'
              v-model = 'employee.fullName'
              class = 'form-control form-control-sm'>
    </td>
    <td>
      <input  type="text"
              placeholder = 'Должность сотрудника'
              v-model = 'employee.position'
              class = 'form-control form-control-sm'>
    </td>
    <td>
      <input  type="number"
              placeholder = 'Оклад сотрудника'
              v-model.number = 'employee.salary'
              class = 'form-control form-control-sm'>
    </td>
    <td>
      <select name="status"
              v-model = 'employee.status'
              class = 'form-control form-control-sm'>
        <option disabled value="">Статус</option>
        <option value="coseeker">Соискатель</option>
        <option value="worker">Сотрудник</option>
        <option value="fired">Уволенный</option>
      </select>
    </td>
    <td>
      <input  type="date"
              v-model = 'employee.employmentDate'
              class = 'form-control form-control-sm'>
    </td>
    <td>
    <button @click = "$emit('remove-employee', i)"
            class="btn btn-outline-danger btn-sm">  -  </button>
    </td>
  </tr>
</template>

<script>

export default {
  name: 'employee-row',
  props: ['employee', 'i']
}
</script>
