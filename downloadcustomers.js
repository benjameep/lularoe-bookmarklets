Promise.all(['https://d3js.org/d3-dsv.v1.min.js','https://fastcdn.org/FileSaver.js/1.1.20151003/FileSaver.min.js'].map(function(src){ return new Promise(function(res){
  var s = document.createElement('script');
  s.src = src;
  s.onload = res;
  document.head.appendChild(s);
})})).then(function(){ saveAs(new Blob([d3.csvFormat(Array.from($('#customersTable').dataTable().api().data()).map(function(row){
  delete row.null;
  Object.keys(row).forEach(function(key){ row[key] = row[key].replace(/<.*?>/g,'').trim() });
  return row;
}))],{type: "text/plain;charset=utf-8"}),'Customers_'+moment().format('MMMDo_hMMa')+'.csv')})

Promise.all(['https://d3js.org/d3-dsv.v1.min.js','https://fastcdn.org/FileSaver.js/1.1.20151003/FileSaver.min.js'].map(function(src){ return new Promise(function(res){ var s = document.createElement('script'); s.src = src; s.onload = res; document.head.appendChild(s); })})).then(function(){ saveAs(new Blob([d3.csvFormat(Array.from($('#customersTable').dataTable().api().data()).map(function(row){ delete row.null; Object.keys(row).forEach(function(key){ row[key] = row[key].replace(/<.*?>/g,'').trim() }); return row; }))],{type: "text/plain;charset=utf-8"}),'Customers_'+moment().format('MMMDo_hMMa')+'.csv')})

`
javascript:Promise.all([%22https://d3js.org/d3-dsv.v1.min.js%22,%22https://fastcdn.org/FileSaver.js/1.1.20151003/FileSaver.min.js%22].map(function(src){return%20new%20Promise(function(res){var%20s=document.createElement(%22script%22);s.src=src,s.onload=res,document.head.appendChild(s)})})).then(function(){saveAs(new%20Blob([d3.csvFormat(Array.from($(%22%23customersTable%22).dataTable().api().data()).map(function(row){return%20delete%20row[%22null%22],Object.keys(row).forEach(function(key){row[key]=row[key].replace(/%3C.*%3F%3E/g,%22%22).trim()}),row}))],{type:%22text/plain;charset=utf-8%22}),%22Customers_%22+moment().format(%22MMMDo_hMMa%22)+%22.csv%22)});
`