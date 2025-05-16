import mongoose from 'mongoose';

const FormSubmissionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  subject: {
    type: String,
  },
  message: {
    type: String,
    required: true,
  },
  formType: {
    type: String,
    enum: ['contact', 'popup'],
    required: true,
  },
  service: {
    type: String,
  },
  budget: {
    type: String,
  },
  isRead: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.FormSubmission || mongoose.model('FormSubmission', FormSubmissionSchema);