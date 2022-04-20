function onSelectionChange(e) {
  const col = e.range.getColumn();
  const row = e.range.getRow();
  if((col == 4 || col == 5) && row <= 27 && row >=3) {
    const as = e.source.getActiveSheet();
    switch(col) {
      case 4 : update(as,1,row,1)
      break;
      case 5 : update(as,1,row,-1)
      break;
    }
  } else if((col == 6 || col == 7) && row <= 27 && row >=3) {
    const as = e.source.getActiveSheet();
    switch(col) {
      case 6 : update(as,2,row,1)
      break;
      case 7 : update(as,2,row,-1)
      break;
    }
  }
  
}
function update(sheet,col,row,num) {
  const range = sheet.getRange(row,col);
  sheet.setActiveRange(sheet.getRange(row,3));
  range.setValue(range.getValue()+num);
}

function test() {
   const ss = SpreadsheetApp.openById("");
   const sheet = ss.getSheetByName("Sheet1");
  update(sheet,1,3,10);
}
