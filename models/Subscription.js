const mongoose = require('mongoose')

const SubscriptionSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true,
        unique: true
    },
    planId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Plan',
        required: true
    },
    status: {
        type: String,
        enum: ['active', 'canceled', 'past_due', 'trialing'],
        default: 'active'
    },
    stripeCustomerId: {
        type: String,
        default: null
    },
    stripeSubscriptionId: {
        type: String,
        default: null
    },
    currentPeriodStart: {
        type: Date,
        default: null
    },
    currentPeriodEnd: {
        type: Date,
        default: null
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Subscription', SubscriptionSchema)
