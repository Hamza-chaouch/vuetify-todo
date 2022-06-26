<template>
  <v-row justify="center">
    <v-dialog v-model="$store.state.updateDialog" persistent max-width="600px">

      <v-card>
        <v-card-title>
          <span class="text-h5">Update Task</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>



              <v-col cols="12">
                <v-text-field v-model="$store.state.selectedTask.title"></v-text-field>
              </v-col>



            </v-row>
          </v-container>

        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeModal()">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="update()" @keyup.enter="update()">
            Update
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>


<script>
export default {
  name: 'Dialog',

  data: () => ({
    newTaskTitle : '',
    old : '',
    dialog: false
  }),
  methods: {
    update() {
     this.$store.commit('updateTaskTitle', this.$store.state.selectedTask)
      // this.$store.state.tasks[this.$store.state.selectedTask.id - 1].title = this.newTaskTitle
      this.$store.state.updateDialog = false
    },
    closeModal() {
     
      if(this.$store.state.oldTask ==! this.$store.state.selectedTask) {
        this.$store.state.selectedTask =  this.$store.state.oldTask 
      }
      this.$store.state.updateDialog = false
    }
  },
  mounted: function () {
    this.old = this.$store.state.selectedTask
       console.log(this.$store.state.selectedTask , 'selected');
        console.log(this.old , 'old');
  },
 



}
</script>