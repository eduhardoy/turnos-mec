import ApolloClient, { InMemoryCache } from 'apollo-boost'

const clientApolo = new ApolloClient({
    // uri: 'http://turnos.mec.gob.ar:3031/graphql',
    uri: 'http://localhost:3031/graphql',
    cache: new InMemoryCache({
        addTypename: false
    })
})

export default clientApolo