const dbConnect = require('./database/connection');
dbConnect("pokemon");

const app = require('./app');
const port = 3000;

app.listen(port, () => { console.log(`Listening on port ${port}`) });