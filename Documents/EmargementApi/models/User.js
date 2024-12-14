const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    role: { type: String, enum: ['formateur', 'etudiant'], default: 'etudiant' }
});

userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 8);
    }
    next();
});
const user = await dbPrisma.user.create[{
    data:{
        name: data.name,
        email: data.email,
        password: hashePassword,
      },
      select: {
        id: true,
      },
}]

const User = mongoose.model('User', userSchema);

module.exports = User;
