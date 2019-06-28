/* Reports Chart */

var chartreports = document.getElementById('ReportsChart').getContext("2d");

var gradientStroke = chartreports.createLinearGradient(200, 0, 100, 0);
gradientStroke.addColorStop(0, "rgba(58, 233, 245, 1)");
gradientStroke.addColorStop(1, "rgba(18, 216, 227, 1)");
 

var gradientFill = chartreports.createLinearGradient(0, 0, 0, 350);
gradientFill.addColorStop(0, "rgba(128, 182, 244, 0.5)");
gradientFill.addColorStop(1, "rgba(128, 182, 244, 0)");

var ReportsChart = new Chart(chartreports, {
    type: 'line',
    data: {
        labels: ["SU", "MO", "TU", "WE", "TH", "FR", "SA"],
        datasets: [{
            label: "Reports",
            borderColor: "#5616f5",
            pointBorderColor: "#5616f5",
            pointBackgroundColor: "rgba(255, 255, 255, 1)",
            pointHoverBackgroundColor: "rgba(128, 182, 244, 1)",
            pointHoverBorderColor: gradientStroke,
            pointBorderWidth: 1,
            pointHoverRadius: 3,
            pointHoverBorderWidth: 1,
            pointRadius: 2,
            fill: true,
			backgroundColor: gradientFill,
            borderWidth: 1,
            data: [1, 10, 2, 5, 1, 7, 0]
        }
		]
    },
    options: {          
        legend: {
            position: "top",
            labels: {
                boxWidth: 15,
				padding: 5
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    display: false
                },
                gridLines: {
                    drawTicks: false,
                    display: false,
					drawBorder: false
                }

            }],
            xAxes: [{
                gridLines: {
                    zeroLineColor: "transparent",
					display: false,
					drawBorder: false
                },
                ticks: {
                    padding: 0,
                    fontColor: "rgba(0,0,0,0.2)",
                    fontStyle: "bold"
                }
            }]
        }
    }
});




/* Blood pressure Chart */

var chartbp = document.getElementById('BpChart').getContext("2d");

var gradientStrokebp = chartbp.createLinearGradient(200, 0, 100, 0);
gradientStrokebp.addColorStop(1, "rgba(88, 23, 245, 1)");
gradientStrokebp.addColorStop(0, "rgba(180, 70, 244, 1)");

var BpChart = new Chart(chartbp, {
    type: 'line',
    data: {
        labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUNE", "JULY", "AUG", "SEP"],
        datasets: [{
            label: "Blood Pressure",
            borderColor: gradientStrokebp,
            pointBorderColor: "rgba(180, 70, 244, 1)",
            pointBackgroundColor: "rgba(180, 70, 244, 1)",
            pointHoverBackgroundColor: "rgba(180, 70, 244, 1)",
            pointHoverBorderColor: gradientStrokebp,
            pointBorderWidth: 0,
            pointHoverRadius: 3,
            pointHoverBorderWidth: 1,
            pointRadius: 3,
            fill: false,
            borderWidth: 3,
            data: [80, 110, 30, 130, 70, 20, 110, 30, 130]
        }
		]
    },
    options: {  
        layout: {
            padding: {
                left: 10,
                right: 10,
                top: 0,
                bottom: 0
            }
        },
        legend: {
            display:false
        },
        scales: {
            yAxes: [{
                ticks: {
                    display: false,
					min: 0,
					max: 150
                },
                gridLines: {
                    drawTicks: false,
                    display: false,
					drawBorder: false
                }

            }],
            xAxes: [{
                gridLines: {
                    drawTicks: false,
                    display: false,
					drawBorder: false
                },
                ticks: {
                    display: false,
                }
            }]
        }
    }
});

/* Heart Rate Chart */

var charthr = document.getElementById('HrChart').getContext("2d");

var gradientStrokehr = charthr.createLinearGradient(200, 0, 100, 0);
gradientStrokehr.addColorStop(0, "rgba(58, 233, 245, 1)");
gradientStrokehr.addColorStop(1, "rgba(18, 216, 227, 1)");

