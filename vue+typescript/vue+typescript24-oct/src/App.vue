<template>
  <div>
    <p>Current Color: {{ currentStatusMessage }}</p>
    <button @click="setColor('Red')">Red</button>
    <button @click="setColor('Green')">Green</button>
    <button @click="setColor('Blue')">Blue</button>
    <p>Current Task: {{ currentTaskMessage }}</p>
    <button @click="setTask('Done')">Done</button>
    <button @click="setTask('Pending')">Pending</button>
  </div>
  <div>
    <h2>Users</h2>
    <ul>
      <li v-for="user in users" :key="user.email">
        {{ user.name }} - {{ user.email }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Status, Task } from "./pracEnum";
import type {User} from "./interface/user"
export default defineComponent({
  data() {
    return {
      currentStatus: Status.Red as Status,
      currTask: Task.Pending as Task,
      users: [
        { name: "Rhythm", email: "rhythm0011@mail.com" } as User,
        { name: "abc", email: "abc@mail.com" } as User,
        { name: "Rohit", email: "rohit@mail.com" } as User
      ] as User[]
    };
  },
  methods: {
    setColor(colorName: "Red" | "Green" | "Blue") {
      this.currentStatus = Status[colorName];
    },
    setTask(taskStatus: "Done" | "Pending") {
      this.currTask = Task[taskStatus];
    }
  },
  computed: {
    currentStatusMessage(): string {
      switch (this.currentStatus) {
        case Status.Red:
          return "Red!";
        case Status.Green:
          return "Green!";
        case Status.Blue:
          return "Blue!";
        default:
          return "Unknown color";
      }
    },
    currentTaskMessage(): string {
      switch (this.currTask) {
        case Task.Done:
          return "Task is Done!";
        case Task.Pending:
          return "Task is Pending!";
        default:
          return "Unknown task status";
      }
    }
  }
});
</script>
