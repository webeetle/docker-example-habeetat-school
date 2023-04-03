const fastify = require('fastify')({
    logger: true
})

fastify.register(require('@fastify/cors'), {})

fastify.get('/', async (request, reply) => {
    return {
        cars: [
            {
                id: 1,
                name: 'BMW',
                price: 100000
            },
            {
                id: 2,
                name: 'Audi',
                price: 90000
            },
            {
                id: 3,
                name: 'Mercedes',
                price: 110000
            },
            {
                id: 4,
                name: 'Porsche',
                price: 120000
            }
        ]
    }
})

const start = async () => {
    try {
        await fastify.listen({ port: 3000, host: '0.0.0.0' })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()