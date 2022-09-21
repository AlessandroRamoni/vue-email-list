console.log("Martedì");

const app = new Vue({
  el: "#app",
  data: {
    raccolta: [],
    rubrica: [],
  },
  mounted() {
    for (let i = 0; i < 10; i++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        //sostituendo RESPONSE con RISPOSTA non vedo più in HTML le mail...???
        .then((response) => {
          const singoloIndirizzo = response.data;
          console.log(response.data);
          this.raccolta.push(singoloIndirizzo.response);
        });
      for (let i = 0; i < 10; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/phone")
          .then((response) => {
            const numeroTelefono = response.data;
            console.log(response.data);
            this.rubrica.push(numeroTelefono.response);
          });
      }
    }
  },

  // se aggiungo il secondo MOUNTED non viusualizzo più il secondo... ???

  /*
  mounted() {
   
  },
*/
});
