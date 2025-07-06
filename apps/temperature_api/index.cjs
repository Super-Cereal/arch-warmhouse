// Require the framework and instantiate it
const fastify = require("fastify")({ logger: true });

// Declare a route
fastify.get("/temperature", function handler(request, reply) {
  const { location } = request.query;
  console.log({ location });

  reply.send({ value: Math.random() * 15 + 15 });
});

// Declare a route
fastify.get("/temperature/:sensorId", function handler(request, reply) {
  const { sensorId } = request.params;
  const { location } = request.query;
  console.log({ location, sensorId });

  reply.send({ value: Math.random() * 15 + 15 });
});

// Run the server!
fastify.listen({ port: 8081, host: "0.0.0.0" }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
