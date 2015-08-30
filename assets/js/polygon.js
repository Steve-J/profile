(function(Modernizr) {

  var name = 'polygon',
    value = 'polygon(50% 0%, 0% 100%, 100% 100%)',
    prop;
  Modernizr.addTest('cssclippath' + name, function() {
    // Try using window.CSS.supports
    if ('CSS' in window && 'supports' in window.CSS) {
      for (var i = 0; i < Modernizr._prefixes.length; i++) {
        prop = Modernizr._prefixes[i] + 'clip-path'

        if (window.CSS.supports(prop, value)) {
          return true;
        }
      }
      return false;
    }
    // Otherwise, use Modernizr.testStyles and examine the property manually
    return Modernizr.testStyles('#modernizr { ' + Modernizr._prefixes.join('clip-path:' + value + '; ') + ' }', function(elem, rule) {
      var style = getComputedStyle(elem),
        clip = style.clipPath;

      if (!clip || clip == "none") {
        clip = false;

        for (var i = 0; i < Modernizr._domPrefixes.length; i++) {
          test = Modernizr._domPrefixes[i] + 'ClipPath';
          if (style[test] && style[test] !== "none") {
            clip = true;
            break;
          }
        }
      }

      return Modernizr.testProp('clipPath') && clip;
    });
  });

})(Modernizr);
