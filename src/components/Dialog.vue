<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
 
      <v-card>
        <v-card-title>
          <span class="text-h5">Update Task</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
             
           
         
              <v-col cols="12">
                <v-text-field
                  v-model = "oldTitle"
                 
                ></v-text-field>
              </v-col>
            
              
             
            </v-row>
          </v-container>
        
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="closeModal()"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="update()"
          >
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
   props: ['task',"dialog"],
   data: () => ({
  //    dialog: false,
        oldTitle: ''
    }),
    methods : {
       update()  {
        this.$emit('updateTaskTitle',{
            id : this.task.id,
            title : this.oldTitle,
            done : this.task.done
        })

       },
       closeModal( ) {
        console.log(this.task);
        this.$emit('closeModal')
       }
    },
   mounted: function () {
        this.oldTitle =  this.task.title 
    }
  
  }
</script>