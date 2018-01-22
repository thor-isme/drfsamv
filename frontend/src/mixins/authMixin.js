import VueAxios from 'vue-axios'
import axios from 'axios';
import Vue from 'vue'
export const authMixin = {
    methods: {
        checkToken: function(provider, redirect){
            axios.post("http://localhost:8000/api/check/", {"token": localStorage.getItem("vue-authenticate.vueauth_token")}).then((response) => {
                    var path = (response.data.status)? true : "/";
                    redirect({ path: path});
                }).catch((error) => {
            });
        },
        authenticate: function(provider) {
            this.$auth.authenticate('google', {provider: "google-oauth2"}).then(function (response) {
                   window.location = "/dashboard";
            }).catch(function(error) {
                // window.location = "/dismiss";
                console.log(error);
            });
        }
    }
}