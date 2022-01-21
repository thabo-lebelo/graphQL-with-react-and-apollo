const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema')

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

const PORT = process.env.PORT || 4000

app.listen(4000, () => {
    console.log(`Server is runnning on port ${PORT}`)
})