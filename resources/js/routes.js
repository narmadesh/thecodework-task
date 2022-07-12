const Welcome = () =>
    import(
        "./components/tasks/list.vue" 
    );
const tasksList = () =>
    import(
        "./components/tasks/list.vue" 
    );
const tasksCreate = () =>
    import(
        "./components/tasks/add.vue" 
    );
const tasksEdit = () =>
    import(
        "./components/tasks/edit.vue"
    );

const login = () =>
    import(
        "./components/login.vue"
    );

const register = () =>
    import(
        "./components/register.vue"
    );

export const routes = [
    {
        name: "home",
        path: "/",
        component: Welcome,
    },
    {
        name: "tasksList",
        path: "/tasks",
        component: tasksList,
    },
    {
        name: "tasksEdit",
        path: "/tasks/:id/edit",
        component: tasksEdit,
    },
    {
        name: "tasksAdd",
        path: "/tasks/add",
        component: tasksCreate,
    },
    {
        name: "login",
        path: "/login",
        component: login,
    },
    {
        name: "register",
        path: "/register",
        component: register,
    },
];