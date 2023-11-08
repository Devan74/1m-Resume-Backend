const express = require("express");
const router = express.Router();
const resumeController = require("../controllers/resumeController");

router.get('/api/resume', resumeController.getResume);
router.post("/api/update-order", resumeController.updateSectionOrder);
router.post("/api/update-color", resumeController.updateSectionColor);

router.post("/resume", async (req, res) => {
  try {
    const resumeData = req.body.resume; // Assuming the data is sent in the request body
    const existingResume = await Resume.findOne();
    if (existingResume) {
      // Update the existing resume data
      existingResume.sections = resumeData.sections;
      await existingResume.save();
      res.json({ message: "Resume data updated successfully" });
    } else {
      // Create a new resume document
      const newResume = new Resume(resumeData);
      await newResume.save();
      res.json({ message: "Resume data created successfully" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});


module.exports = router;
