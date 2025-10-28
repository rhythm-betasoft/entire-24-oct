import { defineStore } from 'pinia'
export const authStore = defineStore('user', {
    state: () => ({
        accessToken: '',
        refreshToken: '',
        user: null
    }),
    actions: {
        setAuth(accessToken, refreshToken, user) {
            this.accessToken = accessToken;
            this.refreshToken = refreshToken;
            this.user = user;
        },
        logout() {
            this.accessToken = '',
                this.refreshToken = ''
            this.user = null
        },
        isLoggedIn() {
            return !!this.accessToken;
        },

    },
    persist:true,   
})