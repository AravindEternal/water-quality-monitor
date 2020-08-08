var wqm = angular.module("wqm", []);

var r = []
data.collection("salinity-stations").get().then((k) => {
  k.forEach((d) => {
    r.push(d.data());
  });
});

$(function () {
  $("#rightpane").hide();
});

wqm.controller("main", ($scope) => {
  $scope.stations = r;
  $scope.show = function () {
    $("#rightpane").toggle();
  };
});
