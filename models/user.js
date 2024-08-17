const { Schema, model } = require('mongoose');

const userSchema = Schema({ name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, unique: true },
  passwordHash: { type: String, required: true },
  street: { type: String, trim: true },
  phone: { type: String, required: true, trim: true },
  isAdmin: { type: Boolean, default: false },
  resetPasswordOtp: { type: Number },
  resetPasswordOtpExpires: { type: Date },
  semester: { type: Number, required: true, min: 1, max: 8 },
  studentType: { type: String, required: true, enum: ['hosteler', 'dayborder'] },
  classSection: { type: String, required: true, trim: true },
  skills: { type: [String], required: true, validate: [skillsArray => skillsArray.length > 0, 'Skills cannot be empty'] },
});

userSchema.index({ email: 1 }, { unique: true });

exports.User = model('User', userSchema);
