Circles.create({
	id:           'task-complete',
	radius:       75,
	value:        90,  // Changed value from 80 to 90
	maxValue:     100,
	width:        8,
	text:         function(value){return value + '%';},
	colors:       ['#eee', '#28a745'],  // Changed color from '#1D62F0' to '#28a745' (green)
	duration:     400,
	wrpClass:     'circles-wrp',
	textClass:    'circles-text',
	styleWrapper: true,
	styleText:    true
})

$.notify({
	icon: 'la la-bell',
	title: 'Bootstrap notify',
	message: 'Turning standard Bootstrap alerts into "notify" like notifications',
}, {
	type: 'success',
	placement: {
		from: "bottom",
		align: "right"
	},
	time: 1000,
});

// monthlyChart

Chartist.Pie('#monthlyChart', {
	labels: ['40%', '30%', '30%'],  // Changed labels
	series: [40, 30, 30]  // Changed series values
}, {
	plugins: [
		Chartist.plugins.tooltip()
	]
});

// trafficChart
var chart = new Chartist.Line('#trafficChart', {
	labels: [1, 2, 3, 4, 5, 6, 7],
	series: [
		[6, 8, 6, 9, 6, 4, 6],  // Changed values
		[7, 10, 6, 11, 3, 4, 8],  // Changed values
		[3, 8, 5, 11, 8, 7, 3]  // Changed values
	]
}, {
	plugins: [
		Chartist.plugins.tooltip()
	],
	low: 0,
	height: "245px",
});

// salesChart
var dataSales = {
	labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	series: [
		[6, 5, 4, 8, 6, 11, 4, 5, 9, 11, 7, 9],  // Changed values
		[4, 3, 10, 6, 5, 7, 5, 7, 8, 9, 8, 5]  // Changed values
	]
}

var optionChartSales = {
	plugins: [
		Chartist.plugins.tooltip()
	],
	seriesBarDistance: 10,
	axisX: {
		showGrid: false
	},
	height: "245px",
}

var responsiveChartSales = [
	['screen and (max-width: 640px)', {
		seriesBarDistance: 5,
		axisX: {
			labelInterpolationFnc: function (value) {
				return value[0];
			}
		}
	}]
];

Chartist.Bar('#salesChart', dataSales, optionChartSales, responsiveChartSales);

$(".mapcontainer").mapael({
	map : {
		name : "world_countries",
		zoom: {
			enabled: true,
			maxLevel: 10
		},
		defaultPlot: {
			attrs: {
				fill: "#004a9b",
				opacity: 0.6
			}
		}, 
		defaultArea: {
			attrs: {
				fill: "#e4e4e4",
				stroke: "#fafafa"
			},
			attrsHover: {
				fill: "#59d05d"
			},
			text: {
				attrs: {
					fill: "#505444"
				},
				attrsHover: {
					fill: "#000"
				}
			}
		}
	},
	areas: {
		"ID": {
			tooltip: {content: "<b>Indonesia</b> <br /> Tempat Lahir Beta"},
			attrs: {
				fill: "#59d05d"
			},
			attrsHover: {
				fill: "#59d05d"
			}
		},
		"RU": {
			tooltip: {content: "<b>Russia</b>"},
			attrs: {
				fill: "#59d05d"
			},
			attrsHover: {
				fill: "#59d05d"
			}					
		},
		"US": {
			tooltip: {content: "<b>United State</b>"},
			attrs: {
				fill: "#59d05d"
			},
			attrsHover: {
				fill: "#59d05d"
			}					
		},
		"AU": {
			tooltip: {content: "<b>Australia</b>"},
			attrs: {
				fill: "#59d05d"
			},
			attrsHover: {
				fill: "#59d05d"
			}					
		}
	},
});
