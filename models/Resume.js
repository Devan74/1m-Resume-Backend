const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  resume: {
    sections: [
      {
        title: String,
        items: [
          {
            position: String,
            company: String,
            location: String,
            startDate: String,
            endDate: String,
            description: String,
          },
        ],
      },
    ],
  },
});

module.exports = mongoose.model('Resume', resumeSchema);
