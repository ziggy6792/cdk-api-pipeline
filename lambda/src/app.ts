import fastify from 'fastify';

const app = fastify();
app.get('/', async (request, reply) => reply.send({ foo: 'bar 2' }));

export default app;
