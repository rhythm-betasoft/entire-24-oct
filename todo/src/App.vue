<template>
  
  <v-app style="background-image: url(https://images.pexels.com/photos/129731/pexels-photo-129731.jpeg);">
        <router-view />
    <v-container class="d-flex flex-column align-center mt-20" style="margin-top: 5rem;">
     
      <v-card width="30%" rounded class="pa-4 "  style="background-color: transparent;">

        <v-text-field v-model="text" label="To Do" outlined></v-text-field>
        <div class=" d-flex align-center justify-center ">
          <v-btn color="success" rounded  class="mt-2" @click="addTask">
            {{ editindex === -1 ? 'ADD' : 'Update' }}
          </v-btn>
        </div>
        <p class="py-5">Your Text Is Here :- {{ text }}</p>

        <ul class="mt-5">
          <li v-for="(item, index) in arr" :key="index"
            class="d-flex flex-nowrap align-center justify-space-between pt-4">
            <div style="max-width: 65%;">
              {{ item }}
            </div>
            <div class="d-flex">
              <v-btn small color="error" rounded @click="deleteTask(index)">
                Delete
              </v-btn>
              <v-btn small color="warning" rounded @click="editTask(index)"  class="ml-2 hidden max-[859px]:inline-flex">
                Edit
              </v-btn>
            </div>
          </li>

        </ul>
      </v-card>
    </v-container>
    <router-view name="footer" />
  </v-app>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  data() {
    return {
      text: "",
      arr: [],
      editindex: -1,
      edittext: ""
    };
  },
  methods: {
    addTask() {
      if (this.text.trim() === '') return;
      if (this.editindex === -1) {
        this.arr.push(this.text.trim());
        Swal.fire({
        icon: 'success',
        title: 'Task Added',
        text: `"${this.text}" has been added to your list.`,
        timer: 1500,
        showConfirmButton: false,
      }); 
    }
      else {
        
        this.arr[this.editindex] = this.text.trim();
        this.editindex = -1;
      }
      this.text = '';
    },
    deleteTask(index) {
      Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
});
      this.arr.splice(index, 1);
    },
    editTask(index) {
      this.text = this.arr[index]
      this.editindex = index;
    }
  }
};
</script>
