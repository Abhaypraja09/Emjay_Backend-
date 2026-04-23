const mongoose = require('mongoose');

const auditLogSchema = new mongoose.Schema({
  companyId: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  action: { type: String, required: true }, // e.g., 'CREATE_PRODUCTION', 'DELETE_ORDER'
  module: { type: String, required: true }, // e.g., 'PRODUCTION', 'SALES', 'BOTTLES'
  details: { type: String },
  prevValue: { type: mongoose.Schema.Types.Mixed },
  newValue: { type: mongoose.Schema.Types.Mixed },
  timestamp: { type: Date, default: Date.now },
  ipAddress: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('AuditLog', auditLogSchema);
