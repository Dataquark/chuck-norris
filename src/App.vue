<template>
  <h1>{{ title }}</h1>
  <div class="container">
    <input
      type="text"
      id="name"
      placeholder="Biror ism kiriting"
      v-model="chosenName"
    />
    <button @click="displayFact" type="submit">Generate</button>
  </div>
  <div class="container" v-if="show">
    <p class="randomFact">{{ chosenName }}{{ randomFact }}</p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      title: "Haqoiq al-Absurdiya",
      facts: [],
      randomFact: "",
      show: "",
      chosenName: "",
    };
  },
  mounted() {
    fetch("https://api.npoint.io/c46978f00629a70cfbf3/facts")
      .then((res) => res.json())
      .then((data) => (this.facts = data))
      .catch((err) => console.log(err.message));
  },
  methods: {
    displayFact() {
      this.randomFact = this.facts[
        Math.floor(Math.random() * this.facts.length)
      ]["fact"];
      this.show = true;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  background-color: #fffbeb;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
h1 {
  color: #0d9488;
  letter-spacing: 0.1em;
}
input {
  border: none;
  border-bottom: solid #0d9488;
  outline: none;
  font-size: 1.5em;
  background-color: #fffbeb;
  color: #0d9488;
  letter-spacing: 0.1em;
  text-align: center;
  padding: 5px;
  margin: 20px;
  max-width: 85%;
}

.randomFact {
  font-size: 2em;
  letter-spacing: 0.1em;
  padding: 0.5em;
  color: #0d9488;
  font-weight: 600;
}

button {
  margin: 5px;
  padding: 10px;
  outline: none;
  border: solid #dbeafe;
  border-radius: 10px;
  background-color: #0d9488;
  color: #f0fdfa;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: all 0.2s;
  font-size: 1.5em;
}

button:hover {
  background-color: #14b8a6;
}
</style>
