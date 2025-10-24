<template>
    <v-container class="d-flex flex-column align-center">
        <v-card width="30%">
            <v-card-title>
                To-Do-List
            </v-card-title>

            <v-text-field label="enter task" v-model="text" outlined></v-text-field>
            <p class="py-5">Your Text Is Here :- {{ text }}</p>

            <v-btn @click="add">Add</v-btn>

            <v-list>
                <v-list-item v-for="(item, index) in arr" :key="index">
                    <v-list-item-content>
                        <v-list-item-title>{{ item }}</v-list-item-title>
                    </v-list-item-content>
                    <v-btn @click="del(index)">Delete</v-btn>


                </v-list-item>
            </v-list>
        </v-card>
    </v-container>
</template>


<script>
export default {
    data() {
        return {
            text: "",
            arr: []
        }
    },
    methods: {
        add() {
            if (this.text.trim() != "") {
                this.arr.push(this.text.trim());
                this.text = ""
            }
        },
        del(index) {
            this.arr.splice(index, 1);
        }
    }
}
</script>