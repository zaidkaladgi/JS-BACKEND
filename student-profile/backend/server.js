
const express = require('express');
const cors = require('cors');

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Student Profile Backend is running!');
});

app.get('/api/profile', (req, res) => {
    res.json({
        name: 'Zaid',
        age: 21,
        course: 'Computer Engineering',
        college: 'NBNSCOE',
        city: 'Solapur',
        skills: ['HTML', 'CSS', 'JavaScript', 'Node.js']
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
