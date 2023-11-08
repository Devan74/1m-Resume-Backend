const Resume = require('../models/Resume');

// Fetch resume data
exports.getResume = async (req, res) => {
  try {
    const resume = await Resume.findOne();
    res.json(resume);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update section order
exports.updateSectionOrder = async (req, res) => {
  try {
    const { sections } = req.body;
    const resume = await Resume.findOne();
    resume.sections = sections;
    await resume.save();
    res.json({ message: 'Section order updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update section color
exports.updateSectionColor = async (req, res) => {
  try {
    const { color } = req.body;
    const resume = await Resume.findOne();
    resume.backgroundColor = color;
    await resume.save();
    res.json({ message: 'Section color updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
