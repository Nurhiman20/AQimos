import Login from './components/Login.vue';
import Dashboard from './components/Dashboard.vue';

// import Dashboard component
import DashboardView from './components/views/Dash.vue'
import User from './components/views/User.vue';

export const routes = [
    { 
        path: '/login', 
        component: Login 
    },
    { 
        path: '/', 
        component: Dashboard,
        children: [
            {
                path: 'dashboard',
                alias: '',
                component: DashboardView
            },
            {
                path: 'user', 
                component: User
            }
        ]
    }
]