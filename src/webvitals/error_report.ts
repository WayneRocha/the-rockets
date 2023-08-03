const fs = require("fs");

export function errorReporter(err: Error) {
  const timestamp = new Date().toISOString();
  const errorMessage = `${timestamp} - ERROR: ${err.stack}\n`;
  fs.appendFile("./../logs/error_log.log", errorMessage, (err: Error) => {
    if (err) {
      console.error("Error writing to error log:", err);
    }
  });
}