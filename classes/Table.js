class Table {
  constructor(arr) {
    this.header = arr[0];
    arr.shift();
    this.rows = arr;
  }

  get RowCount() {
    return this.rows.length - 1;
  }

  get ColumnCount() {
    return this.header.length;
  }
}

module.exports = Table;
