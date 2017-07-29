var num = 0;
$('#btn').click(function(){
   num = Number(num) + 1;
    $('.print-data>h2').text(num);
});
