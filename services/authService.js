const bcrypt = require('bcryptjs');
const User = require('../schemas/User');

// Hàm đăng ký tài khoản
const registerUser = async ({ username, email, password, phone_number }) => {
    try {
        const existingUser = await User.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            throw new Error('Email hoặc username đã được sử dụng');
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password_hash: hashedPassword,
            phone_number,
            is_verified: false
        });

        await newUser.save();
        return { message: 'Đăng ký thành công!' };
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = { registerUser };
