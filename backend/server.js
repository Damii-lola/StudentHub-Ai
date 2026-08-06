// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { createClient } = require('@supabase/supabase-js');

// Initialize Supabase with SERVICE ROLE KEY
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: ['https://damii-lola.github.io', 'http://localhost:3000'], // Update with your GitHub Pages URL
    credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ========================
// SIMPLE AUTH ROUTES (NO TOKENS, NO SESSIONS)
// ========================

// Sign Up - Insert user into custom 'users' table
app.post('/api/auth/signup', async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ error: 'Username, email, and password are required' });
    }

    try {
        // Check if user already exists
        const { data: existingUser, error: checkError } = await supabase
            .from('users')
            .select('email')
            .eq('email', email)
            .maybeSingle();

        if (checkError) throw checkError;
        if (existingUser) {
            return res.status(400).json({ error: 'User with this email already exists' });
        }

        // Insert new user
        const { data, error } = await supabase
            .from('users')
            .insert([{ username, email, password }])
            .select();

        if (error) throw error;

        // Return the user data (excluding password)
        const newUser = data[0];
        delete newUser.password;
        res.status(201).json({ user: newUser });
    } catch (error) {
        console.error('Signup error:', error.message);
        res.status(400).json({ error: error.message });
    }
});

// Sign In - Check credentials against custom 'users' table
app.post('/api/auth/signin', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }

    try {
        // Find user by email and password
        const { data, error } = await supabase
            .from('users')
            .select('*')
            .eq('email', email)
            .eq('password', password)
            .maybeSingle();

        if (error) throw error;
        if (!data) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        // Return user data (excluding password)
        const user = { ...data };
        delete user.password;
        res.status(200).json({ user });
    } catch (error) {
        console.error('Signin error:', error.message);
        res.status(400).json({ error: error.message });
    }
});

// Check if user is logged in (by email stored in session/localStorage)
app.post('/api/auth/check', async (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(401).json({ error: 'Not logged in' });
    }

    try {
        const { data, error } = await supabase
            .from('users')
            .select('id, username, email')
            .eq('email', email)
            .maybeSingle();

        if (error) throw error;
        if (!data) {
            return res.status(401).json({ error: 'User not found' });
        }

        res.status(200).json({ user: data });
    } catch (error) {
        console.error('Check session error:', error.message);
        res.status(400).json({ error: error.message });
    }
});

// Health check
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
