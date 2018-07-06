var api = [];
var output = '';
var output1 = '';
var test = [12,2,23,34,12,31,31,21,11,2];
var test1 = [1,2,3,2,1,1,11,23,22,21];
//todo需要ajax实现
for(i=0;i<10;i++) {
  output+='<li class="spe-height"><p class="spe-line">'+test[i]+'</p></li>';
  output1+='<li class="spe-height"><p class="spe-line">'+test1[i]+'</p></li>';
}

$('#sign').append(output);
$('#sign1').append(output1); 