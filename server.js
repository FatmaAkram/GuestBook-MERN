const express = require('express');
const connectDB = require('./config/db');
const app = express();
connectDB();

app.get('/', (req, res) => {
    res.send("Hello");
  });

// Init Middleware
app.use(express.json());
// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/messages', require('./routes/api/messages'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));