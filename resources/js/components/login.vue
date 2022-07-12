<template>
    <div class="container lg:px-96 md:px-48">
        <div class="shadow-lg bg-white p-4">
            <h1 class="font-bold text-2xl mb-4">Login</h1>
            <form @submit.prevent="signin">
                <div class="row">
                    <label class="font-bold mb-2">Email</label>
                    <input type="email" class="form-input w-full" v-model="login.email" required>
                    <label class="font-bold mb-2">Password</label>
                    <input type="password" class="form-input w-full" v-model="login.password" required>
                    <div class="float-right">
                        <router-link exact-active-class="active" to="/register"
                            class="font-medium text-indigo-400 hover:text-indigo-700 active:text-indigo-700 focus:text-indigo-700">
                            New user? Signup here!
                        </router-link>
                    </div>
                    <button type="submit"
                        class="bg-indigo-500 hover:bg-indigo-500 focus:bg-indigo-500 text-white px-6 py-2 rounded-full my-4">Login</button>
                    <div
                        class="font-medium text-red-700 hover:text-red-700 active:text-red-700 focus:text-red-700">
                        {{message}}</div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name:"login",
    data(){
        return {
            login:{
                email: "",
                password:""
            },
            message:"",
        }
    },
    methods:{
        async signin(){
            await this.axios.post('/api/login',this.login).then(response=>{
                if(response.data.message == "Success")
                {
                    window.localStorage.setItem('user', JSON.stringify(response.data.user))
                    this.$router.push({ name: "tasksList" })
                }
                else
                {
                    this.message = response.data.message
                }
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>