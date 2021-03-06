import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        contacts: [],
        currentUserChat: '',
        chats: []
    },
    actions: {
        FETCH_CONTACTS({ commit }) {
            return axios.get('http://localhost:3000/contacts')
                .then((contacts) => {
                    commit('SET_CONTACTS_TO_STORE', contacts.data)
                })
        },
        SET_USER_TO_HEADER({ commit }, user) {
            commit('SET_CONTACTS_TO_HEAD', user);
        },
        FETCH_CHATS({ commit }) {
            return axios.get('http://localhost:3000/chats')
                .then((chats) => {
                    commit('SET_CHATS_TO_STORE', chats.data)
                })
        },
        SET_MESSAGE_TO_CHAT({ commit }, { userID, user }) {
            return axios.put(`http://localhost:3000/chats/${userID + 1}`, user)
                .then((response) => {
                    return response
                })
        }
    },
    mutations: {
        SET_CONTACTS_TO_STORE(state, contacts) {
            state.contacts = contacts;
        },
        SET_CONTACTS_TO_HEAD(state, user) {
            if (user) state.currentUserChat = user;
            else state.currentUserChat = ''
        },
        SET_CHATS_TO_STORE(state, chats) {
            state.chats = chats;
        }
    },
    getters: {},
});

export default store;