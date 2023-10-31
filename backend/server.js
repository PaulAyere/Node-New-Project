// const path = require('path');
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middlewares/errorHandler');
const connectDB = require('./config/config');
// const cors = require('cors');

const port = process.env.PORT || 8080;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// const corsOptions = {
//   origin: 'http://localhost:3000', // Replace with the actual URL of your frontend
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
// };

// app.use(cors(corsOptions));

// Define your routes here
app.use('/api/users', require('./routes/userRouter')); // User routes
app.use('/api/jobs', require('./routes/jobRouter')); // Job routes (assuming you have a job route)

// Serve frontend (if applicable)
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../frontend/build'));

//   app.get('*', (req, res) =>
//     res.sendFile(
//       path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
//     )
//   );
// } else {
//   app.get('/', (req, res) => res.send('Please set to production'));
// }

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));

