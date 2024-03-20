const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Mock database (replace this with your actual authentication logic)
const users = [
    { email: 'xyrilleuygwapo123@gmail.com', password: 'gwapokaayoko' }
];

// POST route for login form submission
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Check if the user exists in the mock database
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        // Redirect to dashboard.html upon successful login
        res.sendFile(path.join(__dirname, 'dashboard.html'));
    } else {
        res.status(401).send('Invalid email or password');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
