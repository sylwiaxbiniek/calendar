import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import * as firebase from "firebase/app";
import "firebase/firestore";

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyCDGktwPidE67-ZlQpqFk0km8Mg-THYJb0",
  authDomain: "vue-calendar-7a547.firebaseapp.com",
  databaseURL: "https://vue-calendar-7a547.firebaseio.com",
  projectId: "vue-calendar-7a547",
  storageBucket: "vue-calendar-7a547.appspot.com",
  messagingSenderId: "318830494604",
  appId: "1:318830494604:web:3f8061fec571fd7787cca9"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");
