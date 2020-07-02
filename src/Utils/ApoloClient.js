import ApolloClient, { InMemoryCache } from 'apollo-boost'

const clientApolo = new ApolloClient({
    uri: 'http://turnos.mec.gob.ar:3031/graphql',
    fetchOptions: {
        credentials: 'inlcude'
    }
})

export default clientApolo