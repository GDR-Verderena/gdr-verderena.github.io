document.addEventListener('DOMContentLoaded', function() {
  const M = window.M;
  var elems = document.querySelectorAll('.sidenav');
  var opts = {
    edge: 'left' // Choose the horizontal origin
  };
  var instances = M.Sidenav.init(elems, opts);
});
