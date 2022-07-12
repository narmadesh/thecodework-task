<template>
    <div class="container lg:px-96 md:px-48">
        <div class="shadow-lg bg-white p-4">
            <h1 class="font-bold text-2xl mb-4">Add task</h1>
            <form @submit.prevent="create">
                <div class="row">
                    <label class="font-bold mb-2">Title</label>
                    <input type="text" class="form-input w-full" v-model="tasks.title">
                    <label class="font-bold mb-2">Description</label>
                    <textarea class="form-textarea w-full" v-model="tasks.description"></textarea>
                    <label class="font-bold mb-2">Task Date</label>
                    <input type="date" class="form-input w-full" v-model="tasks.task_date">
                    <button type="submit" class="bg-indigo-500 hover:bg-indigo-500 focus:bg-indigo-500 text-white px-6 py-2 rounded-full my-4">Save</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name:"add-tasks",
    data(){
        var user = JSON.parse(window.localStorage.getItem('user'))
        return {
            tasks:{
                title:"",
                description: "",
                task_date:"",
                created_by:user.id,
            }
        }
    },
    methods:{
        async create(){
            await this.axios.post('/api/tasks',this.tasks).then(response=>{
                this.$router.push({name:"tasksList"})
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>