import { defineStore } from 'pinia'
export const ab = defineStore('counter', {
  state: () => ({
    count: 0,
    arr:[1,2,3,4,1,2,3,4,5]
  }),
  actions: {
    increment() {
      this.count++
    },
    decrement(){
        this.count--
    },
    filter(){
        this.arr=this.store.filter()
    }
  },
  persist: true 
})
