function clock() {
    var data = new Date();
    var hour = data.getHours();
    var min = data.getMinutes();
    var sec = data.getSeconds();
    var now = "clock: "+hour+
    ((min<10)?":0":":")+min+
    ((sec<10)?":0":":")+sec;
    document.getElementById("time").innerHTML = now;
    setTimeout("clock()", 1000);
  }
  clock();