var HrChart = new Chart(charthr, {
    type: 'line',
    data: {
        labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUNE", "JULY", "AUG", "SEP"],
        datasets: [{
            label: "Heart Rate",
            borderColor: gradientStrokehr,
            pointBorderColor: "rgba(58, 233, 245, 1)",
            pointBackgroundColor: "rgba(58, 233, 245, 1)",
            pointHoverBackgroundColor: "rgba(180, 70, 244, 1)",
            pointHoverBorderColor: gradientStrokehr,
            pointBorderWidth: 0,
            pointHoverRadius: 3,
            pointHoverBorderWidth: 1,
            pointRadius: 3,
            fill: false,
            borderWidth: 3,
            data: [20, 90, 70, 120, 60, 20, 80, 130, 20]
        }
		]
    },
    options: {  
        layout: {
            padding: {
                left: 10,
                right: 10,
                top: 0,
                bottom: 0
            }
        },
        legend: {
            display:false
        },
        scales: {
            yAxes: [{
                ticks: {
                    display: false,
					min: 0,
					max: 150
                },
                gridLines: {
                    drawTicks: false,
                    display: false,
					drawBorder: false
                }

            }],
            xAxes: [{
                gridLines: {
                    drawTicks: false,
                    display: false,
					drawBorder: false
                },
                ticks: {
                    display: false,
                }
            }]
        }
    }
});

/* Glucos Chart */

var chartgl = document.getElementById('GlChart').getContext("2d");

var gradientStrokegl = chartgl.createLinearGradient(200, 0, 100, 0);
gradientStrokegl.addColorStop(0, "rgba(255, 92, 203, 1)");
gradientStrokegl.addColorStop(1, "rgba(253, 133, 168, 1)"); 

var GlChart = new Chart(chartgl, {
    type: 'line',
    data: {
        labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUNE", "JULY", "AUG", "SEP"],
        datasets: [{
            label: "Glucose",
            borderColor: gradientStrokegl,
            pointBorderColor: "rgba(255, 92, 203, 1)",
            pointBackgroundColor: "rgba(255, 92, 203, 1)",
            pointHoverBackgroundColor: "rgba(255, 92, 203, 1)",
            pointHoverBorderColor: gradientStrokegl,
            pointBorderWidth: 0,
            pointHoverRadius: 3,
            pointHoverBorderWidth: 1,
            pointRadius: 3,
            fill: false,
            borderWidth: 3,
            data: [50, 130, 20, 145, 10, 110, 60, 90, 40]
        }
		]
    },
    options: {  
        layout: {
            padding: {
                left: 10,
                right: 10,
                top: 0,
                bottom: 0
            }
        },
        legend: {
            display:false
        },
        scales: {
            yAxes: [{
                ticks: {
                    display: false,
					min: 0,
					max: 150
                },
                gridLines: {
                    drawTicks: false,
                    display: false,
					drawBorder: false
                }

            }],
            xAxes: [{
                gridLines: {
                    drawTicks: false,
                    display: false,
					drawBorder: false
                },
                ticks: {
                    display: false,
                }
            }]
        }
    }
});

/* Cholesterol Chart */

var chartcl = document.getElementById('ClChart').getContext("2d");

var gradientStrokecl = chartcl.createLinearGradient(200, 0, 100, 0);
gradientStrokecl.addColorStop(0, "rgba(190, 190, 190, 1)");
gradientStrokecl.addColorStop(1, "rgba(128, 128, 128, 1)"); 

var ClChart = new Chart(chartcl, {
    type: 'line',
    data: {
        labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUNE", "JULY", "AUG", "SEP"],
        datasets: [{
            label: "Cholesterol",
            borderColor: gradientStrokecl,
            pointBorderColor: "rgba(54, 54, 54, 1)",
            pointBackgroundColor: "rgba(54, 54, 54, 1)",
            pointHoverBackgroundColor: "rgba(54, 54, 54, 1)",
            pointHoverBorderColor: gradientStrokecl,
            pointBorderWidth: 0,
            pointHoverRadius: 3,
            pointHoverBorderWidth: 1,
            pointRadius: 3,
            fill: false,
            borderWidth: 3,
            data: [80, 70, 90, 115, 70, 50, 110, 60, 120]
        }
		]
    },
    options: {  
        layout: {
            padding: {
                left: 10,
                right: 10,
                top: 0,
                bottom: 0
            }
        },
        legend: {
            display:false
        },
        scales: {
            yAxes: [{
                ticks: {
                    display: false,
					min: 0,
					max: 150
                },
                gridLines: {
                    drawTicks: false,
                    display: false,
					drawBorder: false
                }

            }],
            xAxes: [{
                gridLines: {
                    drawTicks: false,
                    display: false,
					drawBorder: false
                },
                ticks: {
                    display: false,
                }
            }]
        }
    }
});
