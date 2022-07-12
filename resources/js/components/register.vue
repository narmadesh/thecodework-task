<template>
    <div class="container lg:px-96 md:px-48">
        <div class="shadow-lg bg-white p-4">
            <h1 class="font-bold text-2xl mb-4">Signup</h1>
            <form @submit.prevent="register">
                <div class="row">
                    <label class="font-bold mb-2">Name</label>
                    <input type="text" class="form-input w-full" v-model="signup.user_name" required>
                    <label class="font-bold mb-2">Email</label>
                    <input type="email" class="form-input w-full" v-model="signup.email" required>
                    <label class="font-bold mb-2">Password</label>
                    <input type="password" class="form-input w-full" v-model="signup.password" required>
                    <div class="float-right">
                        <router-link exact-active-class="active" to="/login"
                            class="font-medium text-indigo-400 hover:text-indigo-700 active:text-indigo-700 focus:text-indigo-700">
                            Already signuped? Login here!
                        </router-link>
                    </div>
                    <div class="font-medium text-indigo-400 hover:text-indigo-700 active:text-indigo-700 focus:text-indigo-700">{{message}}</div>
                    <button type="submit"
                        class="bg-indigo-500 hover:bg-indigo-500 focus:bg-indigo-500 text-white px-6 py-2 rounded-full my-4">Signup</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name:"register",
    data(){
        return {
            signup:{
                user_name:"",
                email: "",
                password:""
            },
            message:"",
        }
    },
    methods:{
        async register(){
            await this.axios.post('/api/register',this.signup).then(response=>{
                if(response.data.message == "Success")
                {
                    this.$router.push({ name: "login" })
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