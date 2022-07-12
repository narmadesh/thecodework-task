<template>
    <div class="container lg:px-96 md:px-48">
        <div class="shadow-lg bg-white p-4">
            <h1 class="font-bold text-2xl mb-4">Update task</h1>
            <form @submit.prevent="update">
                <div class="row">
                    <label class="font-bold mb-2">Title</label>
                    <input type="text" class="form-input w-full" v-model="tasks.title">
                    <label class="font-bold mb-2">Description</label>
                    <textarea class="form-textarea w-full" v-model="tasks.description"></textarea>
                    <label class="font-bold mb-2">Task Date</label>
                    <input type="date" class="form-input w-full" v-model="tasks.task_date">
                    <button type="submit"
                        class="bg-indigo-500 hover:bg-indigo-500 focus:bg-indigo-500 text-white px-6 py-2 rounded-full my-4">Update</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "update-tasks",
    data() {
        return {
            tasks: {
                title: "",
                description: "",
                task_date: "",
                _method: "patch"
            }
        }
    },
    mounted() {
        this.showTasks()
    },
    methods: {
        async showTasks() {
            await this.axios.get(`/api/tasks/${this.$route.params.id}`).then(response => {
                const { title, description, task_date } = response.data
                this.tasks.title = title
                this.tasks.description = description
                this.tasks.task_date = task_date
            }).catch(error => {
                console.log(error)
            })
        },
        async update() {
            await this.axios.post(`/api/tasks/${this.$route.params.id}`, this.tasks).then(response => {
                this.$router.push({ name: "tasksList" })
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>