import { defineStore } from "pinia";
export const useTodoStore = defineStore('todo', {
  state: () => ({
    text: '',
    arr: []
  }),
  getters: {
  taskCount() {
    return this.arr.length;
  }
},

  actions: {
    add() {
      if (this.text.trim() !== '') {
        this.arr.push(this.text.trim());
        this.text = '';
      }
    },
    del(index) {
      this.arr.splice(index, 1);
    }
  },
  persist: true
});
