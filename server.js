// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const eventRoutes = require('./routes/eventRoutes');



// Middleware
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1/Event', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}).then(() => {
	console.log('Connected to MongoDB')
});

// Check for database connection errors 
mongoose.connection.on("error", (error) => { 
	console.error("MongoDB connection error:", error); 
}); 



// Routes
app.use('/api/events', eventRoutes);

// Start server
app.listen(5000, () => {
	console.log(`Server is running on port 5000`);
});
