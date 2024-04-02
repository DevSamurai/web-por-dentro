import express from 'express';
import pgPromise from 'pg-promise';

const app = express();
const pgp = pgPromise();
const db = pgp('postgres://postgres:secret@localhost:5432/develop');

app.set('view engine', 'ejs');


// index page
app.get('/', async function(req, res) {
  const sql = "select * from clientes  order by nome";
  const customers = await db.query(sql);

  const now = new Date();
  const time = ("0" + now.getHours()).slice(-2) + ':' + ("0" + now.getMinutes()).slice(-2) + ':' + ("0" + now.getSeconds()).slice(-2);

  res.render('pages/index', { customers, time });
});

app.listen(8080);
console.log('Server is listening on port 8080');
