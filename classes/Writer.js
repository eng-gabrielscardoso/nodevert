const fs = require('fs');
const pdf = require('html-pdf');
const util = require('util');

class Writer {
  constructor() {
    this.writeHTML = util.promisify(fs.writeFile);
    this.writePDF = pdf.create;
  }

  async WriteHTML(pathTarget, data) {
    try {
      await this.writeHTML(pathTarget, data);
      return true;
    } catch (e) {
      return false;
    }
  }

  async WritePDF(pathTarget, data) {
    try {
      await this.writePDF(data, {}).toFile(pathTarget, (err) => {});
      return true;
    } catch (e) {
      return false;
    }
  }
}

module.exports = Writer;
