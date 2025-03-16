const express = require('express');
const { registerUser } = require('../services/authService');
const User = require('../schemas/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/register', async (req, res) => {
    console.log("Dữ liệu nhận được từ frontend:", req.body);
    try {
        const response = await registerUser(req.body);
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ $or: [{ email: username }, { username }] });

        if (!user) {
            console.log("Không tìm thấy user");
            return res.status(400).json({ message: 'Tên đăng nhập hoặc mật khẩu không đúng' });
        }

        const isMatch = await bcrypt.compare(password, user.password_hash);
        console.log("Kết quả so sánh mật khẩu:", isMatch);

        if (!isMatch) {
            return res.status(400).json({ message: 'Tên đăng nhập hoặc mật khẩu không đúng' });
        }

        const token = jwt.sign(
            { userId: user._id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );
        res.json({ success: true, message: 'Đăng nhập thành công', token });
    } catch (error) {
        res.status(500).json({ message: "Lỗi hệ thống, vui lòng thử lại sau!" });
    }
});


module.exports = router;
