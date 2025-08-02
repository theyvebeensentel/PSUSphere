document.addEventListener('DOMContentLoaded', function () {
  // Line Chart
  var lineChartCtx = document.getElementById('lineChart').getContext('2d');
  var lineChart = new Chart(lineChartCtx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        label: 'Active Users',
        borderColor: '#1d7af3',
        pointBorderColor: '#FFF',
        pointBackgroundColor: '#1d7af3',
        pointBorderWidth: 2,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 1,
        pointRadius: 4,
        backgroundColor: 'transparent',
        fill: true,
        borderWidth: 2,
        data: [30, 40, 45, 50, 49, 60, 70, 91, 125, 140, 160, 180]
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: 'bottom',
        labels: {
          padding: 10,
          fontColor: '#1d7af3'
        }
      },
      tooltips: {
        bodySpacing: 4,
        mode: 'nearest',
        intersect: 0,
        position: 'nearest',
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10
      },
      layout: {
        padding: { left: 15, right: 15, top: 15, bottom: 15 }
      }
    }
  });

  // Bar Chart
  var barChartCtx = document.getElementById('barChart').getContext('2d');
  var barChart = new Chart(barChartCtx, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        label: 'Sales',
        backgroundColor: 'rgb(23, 125, 255)',
        borderColor: 'rgb(23, 125, 255)',
        data: [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

  // Pie Chart
  var pieChartCtx = document.getElementById('pieChart').getContext('2d');
  var pieChart = new Chart(pieChartCtx, {
    type: 'pie',
    data: {
      datasets: [{
        data: [50, 20, 30],
        backgroundColor: ['#1d7af3', '#f3545d', '#fdaf4b'],
        borderWidth: 0
      }],
      labels: ['Blue', 'Red', 'Yellow']
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: 'bottom',
        labels: {
          fontColor: 'rgb(154, 154, 154)',
          fontSize: 11,
          usePointStyle: true,
          padding: 20
        }
      },
      tooltips: false,
      layout: {
        padding: {
          left: 20,
          right: 20,
          top: 20,
          bottom: 20
        }
      }
    }
  });

  // Doughnut Chart
  var doughnutChartCtx = document.getElementById('doughnutChart').getContext('2d');
  var doughnutChart = new Chart(doughnutChartCtx, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [10, 20, 30],
        backgroundColor: ['#f3545d', '#fdaf4b', '#1d7af3']
      }],
      labels: ['Red', 'Yellow', 'Blue']
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: 'bottom'
      },
      layout: {
        padding: {
          left: 20,
          right: 20,
          top: 20,
          bottom: 20
        }
      }
    }
  });

  // Additional Line Chart 2
  var lineChart2Ctx = document.getElementById('lineChart2').getContext('2d');
  var lineChart2 = new Chart(lineChart2Ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        label: 'New Users',
        borderColor: '#f3545d',
        pointBorderColor: '#FFF',
        pointBackgroundColor: '#f3545d',
        pointBorderWidth: 2,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 1,
        pointRadius: 4,
        backgroundColor: 'transparent',
        fill: true,
        borderWidth: 2,
        data: [20, 30, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85]
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: 'bottom',
        labels: {
          padding: 10,
          fontColor: '#f3545d'
        }
      },
      tooltips: {
        bodySpacing: 4,
        mode: 'nearest',
        intersect: 0,
        position: 'nearest',
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10
      },
      layout: {
        padding: { left: 15, right: 15, top: 15, bottom: 15 }
      }
    }
  });

  // Additional Bar Chart 2
  var barChart2Ctx = document.getElementById('barChart2').getContext('2d');
  var barChart2 = new Chart(barChart2Ctx, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        label: 'Revenue',
        backgroundColor: 'rgb(243, 84, 93)',
        borderColor: 'rgb(243, 84, 93)',
        data: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
});
