const AuditLog = require('../models/AuditLog');

const logAudit = async (req, action, module, details, prevValue = null, newValue = null) => {
    try {
        await AuditLog.create({
            companyId: req.user.companyId,
            user: req.user._id,
            action,
            module,
            details,
            prevValue,
            newValue,
            ipAddress: req.ip || req.connection.remoteAddress
        });
    } catch (error) {
        console.error('Audit Log Error:', error.message);
    }
};

module.exports = logAudit;
