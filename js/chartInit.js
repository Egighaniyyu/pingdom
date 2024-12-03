const plt = document.getElementById("pageLoadTime");

new Chart(plt, {
  type: "line",
  data: {
    labels: [1, 2, 3, 4, 5, 6, 7],
    datasets: [
      {
        label: "Page Load Time",
        data: [0.24, 0.45, 0.3, 0.87, 0.67, 0.98, 1],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const rs = document.getElementById("redirectStatus");

new Chart(rs, {
  type: "bar",
  data: {
    // labels: ["http://bcanta.com/valleygame1_pxl/", " http://fe.r3ste.mobi/mk/gamvalley/game1_non.phpaff_sub=", " http://fe.r3ste.mobi/mk/gamvalley/game1_non.phpaff_sub=", " https://auth2.telkomsel.com/transaksi/tauthwcotoken=lmnms2tscf9e071tiw0c"],
    labels: ["link 1", "link 2", "link 3", "link 4"],
    datasets: [
      {
        label: "My First Dataset",
        data: [
          [0, 0.187],
          [0.187, 0.397],
          [0.397, 0.854],
          [0.854, 1],
        ],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)"],
        barPercentage: 0.2,
      },
    ],
  },
  options: {
    indexAxis: "y",
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const dns = document.getElementById("dnsCheckStartStatus");

new Chart(dns, {
  type: "bar",
  data: {
    // labels: ["http://bcanta.com/valleygame1_pxl/", " http://fe.r3ste.mobi/mk/gamvalley/game1_non.phpaff_sub=", " http://fe.r3ste.mobi/mk/gamvalley/game1_non.phpaff_sub=", " https://auth2.telkomsel.com/transaksi/tauthwcotoken=lmnms2tscf9e071tiw0c"],
    labels: ["link 1", "link 2", "link 3", "link 4"],
    datasets: [
      {
        label: "My First Dataset",
        data: [
          [0, 0.187],
          [0.187, 0.397],
          [0.397, 0.854],
          [0.854, 1],
        ],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)"],
        barPercentage: 0.2,
      },
    ],
  },
  options: {
    indexAxis: "y",
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
