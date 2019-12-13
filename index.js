const dbConnect = require('./database/connection');
dbConnect("pokemon");

const routes = require('./routes');

const app = require('./app');
const port = 3000;

app.use(routes);

app.listen(port, () => { console.log(`Listening on port ${port}`) });