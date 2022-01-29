const HTMLParser = require('./classes/HTMLParser');
const Processor = require('./classes/Processor');
const Reader = require('./classes/Reader');
const Table = require('./classes/Table');
const Writer = require('./classes/Writer');

const reader = new Reader();
const writer = new Writer();

(async function main() {
  const data = await reader.Read('./src/example.csv');
  
  const processed = Processor.Process(data);

  const users = new Table(processed);

  const html = await HTMLParser.Parse(users);
  
  const targetHTML = await writer.WriteHTML('./target/target.html', html);

  if (targetHTML == true) {
    console.log('WriteHTML: Ficheiro gerado com sucesso');
  } else {
    console.log('WriteHTML: Um erro ocorreu durante a escrita');
  }

  const targetPDF = await writer.WritePDF('./target/target.pdf', html);

  if (targetPDF == true) {
    console.log('WritePDF: Ficheiro gerado com sucesso');
  } else {
    console.log('WritePDF: Um erro ocorreu durante a escrita');
  }
})();
