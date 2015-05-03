(function() {

  var init = function() {

    var accordEl = document.getElementById('accord');

    var accordOpts = new OriDomi(accordEl, {
      vPanels: 4,
      hPanels: 4,
      perspective: 500,
      shading: true,
      touchEnabled: false
    });

    // This value is in percent: Positive folds outward, Negative folds inwards, 0 is no fold at all
    accordOpts.accordion(0);

  };

  document.addEventListener('DOMContentLoaded',init, false);

})();
