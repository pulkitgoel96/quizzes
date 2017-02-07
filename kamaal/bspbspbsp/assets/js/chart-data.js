/**
 * Highcharts plugin to defer initial series animation until the element has appeared. Requieres
 * jQuery.appear.
 *
 * Updated 2016-01-11
 */
(function (H) {
    function deferRender (proceed) {
        var series = this, 
            $renderTo = $(this.chart.container.parentNode);

        // It is appeared, render it
        if ($renderTo.is(':appeared') || !series.options.animation) {
            proceed.call(series);
            
        // It is not appeared, halt renering until appear
        } else  {
            $renderTo.appear(); // Initialize appear plugin
            $renderTo.on('appear', function () {
                proceed.call(series);
            });
        }
    };
    
    H.wrap(H.Series.prototype, 'render', deferRender);
    
}(Highcharts));

$('#chart1').highcharts({  colors: ['#461211', '#CB2826', '#FAA31B', '#FFCC06', '#D9B89C', '#aaeeee', '#ff0066', '#eeaaee',
      '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
    


        chart: {
            type: 'column'
        },

        title: {
            text: 'Reserved Seats won by Party'
        },

        xAxis: {
            categories: ['2007', '2012']
        },

        yAxis: {
            allowDecimals: false,
            min: 0,
            title: {
                text: 'Number of Seats'
            }
        },

        tooltip: {
            formatter: function () {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y + '<br/>' +
                    'Total: ' + this.point.stackTotal;
            }
        },

        plotOptions: {
            column: {
                stacking: 'normal',
				pointPadding: 0.4,
                borderWidth: 0
            }
        },

        series: [{
            name: 'BSP',
            data: [62, 13],
            stack: 'male'
        }, {
            name: 'Samajwadi Party',
            data: [13, 58],
            stack: 'male'
        }, {
            name: 'Others',
            data: [14, 14],
            stack: 'male'
        }]


});

$('#chart2').highcharts({  colors: ['#461211', '#CB2826', '#FAA31B', '#FFCC06', '#D9B89C', '#aaeeee', '#ff0066', '#eeaaee',
      '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],

	chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: 'Total<br>Seats<br>403',
            align: 'center',
            verticalAlign: 'middle',
            y: -20
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white'
                    }
                },
                startAngle: -180,
                endAngle: 180,
                center: ['50%', '50%']
            }
        },
        series: [{
            type: 'pie',
            name: 'Demographic profile of Tickets given by BSP in 2017',
            innerSize: '50%',
            data: [
                ['Dalit',   87],
                ['Muslim',       97],
                ['OBC', 106],
                ['General',    113],
                
                {
                    name: 'Proprietary or Undetectable',
                    y: 0.2,
                    dataLabels: {
                        enabled: false
                    }
                }
            ]
        }]

});




$('#chart3').highcharts({
	  colors: ['#461211', '#CB2826', '#FAA31B', '#FFCC06', '#D9B89C', '#aaeeee', '#ff0066', '#eeaaee',
      '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
        chart: {
            type: 'bar'
        },
        title: {
            text: 'SC POPULATION SUBCASTE BREAKDOWN IN UP'
        },
        xAxis: {
            categories: ['Scheduled Caste']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Population'
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [{
            name: 'Jatav',
            data: [54.3]
        }, {
            name: 'Pasi',
            data: [15.7]
        }, {
            name: 'Dhobi',
            data: [5.8]
        }, {
            name: 'Kori',
            data: [5.5]
        }, {
            name: 'Others',
            data: [18.4]
        }]
});


$(function () {

    var ranges = [
     
       
        ],
        averages = [
            [2000, 7331],
            [2001, 10732],
            [2002, 7927],
			  [2003, 2821],
            [2004, 3785],
			  [2005, 4397],
            [2006, 4960],
			  [2007, 6144],
            [2008, 8009],
			  [2009, 7522],
            [2010, 6272],
			  [2011, 7702],
            [2012, 6202],
			  [2013, 7078],
            [2014, 8075],
			  [2015, 8538]
        ];


   $('#chart4').highcharts({
	     colors: ['#CB2826'],

        title: {
            text: 'Crimes against Scheduled Castes registered by Police in Uttar Pradesh'
        },

        xAxis: {
            type: 'year'
        },

        yAxis: {
            title: {
                text: null
            }
        },

        tooltip: {
            crosshairs: true,
            shared: true,
            valueSuffix: false
        },

        legend: {
        },

        series: [{showInLegend: false,
            name: false,
            data: averages,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: '#CB2826' 
            }
        }, {
            name: 'Range',
            data: ranges,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[0],
            fillOpacity: 0.3,
            zIndex: 0
        }]
    });
});










