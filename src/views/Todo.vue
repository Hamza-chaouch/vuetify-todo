<template>
  <div class="home ">
    <v-text-field v-model="taskTitle" @click:append="addTask()" @keyup.enter="addTask()" class="pa-3" outlined
      hide-details label="Add task" append-icon="mdi-plus" clearable></v-text-field>
    <v-list class="pt-0">
      <div v-if="$store.state.tasks.length === 0" color="primary lighten-1" class="d-flex justify-center mb-6 flex-column mt-16">
        <v-icon color="primary lighten-1" x-large>
          mdi-check-all</v-icon>
        <H4 class="d-flex justify-center text--disabled"> No unchecked Tasks</H4>
      </div>
      <div v-for="task in $store.state.tasks" :key="task.id">

        <v-list-item @click="doneTask(task.id)" :class="{ 'blue lighten-5': task.done }">

          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox :input-value="task.done"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title :class="{ 'text-decoration-line-through': task.done }">{{ task.title }}
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <!-- <Dialog 
              @closeModal="dialogState = false" 
              @updateTaskTitle="onUpdate(task)"
              :dialog="dialogState" 
              :task="task"
              ></Dialog>     -->

              <!-- <v-menu bottom left>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn dark icon v-bind="attrs" v-on="on">
                    <v-icon color="primary">mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item v-for="(item, i) in items" :key="i">
                    <v-list-item-title>
                      {{ item.title }}


                    </v-list-item-title>
                    <v-btn 
                    @click="crudTask(task.id,item)"
                     icon
                     class="ml-5"

                    >
                      <v-icon color="primary lighten-1">{{item.icon}}</v-icon>
                    </v-btn>
                  </v-list-item>
                </v-list>
              </v-menu> -->
              <v-btn @click="suprimeTask(task.id)" icon>
                <v-icon color="primary lighten-1">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>

        </v-list-item>

        <v-divider></v-divider>
      </div>
    </v-list>
  </div>
</template>

<script>
import Dialog from "@/components/Dialog"

export default {
  name: 'Home',
  components: {
    Dialog
  },
  data: () => {
    return {
      dialogState: false , 
      taskTitle: '',
      items: [
        {
          action_id : 1,
          title: 'Update',
          icon : 'mdi-update'
        },
        {
          action_id : 2,
          title: 'Delete',
          icon : 'mdi-delete'
        },
        {
          action_id : 3,
          title: 'Sort',
          icon : 'mdi-sort'
        },
        {
          action_id : 4,
          title: 'Deadline',
          icon : 'mdi-clock-outline'
        },
      ]
    }
  },
  methods: {
    crudTask (id , action) {
      switch (action.action_id) {
        case 1:
          this.updateTask(id)
          break;
        case 2:
          this.suprimeTask(id)
          break;
        case 3:
          this.sortTask(id)
          break;
        case 4:
          this.dateLimiteTask(id)
          break;
          
      
        default:
          alert("sth wrong!!")
          break;
      }
    
    },
    onUpdate(newtask) {
    console.log(newtask);
    this.dialogState = false

    },
    updateTask(id){
      
      this.dialogState = true
    },
    sortTask(id){
      console.log('sortTask');

    },
    dateLimiteTask(id){
      console.log('dateLimiteTask');

    },

    doneTask(id) {
      
      let task = this.$store.state.tasks.filter(item => {
        return item.id === id
      })[0]
      task.done = !task.done
    },
    suprimeTask(id) {

     this.$store.state.tasks = this.$store.state.tasks.filter(task => task.id !== id)


    },
    addTask() {
      if (this.taskTitle) {
        let newTask = {
          id: Date.now(),
          title: this.taskTitle,
          done: false
        }

        this.$store.state.tasks.push(newTask)
        this.taskTitle = ''
      }

    }
  }


}
</script>
