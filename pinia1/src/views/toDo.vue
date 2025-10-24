<template>
    <v-container class="d-flex align-center justify-center">
        <v-card class="d-flex-col align-center justify-center" style="max-width: 600px;min-width: 300px;    ">
            
            <v-card-title>
                To Do List
            </v-card-title>
            <v-text-field v-model="todo.text" label="Enter-Task"></v-text-field>

            <p>ur txt is here:- {{ todo.text }}</p>

            <v-btn color="green" @click="todo.add()">add</v-btn>

            <v-list>
                <v-list-item v-for="(item, index) in todo.arr" :key="index" class="my-2">
                    <v-list-item-content>
                        <v-list-item-title>{{ item }}</v-list-item-title>
                    </v-list-item-content>
                    <v-btn color="red" @click="todo.del(index)" class="my-1">Delete</v-btn>
                </v-list-item>
            </v-list>
            <p class="text-subtitle-1">
                Total tasks: <strong>{{ todo.taskCount }}</strong>
            </p>

        </v-card>
    </v-container>
</template>


<script>
import { useTodoStore } from '../store/todoStore.js'

export default {
  data() {
    return {
      todo: useTodoStore()  
    }
  },
  computed: {
    taskCount() {
      return this.todo.taskCount;
    }
  },
  methods: {
    add() {
      this.todo.add();
    },
    del(index) {
      this.todo.del(index);
    }
  }
}
</script>