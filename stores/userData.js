import { defineStore } from "pinia";

export const useUserData = defineStore('userData',()=>{
    const userData = ref({});

    function getUser(userData) {
        userData = userData
    }



    return {userData, getUser}

})