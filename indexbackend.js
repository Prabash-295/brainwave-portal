// brainwave-backend/index.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// POST /analyze-brainwave endpoint
app.post('/analyze-brainwave', (req, res) => {
  const { focusLevel, emotion } = req.body;

  let recommendation = '';
  if (focusLevel > 75) {
    recommendation = 'Advance to harder content.';
  } else if (focusLevel > 40) {
    recommendation = 'Continue current topic.';
  } else {
    recommendation = 'Take a short break.';
  }

  res.json({
    recommendation,
    emotion: emotion || 'neutral',
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
