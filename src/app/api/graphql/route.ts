import { createSchema } from "graphql-yoga"
import { NextRequest } from "next/server"
import { resolvers } from "../../../../graphql/resolvers"
import { typeDefs } from "../../../../graphql/schema"


export async function GET(req: NextRequest) {
    return {
        schema: createSchema({
            typeDefs,
            resolvers
        }),
        graphqlEndpoint: '/api/graphql'
    }
}

export const config = {
    api: {
        bodyParser: false
    }
}