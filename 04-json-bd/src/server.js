import express from 'express';
import cors from 'cors';
import pgPromise from 'pg-promise';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const pgp = pgPromise();
const db = pgp('postgres://postgres:secret@localhost:5432/develop');

// customers
app.get('/customers', async function(req, res) {
  const sql = "select * from clientes  order by nome";
  const customers = await db.query(sql);

  res.json({ customers });
});

app.listen(3000);
console.log('Server is listening on port 3000');
