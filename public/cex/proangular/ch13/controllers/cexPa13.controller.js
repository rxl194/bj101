// Invoke 'strict' JavaScript mode
'use strict';

var app = angular.module("cexPa13App");
app.service("cexPa13ZipCodesSrvs", function($rootScope) {
  return {
    setZipCode: function(type, zip) {
      this[type] = zip;
      $rootScope.$broadcast("zipCodeUpdated", {
          type: type, zipCode: zip
      });
    }
  }
})
.controller("cexPa13SimpleCtrl", function ($scope, cexPa13ZipCodesSrvs) { 

  $scope.cities = ["London", "New York", "Paris"];
  $scope.city = "London";
  $scope.getCountry = function (city) {
    switch (city) {
      case "London":
        return "UK";
      case "New York":
        return "USA";
    }
  }
  
  $scope.addresses = {};
  
  $scope.$on("zipCodeUpdated", function (event, args) {
    $scope[args.type] = args.zipCode;
  });  

  $scope.setAddress = function (type, zip) {
    console.log("Type: " + type + " " + zip);
    cexPa13ZipCodesSrvs.setZipCode(type, zip);
//    $scope.addresses[type] = zip;
//    $rootScope.$broadcast("zipCodeUpdated", {
//      type: type, zipCode: zip
//    }
//    );    
  }

  $scope.copyAddress = function () {
    $scope.shippingZip = $scope.billingZip;
  }  
                
});

app.controller("cexPa13TopLevelCtrl", function ($scope) {
 
  $scope.dataValue = "Hello, Adam";

  $scope.reverseText = function () {
      $scope.dataValue = $scope.dataValue.split("").reverse().join("");
  }

  $scope.changeCase = function () {
      var result = [];
      angular.forEach($scope.dataValue.split(""), function (char, index) {
          result.push(index % 2 == 1
              ? char.toString().toUpperCase() : char.toString().toLowerCase());
      });
      $scope.dataValue = result.join("");
  };
});

app.controller("cexPa13FirstChildCtrl", function ($scope) {
  $scope.changeCase = function () {
   $scope.dataValue = $scope.dataValue.toUpperCase();
  };
});

app.controller("cexPa13SecondChildCtrl", function ($scope) { 
  $scope.changeCase = function () {
   $scope.dataValue = $scope.dataValue.toLowerCase();
  };

  $scope.shiftFour = function () {
    var result = [];
    angular.forEach($scope.dataValue.split(""), function (char, index) {
        result.push(index < 4 ? char.toUpperCase() : char);
    });
    $scope.dataValue = result.join("");
  }
});

app.controller("cexPa13TopDataInheritanceCtrl", function ($scope) {
 
  $scope.data = {
    dataValue: "Hello, Adam"    
  };

  $scope.reverseText = function () {
      $scope.data.dataValue = $scope.data.dataValue.split("").reverse().join("");
  }

  $scope.changeCase = function () {
      var result = [];
      angular.forEach($scope.data.dataValue.split(""), function (char, index) {
          result.push(index % 2 == 1
              ? char.toString().toUpperCase() : char.toString().toLowerCase());
      });
      $scope.data.dataValue = result.join("");
  };
});

app.controller("cexPa13FirstDataInheritanceCtrl", function ($scope) {
  $scope.changeCase = function () {
   $scope.data.dataValue = $scope.data.dataValue.toUpperCase();
  };
});

app.controller("cexPa13SecondDataInheritanceCtrl", function ($scope) { 
  $scope.changeCase = function () {
   $scope.data.dataValue = $scope.data.dataValue.toLowerCase();
  };

  $scope.shiftFour = function () {
    var result = [];
    angular.forEach($scope.data.dataValue.split(""), function (char, index) {
        result.push(index < 4 ? char.toUpperCase() : char);
    });
    $scope.data.dataValue = result.join("");
  }
});

app.controller("cexPa13ScopeLessCtrl", function () {
  this.dataValue = "Hello, Adam";

  this.reverseText = function () {
    this.dataValue = this.dataValue.split("").reverse().join("");
  }
});

app.controller("cexPa13L15Ctrl", function ($scope) {
  $scope.buttonEnabled = true;
  $scope.clickCounter = 0;

  $scope.handleClick = function () {
    $scope.clickCounter++;
  }
  
  $scope.$watch('buttonEnabled', function (newValue) {
    $('#jqui button').button({
      disabled: !newValue
    });
  });  
});


