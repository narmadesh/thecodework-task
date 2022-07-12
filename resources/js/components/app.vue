<template>
    <main>
        <nav class="bg-indigo-500 p-4">
            <div class="container-fluid">
                <router-link to="/" class="text-white px-3 font-bold" href="#">TheCodeWork - TODO Task | </router-link>
                <router-link exact-active-class="active" to="/" class="font-medium text-slate-300 hover:text-white active:text-white focus:text-white">Home
                </router-link>
                <router-link exact-active-class="active" to="/tasks" class="font-medium text-slate-300 hover:text-white active:text-white focus:text-white">Tasks
                </router-link>
            </div>
        </nav>
        <div class="container mt-5">
            <router-view></router-view>
        </div>
    </main>
</template>
 
<script>
export default {}
</script>