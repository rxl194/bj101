// Invoke 'strict' JavaScript mode
'use strict';

angular.module("cexPa14App")
.filter("cexPa14LabelCase", function () {
  return function (value, reverse) {
    if (angular.isString(value)) {
      var intermediate = reverse ? value.toUpperCase() : value.toLowerCase();
      return (reverse ? intermediate[0].toLowerCase() :
          intermediate[0].toUpperCase()) + intermediate.substr(1);
    } else {
      return value;
    }
  };
})
.filter("cexPa14Skip", function () {
  return function (data, count) {
    if (angular.isArray(data) && angular.isNumber(count)) {
      if (count > data.length || count < 1) {
          return data;
      } else {
          return data.slice(count);
      }
    } else {
      return data;
    }
  }
})
.filter("cexPa14Take", function ($filter) {
  return function (data, skipCount, takeCount) {
    var skippedData = $filter("cexPa14Skip")(data, skipCount);
    return $filter("limitTo")(skippedData, takeCount);
  }
});

