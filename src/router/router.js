import Vue from 'vue';
import Router from 'vue-router'

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: '/',
            name: 'contacts',
            component: () => import('../components/contacts/v-contact-list')
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('../components/contacts/v-contact-user-info')
        },
        {
            path: '/chats',
            name: 'chats',
            component: () => import('../components/users/v-user-list')
        },
        {
            path: '/chat',
            name: 'chat',
            component: () => import('../components/users/chat/v-user-chat'),
            props: true
        },
    ]
});

export default router;