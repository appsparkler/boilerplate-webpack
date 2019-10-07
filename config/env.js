getDotEnvFilePath();

function getDotEnvFilePath() {
  try {
      const path = require('path');
      return path.resolve('.env');
  } catch (e) {

  } finally {

  }
}
