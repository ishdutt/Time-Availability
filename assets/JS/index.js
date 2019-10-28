google.charts.load('current', {'packages':['timeline']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var container = document.getElementById('timeline');
  var chart = new google.visualization.Timeline(container);
  var dataTable = new google.visualization.DataTable();

  //variables for the start of yesterday, today, and tomorrow 
  var today = new Date();
  today.setHours(0,0,0,0);
  var yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);
  yesterday.setHours(0,0,0,0);
  var tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  tomorrow.setHours(0,0,0,0);
  var dayAfterNext = new Date();
  dayAfterNext.setDate(tomorrow.getDate() + 1);
  dayAfterNext.setHours(0,0,0,0);
  
  //add columns to timeline
  dataTable.addColumn({ type: 'string', id: 'ID' })
  dataTable.addColumn({ type: 'string', id: 'Name' });
  dataTable.addColumn({ type: 'date', id: 'Start' });
  dataTable.addColumn({ type: 'date', id: 'End' });
  
  //add rows to the timeline
  //The data is hard coded 
  dataTable.addRows([
    [ '\0' ,'Free ', new Date(2019, 9,8 ), new Date(2019, 9, 9) ],
    [ '2' ,'Shubham',      new Date(2019, 9, 1),  new Date(2019, 9, 7) ],
    [ '3' ,'Shubham',  new Date(2019, 9, 26),  new Date(2019, 9, 28) ],
    [ '4' ,'Vivek', new Date(2019, 9, 9), new Date(2019, 9, 12) ],
    [ '5' ,'Priya', new Date(2019, 9, 10), new Date(2019, 9, 12) ],
    [ '6' ,'Rohan', new Date(2019, 9, 17), new Date(2019, 9, 19) ],
    [ '7' ,'Rohan', new Date(2019, 9, 27), new Date(2019, 9, 29) ],
    [ '8' ,'Swati', new Date(2019, 9, 29), new Date(2019, 9, 29) ],
    [ '9' ,'prakash', new Date(2019, 9, 3), new Date(2019, 9, 7) ],
    [ '10' ,'abhishek', new Date(2019, 9, 11), new Date(2019, 9, 11) ],
    [ '11' ,'Pradeep', new Date(2019, 9, 28), new Date(2019, 9, 28) ],
    [ '12' ,'Vishnu', new Date(2019, 9, 25), new Date(2019, 9, 27) ],
    [ '13' ,'neha', new Date(2019, 9, 25), new Date(2019, 9, 28) ],
  ]);

	//draw the chart, like you usually would
  chart.draw(dataTable);
  
  nowLine('timeline');
  
  google.visualization.events.addListener(chart, 'onmouseover', function(obj){
  	if(obj.row == 0){
    	$('.google-visualization-tooltip').css('display', 'none');
		}
    nowLine('timeline');
  })
  
  google.visualization.events.addListener(chart, 'onmouseout', function(obj){
  	nowLine('timeline');
  })
}

function nowLine(div){

  //get the height of the timeline div
      var height;
    $('#' + div + ' rect').each(function(index){
      var x = parseFloat($(this).attr('x'));
      var y = parseFloat($(this).attr('y'));
  
      if(x == 0 && y == 0) {height = parseFloat($(this).attr('height'))}
    })
  
      var nowWord = $('#' + div + ' text:contains("Free")');
  
    nowWord.prev().first().attr('height', height + 'px').attr('width', '  44.8929px').attr('y', '0');
  // add this line to remove the display:none style on the vertical line
          $('#' + div + '  text:contains("Free")').each(function(idx, value) {
              if (idx == 0) {
                  $(value).parent().find("rect").first().removeAttr("style");
              } else if (idx == 1) {
                  $(value).parent().find("rect").first().attr("style", "display:none;");
              }
  
          });
  }