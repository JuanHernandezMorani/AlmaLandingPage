const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

env.config();

const app = express();
app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
    },
});

app.post('/send-email', async (req, res) => {
    const { nombre, telefono, email, motivo, mensaje } = req.body;

    if (!nombre || !telefono || !email || !motivo || !mensaje) {
        return res.status(400).json({ success: false, message: 'Todos los campos son obligatorios' });
    }

    const mailOptions = {
        from: email,
        to: process.env.MAIL_USERNAME,
        subject: `Nuevo mensaje de ${nombre}`,
        text: `Hola, soy ${nombre}, me estoy comunicando por ${motivo}.
        
        ${mensaje}
        
        Mis datos de contacto:
        Mail: ${email}
        Telefono: ${telefono}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ success: true, message: 'Correo enviado con éxito' });
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        res.status(500).json({ success: false, message: 'Error al enviar el correo' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});