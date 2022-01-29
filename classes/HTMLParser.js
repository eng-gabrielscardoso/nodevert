const ejs = require('ejs');

class HTMLParser {
  static async Parse(table) {
    return await ejs.renderFile('src/table.ejs', {
      header: table.header,
      rows: table.rows,
    })
  }
}

module.exports = HTMLParser;
