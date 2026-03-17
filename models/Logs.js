const mongoose = require('mongoose')

const LogSchema = mongoose.Schema({
    monitorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Monitor",
        required: true
    },
    status: {
        type: String,
        enum: ["UP","DOWN"],
        required: true
    },
    statusCode: {
        type: Number,
        required: true
    },
    responseTime: Number,
    errorMessage: String,
    checkedAt: {
        type: Date,
        default: Date.now
    },
}
,{
    timestamps:true
}
)

module.exports = mongoose.model('Logs', LogSchema)