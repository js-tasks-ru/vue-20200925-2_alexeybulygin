<template>
  <form class="form" id="register-form" @submit.prevent="registerForm">
    <div class="form-group">
      <label class="form-label">Email</label>
      <div class="input-group">
        <input type="email" name="email" v-model="email" class="form-control" />
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Имя</label>
      <div class="input-group">
        <input type="text" name="username" v-model="username" class="form-control" />
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Пароль</label>
      <div class="input-group">
        <input type="password" name="password" v-model="password" class="form-control" />
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Повтор пароля</label>
      <div class="input-group">
        <input type="password" name="passwordRepeat" v-model="passwordRepeat" class="form-control" />
      </div>
    </div>
    <div class="form-group">
      <label class="checkbox"><input type="checkbox" name="license" v-model="license" /> Я согласен с условиями <span></span></label>
    </div>
    <div class="form__buttons">
      <button type="submit" class="button button_primary">Зарегистрироваться</button>
    </div>
    <div class="form__append">Уже есть аккаунт? <router-link :to="{ name: 'login' }" class="link">Войдите</router-link></div>
  </form>
</template>

<script>
import { login, register } from '../data';

export default {
  name: 'RegisterPage',

  data() {
    return {
      email: null,
      username: null,
      password: null,
      passwordRepeat: null,
      license: null,
    }
  },

  methods:{
    registerForm:function(e) {
      if(this.email && this.username && this.password && this.passwordRepeat && this.license) {
        this.regUser();
      }
      if(!this.email) alert("Требуется ввести Email");
      if(!this.username) alert("Требуется ввести полное имя");
      if(!this.password) alert("Требуется ввести пароль");
      if(!this.passwordRepeat) alert("Требуется ввести пароль еще раз");
      if(this.passwordRepeat !== this.password) alert("Пароли не совпадают");
      if(!this.license) alert("Требуется согласиться с условиями");
    },

    async regUser() {
      let response = await register(this.email, this.username, this.password);
      if (response.id) {
        alert(response.id);
      } else {
        alert(response.message);
      }
    }
  },

};
</script>

<style scoped></style>
