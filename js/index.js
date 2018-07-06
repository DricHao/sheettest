
var api = [
  'https://43d39ad2-02cd-444b-8159-1b0ac07feca7.mock.pstmn.io/'
];
var placeholder = [];
var numberDom = '';
var test = [1,2,4,6,7,3,8,10,9,5];
var numbers = [
  {
    code: 10,
    dom: '<div style="background: #75b850; " class="number-style"><p class="font-style" style="left: 5px !important">10</p></div>'
  },
  {
    code: 2,
    dom: '<div style="background: #579ef2" class="number-style"><p class="font-style">2</p></div>'
  },
  {
    code: 9,
    dom: '<div style="background: #801c16" class="number-style"><p class="font-style">9</p></div>'
  },
  {
    code: 7,
    dom: '<div style="background: #dcdcdc" class="number-style"><p class="font-style">7</p></div>'
  },
  {
    code: 8,
    dom: '<div style="background: #e85149" class="number-style"><p class="font-style">8</p></div>'
  },
  {
    code: 5,
    dom: '<div style="background: #5627e8" class="number-style"><p class="font-style">5</p></div>'
  },
  {
    code: 6,
    dom: '<div style="background: #616161" class="number-style"><p class="font-style">6</p></div>'
  },
  {
    code: 3,
    dom: '<div style="background: #fbea4f" class="number-style"><p class="font-style">3</p></div>'
  },
  {
    code: 1,
    dom: '<div style="background: #ed7e32" class="number-style"><p class="font-style">1</p></div>'
  },
  {
    code: 4,
    dom: '<div style="background: #8bf7fb" class="number-style"><p class="font-style">4</p></div>'
  },
];
for(i=0;i<10;i++) {
  for(j=0;j<10;j++) {
    if(test[i] === numbers[j].code) {
      placeholder.push(numbers[j].dom)
    }
  }
}
for(i=0;i<10;i++) {
  numberDom += placeholder[i]
}
console.log(numberDom)
$('#numbers').append(numberDom)

function Status(code) {
  $.get(api[code],function(datas,status) {
    var result = JSON.parse(datas);
    var time1 = Number(result.endTime);
    var time2 = Number(result.startTime); 
    // var arr = [];
    // for(i=time2;i++;i<time1+1) {
    //   arr.push(i)
    // }
    // console.log(time1)
    var chart = Highcharts.chart('container', {
      chart: {
          type: 'spline',
          width: '1400'
      },
      title: {
          text: '北京PK10走势图',
          align: 'left'
      },
      xAxis: {
        categories: result.time
      },
      yAxis: {
        title: '',
        tickPositions: [0, 5, 10]
        // categories: [0,150,200]
      },
      tooltip: {
        useHTML: true,
        headerFormat: '<span style=";">{point.key}期:{point.y}</span>',
        backgroundColor: '#666',   // 背景颜色
        // borderColor: 'black',         // 边框颜色
        borderRadius: 10,             // 边框圆角
        borderWidth: 0,
        display: 'flex', 
        shadow: false,                 
        animation: false,      
        pointFormatter: function() {
          return '<span style=" color: #fff;>期<span>';
        },
        style: {  
            width: '70px',
            height: '30px',   
                      // 文字内容相关样式
            color: "rgba(255,255,255,0.8)",
            fontSize: "12px",
            fontWeight: "blod",
            fontFamily: "Courir new"
        }
      },
      plotOptions: {
        spline: {
            dataLabels: {
                // 开启数据标签
                // color: '#666',
                crop: false,
                overflow: 'none',
                verticalAlign: 'bottom',
                enabled: true          
            },
            // 关闭鼠标跟踪，对应的提示框、点击事件会失效
            enableMouseTracking: true
        }
    },
      series: [
        {
          name: '',
          color: '#5073a3',
          data: result.data
        }
      ]
      
    });
  })
}
