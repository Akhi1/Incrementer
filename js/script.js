var theTotal = 0;
$('#btn').click(function(){
   theTotal = Number(theTotal) + 1;
    $('.print-data').text(theTotal);        
});

$('.print-data').text(theTotal);        
