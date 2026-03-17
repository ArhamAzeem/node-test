const mongoose = require('mongoose')

const PlanSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    maxMonitors: {
        type: Number,
        required: true
    },
    stripePriceIdMonthly: {
        type: String,
        default: null
    },
    stripePriceIdYearly: {
        type: String,
        default: null
    },
    amountMonthly: {
        type: Number,
        default: 0
    },
    amountYearly: {
        type: Number,
        default: 0
    },
    isActive: {
        type: Boolean,
        default: true
    },
    sortOrder: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Plan', PlanSchema)
