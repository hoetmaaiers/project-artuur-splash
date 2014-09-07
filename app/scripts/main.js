// console.log('\'Allo \'Allo!');

$(document).ready(function() {

  // Elements to inject
  var mySVGsToInject = document.querySelectorAll('img.svg-inject');

  // Do the injection
  SVGInjector(mySVGsToInject);

});
