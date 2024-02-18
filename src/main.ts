import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'
import VueApolloComponents from '@vue/apollo-components'

import App from './App.vue'
import router from './router'

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  cache,
  uri: 'https://graphqlpokemon.favware.tech/v8'
})

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(apolloProvider)
app.use(VueApolloComponents)

app.mount('#app')
