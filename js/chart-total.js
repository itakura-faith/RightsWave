var ctx = document.getElementById("chart-total").getContext('2d');
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels:  ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    datasets: [
      {
        label: "songA",
        data: [6, 3, 5, 10, 9, 5, 15, 10, 9, 7, 11, 8],
        backgroundColor: "rgba(60, 60, 255, 1)"
      },
      {
        label: "songB",
        data: [3, 5, 7, 5, 7, 6, 5, 8, 6, 3, 5, 7],
        backgroundColor: "rgba(60, 255, 60, 1)"
      },
      {
        label: "songC",
        data: [10, 9, 7, 8, 6, 3, 5, 7, 5, 7, 6, 5],
        backgroundColor: "rgba(255, 60, 60, 1)"
      }
    ]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      fontSize: 20,
      text: "積上げ棒グラフ"
    },
    legend: {
      position: 'bottom'
    },            
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      }
    }
  }
});

var ctx = document.getElementById("chart-total-song_a-1year").getContext('2d');
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels:  ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    datasets: [
      {
        label: "songA",
        data: [6, 3, 5, 10, 9, 5, 15, 10, 9, 7, 11, 8],
        backgroundColor: "rgba(60, 60, 255, 1)"
      }
    ]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      fontSize: 20,
      text: "積上げ棒グラフ"
    },
    legend: {
      position: 'bottom'
    },            
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      }
    }
  }
});

var ctx = document.getElementById("chart-total-song_b-1year").getContext('2d');
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels:  ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    datasets: [
      {
        label: "songB",
        data: [3, 5, 7, 5, 7, 6, 5, 8, 6, 3, 5, 7],
        backgroundColor: "rgba(60, 255, 60, 1)"
      }
    ]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      fontSize: 20,
      text: "積上げ棒グラフ"
    },
    legend: {
      position: 'bottom'
    },            
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      }
    }
  }
});

var ctx = document.getElementById("chart-total-song_c-1year").getContext('2d');
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels:  ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    datasets: [
      {
        label: "songC",
        data: [10, 9, 7, 8, 6, 3, 5, 7, 5, 7, 6, 5],
        backgroundColor: "rgba(255, 60, 60, 1)"
      }
    ]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      fontSize: 20,
      text: "積上げ棒グラフ"
    },
    legend: {
      position: 'bottom'
    },            
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      }
    }
  }
});







var ctx = document.getElementById("chart-total-6month").getContext('2d');
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels:  ["7月", "8月", "9月", "10月", "11月", "12月"],
    datasets: [
      {
        label: "songA",
        data: [15, 10, 9, 7, 11, 8],
        backgroundColor: "rgba(60, 60, 255, 1)"
      },
      {
        label: "songB",
        data: [5, 8, 6, 3, 5, 7],
        backgroundColor: "rgba(60, 255, 60, 1)"
      },
      {
        label: "songC",
        data: [5, 7, 5, 7, 6, 5],
        backgroundColor: "rgba(255, 60, 60, 1)"
      }
    ]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      fontSize: 20,
      text: "積上げ棒グラフ"
    },
    legend: {
      position: 'bottom'
    },            
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      }
    }
  }
});

var ctx = document.getElementById("chart-total-song_a-6month").getContext('2d');
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels:  ["7月", "8月", "9月", "10月", "11月", "12月"],
    datasets: [
      {
        label: "songA",
        data: [15, 10, 9, 7, 11, 8],
        backgroundColor: "rgba(60, 60, 255, 1)"
      }
    ]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      fontSize: 20,
      text: "積上げ棒グラフ"
    },
    legend: {
      position: 'bottom'
    },            
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      }
    }
  }
});

var ctx = document.getElementById("chart-total-song_b-6month").getContext('2d');
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels:  ["7月", "8月", "9月", "10月", "11月", "12月"],
    datasets: [
      {
        label: "songB",
        data: [5, 8, 6, 3, 5, 7],
        backgroundColor: "rgba(60, 255, 60, 1)"
      }
    ]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      fontSize: 20,
      text: "積上げ棒グラフ"
    },
    legend: {
      position: 'bottom'
    },            
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      }
    }
  }
});

var ctx = document.getElementById("chart-total-song_c-6month").getContext('2d');
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels:  ["7月", "8月", "9月", "10月", "11月", "12月"],
    datasets: [
      {
        label: "songC",
        data: [5, 7, 5, 7, 6, 5],
        backgroundColor: "rgba(255, 60, 60, 1)"
      }
    ]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      fontSize: 20,
      text: "積上げ棒グラフ"
    },
    legend: {
      position: 'bottom'
    },            
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      }
    }
  }
});

