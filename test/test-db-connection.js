const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL || 'postgresql://movile_user:LbXPH56o4TXWQze0gx8genuMm6w6Kigb@dpg-d1vaa4qdbo4c73fbmm7g-a.oregon-postgres.render.com:5432/movile',
});

client.connect()
  .then(() => {
    console.log('¡Conexión exitosa a PostgreSQL!');
    return client.end();
  })
  .catch(err => {
    console.error('Error de conexión:', err);
    process.exit(1);
  }); 