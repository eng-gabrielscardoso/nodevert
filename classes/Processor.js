class Processor {
  static Process(data) {
    const spliter = data.split('\n');
    const rows = [];
    
    spliter.forEach(row => {
      const arr = row.split(',');
      rows.push(arr);
    })

    return rows;
  }
}

module.exports = Processor;
