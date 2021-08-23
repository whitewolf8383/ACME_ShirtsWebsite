const express = require ('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Set statis folder
app.use(express.static(path.join(__dirname, 'public')));
// products API Routes
app.use('/api/products', require('./public/routes/api/products'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));