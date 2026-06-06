const mongoose = require('mongoose');

const staffAttendanceSchema = new mongoose.Schema({
  staff: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  companyId: { type: String, required: true },
  date: { type: String, required: true }, // Format: YYYY-MM-DD
  punchIn: {
    time: { type: Date },
    location: {
      lat: { type: Number },
      lng: { type: Number }
    },
    evidence: { type: String } // base64 image data
  },
  punchOut: {
    time: { type: Date },
    location: {
      lat: { type: Number },
      lng: { type: Number }
    },
    evidence: { type: String } // base64 image data
  },
  status: { type: String, enum: ['present', 'absent', 'half-day'], default: 'present' }
}, { timestamps: true });

staffAttendanceSchema.index({ staff: 1, date: 1 }, { unique: true });

module.exports = mongoose.model('StaffAttendance', staffAttendanceSchema);
