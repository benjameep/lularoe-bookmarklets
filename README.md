# Lularoe Bookmarklets
Bookmarklets for cheap hacks

 - ["javascript:void%20function(){fetch(%22/store/getiteminventories%22,{credentials:%22include%22,body:null,method:%22POST%22}).then(function(t){return%20t.json()}).then(function(t){t.inventories.forEach(function(t){$('.item-cart-qty[data-itemcode=%22'+t.ItemCode+'%22]').attr(%22placeholder%22,%220%20/%20%22+t.Quantity)})})}();"](Inject Inventory Count)
 - ["javascript:Promise.all([%22https://d3js.org/d3-dsv.v1.min.js%22,%22https://fastcdn.org/FileSaver.js/1.1.20151003/FileSaver.min.js%22].map(function(src){return%20new%20Promise(function(res){var%20s=document.createElement(%22script%22);s.src=src,s.onload=res,document.head.appendChild(s)})})).then(function(){saveAs(new%20Blob([d3.csvFormat(Array.from($(%22%23customersTable%22).dataTable().api().data()).map(function(row){return%20delete%20row[%22null%22],Object.keys(row).forEach(function(key){row[key]=row[key].replace(/%3C.*%3F%3E/g,%22%22).trim()}),row}))],{type:%22text/plain;charset=utf-8%22}),%22Customers_%22+moment().format(%22MMMDo_hMMa%22)+%22.csv%22)});"](Download Customers CSV)

Make a bookmarklet of the above links then click on the bookmark when on the cooresponding page on Lularoe's site

#### To make a bookmarklet
1. right clicking on the link and select *Copy link address*
2. then right click on your bookmark bar and select *Add page...*
3. Then give the bookmark a good name and paste into the URL input