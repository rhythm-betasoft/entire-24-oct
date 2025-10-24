<template>
  <p>{{ count }}</p>
  <v-btn @click="count++">increment</v-btn>
  <v-btn @click="count--">decrement</v-btn>

  <v-btn @click="incrementObj">{{ obj.val.a }}</v-btn>
  <p>Array: {{ obj.arr }}</p>
  <p style="margin: 25px;">Doubled Count: {{ doubledCount }}</p>


  <div style="margin: 25px;">
    <p>Counter: {{ counter }}</p>
    <button @click="counter++">Increase Counter</button>
  </div>
</template>

<script setup>
import { ref, computed,watch } from 'vue'
const count = ref(0)

const obj = ref({
  val: { a: 0 },
  arr: ['foo', 'bar']
})
function incrementObj() {
  obj.value.val.a++
  obj.value.arr.unshift('baz')
}
          const doubledCount = computed(() => count.value * 2)




const counter = ref(0)


watch(counter, (newVal, oldVal) => {
    console.log(newVal)
})
</script>

<style scoped></style>
