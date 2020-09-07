new Vue({
  el: "#app",

  data: {
    tareas: [],
    label: ""
  },

  methods: {
    /**
     * Agrega una tarea
     */
    agregarTarea: function(){
      if( this.label !== "" ) {
        this.tareas.push({
          label: this.label,
          completada: false
        });
        this.label = "";
      }
    },

    /**
     * Completa una tarea
     */
    completarTarea: function(index){
      this.tareas[index].completada = !this.tareas[index].completada;
    }
  },

  computed: {
    tareasCompletadas: function() {
      return this.tareas.filter(tarea => {
        return tarea.completada;
      })
    },
    tareasSinCompletar: function() {
      return this.tareas.filter(tarea => {
        return !tarea.completada;
      })
    }
  }
});