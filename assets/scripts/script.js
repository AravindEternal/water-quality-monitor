var g = []

function getSnapshot(k) {
  var ref = data.ref(k + '/');
  ref.on("value", function (s) {
    g.push(s.val());
  });
}

for (let i = 1; i <= 3; i++) {
  getSnapshot(i);
}

function show() {
  $("#rightpane").show();
  var k = g[parseInt($("[name='station_number']").val())-1];
  $("#name").text(k.Name);
  $("#salinity").text(k.Salinity);
  $("#date").text(k.LastUpdated);
}

$(function () {
  $("#rightpane").hide();
});
