const fs = require("fs");

export function logger(message: any, file: string) {
  const timestamp = new Date().toISOString();
  const logMessage = `${timestamp} - ${message}\n`;
  fs.appendFile(`./../logs/${file}.log`, logMessage, (err: Error) => {
    if (err) {
      console.error("Erro ao gravar no arquivo de log:", err);
    }
  });
}
