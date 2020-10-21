<template>
  <form class="form" id="login-form" @submit.prevent="loginForm">
    <div class="form-group">
      <label class="form-label">Email</label>
      <div class="input-group">
        <input type="email" name="email" v-model="email" placeholder="demo@email" class="form-control" />
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Пароль</label>
      <div class="input-group">
        <input type="password" name="password" v-model="password" placeholder="password" class="form-control" />
      </div>
    </div>
    <div class="form__buttons">
      <button type="submit" class="button button_primary button_block">Войти</button>
    </div>
    <div class="form__append">Нет аккаунта? <router-link :to="{ name: 'register' }" class="link">Зарегистрируйтесь</router-link></div>
  </form>
</template>

<script>
import { login } from '../data';

export default {
  name: 'LoginPage',

  data() {
    return {
      email: null,
      password: null,
    }
  },

  methods:{
    loginForm:function() {
      if(this.email && this.password) {
        this.getUser();
      }
      if(!this.email) alert("Требуется ввести Email");
      if(!this.password) alert("Требуется ввести пароль");
    },

    async getUser() {
      let response = await login(this.email, this.password);
      if (response.statusCode === 403) {
        alert('Неверные учетные данные');
      } else {
        alert(response.fullname);
      }
    }
  },

};
</script>

<style scoped></style>
