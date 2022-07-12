<template>
    <div class="container lg:px-80 md:px-48">
        <div class="mb-2 float-right mb-4">
            <router-link :to='{ name: "tasksAdd" }'
                class="bg-indigo-500 hover:bg-indigo-500 focus:bg-indigo-500 text-white px-4 py-2 rounded-full">Create
                new
            </router-link>
        </div>
        <h1 class="font-bold text-2xl mb-4">Tasks</h1>
        <div class="w-full" v-if="tasks.length > 0" v-for="(tasks, key) in tasks">
            <div class="shadow-lg bg-white p-4 rounded-lg mb-2" :key="key"
                v-if="show=tasks.created_by==user.id?true:false">
                <div class="float-right">
                    <router-link :to='{ name: "tasksEdit", params: { id: tasks.id } }'
                        class="bg-green-500 hover:bg-green-500 focus:bg-green-500 text-white px-4 py-2 mx-2 rounded-full">
                        Edit
                    </router-link>
                    <button type="button" @click="deletetasks(tasks.id)"
                        class="bg-red-500 hover:bg-red-500 focus:bg-red-500 text-white px-4 py-2 rounded-full">Delete</button>
                </div>
                <h4 class="text-xl font-bold">{{tasks.title}}</h4>
                <p>{{tasks.description}}</p>
            </div>
        </div>
    </div>
</template>

<script>
// import deleteModal from "./components/tasks/deleteModal.vue";
export default {
    name: "tasks",
    components: {
        // deleteModal
    },
    data() {
        var user = JSON.parse(window.localStorage.getItem('user'));
        return {
            tasks: [],
            user:user,
        }
    },
    mounted() {
        this.getTasks(),
        this.checkLogin()
    },
    methods: {
        async getTasks() {
            await this.axios.get('/api/tasks').then(response => {
                this.tasks = response.data
            }).catch(error => {
                console.log(error)
                this.tasks = []
            })
        },
        deletetasks(id) {
            if (confirm("Are you sure to delete this tasks ?")) {
                this.axios.delete(`/api/tasks/${id}`).then(response => {
                    this.getTasks()
                }).catch(error => {
                    console.log(error)
                })
            }
        },
        checkLogin()
        {
            if(!window.localStorage.getItem('user'))
            {
                this.$router.push({ name: "login" })
            }
        }
    }
}
</script>