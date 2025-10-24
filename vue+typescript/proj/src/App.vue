<template>
  <v-container class="pa-4" max-width="600">
    <v-row>
      <v-col cols="12" class="text-center">
        <h2>Todo List</h2>
      </v-col>
      <v-col cols="12" class="d-flex">
        <v-text-field v-model="newTask" label="Add a new todo" dense  class="flex-grow-1"/>
        <v-btn color="primary" class="mt-2 ml-5" @click="addTodo">Add</v-btn>
      </v-col>
      <v-col cols="12">
        <v-list>
          <v-list-item v-for="todo in todos" :key="todo.id" class="d-flex align-center justify-space-between"  >
            <div class="d-flex align-center">
              <span>  {{ todo.text }} </span>
              <v-btn text color="error" class="ms-3" @click="removeTodo(todo.id)">
                Delete
              </v-btn>
            </div>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface Todo {
  id: number
  text: string
}
export default defineComponent({
  name: 'TodoApp',
  data() {
    return {
      newTask: '' as string,
      todos: [] as Todo[]
    }
  },
  methods: {
    addTodo() {
      if (!this.newTask.trim()) return
      this.todos.push({
        id: Date.now(),
        text: this.newTask.trim()
      })
      this.newTask = ''
    },
    removeTodo(id: number) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    }
  }
})
</script>


<!-- export default defineComponent({
  data() {
    return {
      newTask: '' as string,
      todos: [] as { id: number; text: string }[]
    }
  },
  methods: {
    addTodo() {
      if (!this.newTask.trim()) return
      this.todos.push({
        id: Date.now(),
        text: this.newTask.trim()
      })
      this.newTask = ''
    },
    removeTodo(id: number) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    }
  }
}) -->
