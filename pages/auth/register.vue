<template>
    <div class="max-w-sm mx-auto rounded overflow-hidden shadow-lg">
        <form action="" class="bg-white shadow-sm rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="nombre">
                    Nombre
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="nombre" type="text" v-model="newUser._nombre"  placeholder="Nombre" />
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                    Email
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email" type="email" v-model="newUser._email"  placeholder="john@doe.com" />
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="userId">
                    User Id
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="userId" type="text" v-model="newUser._userId"  placeholder="User Id" />
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Password
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password" type="password"  v-model="newUser._password" placeholder="Password" />
            </div>
            <div class="flex flex-row-reverse">
                <div class="basis-1">
                    <button type="button" @click="reset"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Reset
                    </button>
                </div>
                <div class="basis-1">
                    <button type="button" @click="register"
                        class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                        Register
                    </button>
                </div>
            </div>
        </form>
    </div>    
</template>

<script setup>
definePageMeta({
    layout:'auth'
})

const newUser = reactive({
    _nombre:'',
    _email:'',
    _userId:'',
    _password:''
})

async function register(){
    if (newUser._nombre=='' || newUser._email=='' || newUser._userId=='' || newUser._password == '') {
        alert('Rellene todos los campos')
    } else {
        const {data, pending, error, refresh} = await useFetch('http://localhost:3001/api/register',{
            method:'POST',
            body: newUser
        })
    }
}
</script>