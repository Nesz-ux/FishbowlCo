const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Conexión a MongoDB
mongoose.connect('mongodb+srv://Neszboot:admin@cluster0.bidl6a5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Definir modelos de usuario
const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', UserSchema);

// Rutas de autenticación
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  // Encriptar la contraseña
  const bcrypt = require('bcryptjs');
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new User({ username, email, password: hashedPassword });
  await newUser.save();
  res.send('Usuario registrado con éxito');
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).send('Usuario no encontrado');
  }

  const bcrypt = require('bcryptjs');
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).send('Contraseña incorrecta');
  }

  const jwt = require('jsonwebtoken');
  const token = jwt.sign({ id: user._id }, 'your_jwt_secret');
  res.json({ token });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
