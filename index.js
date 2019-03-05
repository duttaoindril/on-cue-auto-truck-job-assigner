const {
  pgp,
  cors,
  path,
  express,
  PORT,
  DATABASE_URL,
  DBSSL
} = require('./server');
const root = path.join(__dirname, 'client', 'build');
const db = pgp(DATABASE_URL);
const app = express();
app.use(cors());
app.use(express.static(root));
app.get('/', (req, res) => res.sendFile('index.html', { root }));

db.one('SELECT $1 AS value', 123)
  .then(function(data) {
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT} with ${data.value} DB!`);
    });
  })
  .catch(function(error) {
    console.log('ERROR:', error);
  });

app.get('/api/hello', (req, res) => {
  res.json({ helloWorld: 'wow', data: 123 });
});
