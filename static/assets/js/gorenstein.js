// Gorenstein property of the tautological cohomology ring of Mbar_{g,n}.
// The positive region is Table 2 and Theorem 8 of Canning,
// arXiv:2406.10516. The negative region is Theorem 2 of the same paper.
// Values: yes, no, unknown.
var gorenstein = {};

(function() {
  var positiveBound = { 1: Infinity, 2: 20, 3: 12, 4: 10, 5: 8, 6: 6, 7: 4, 8: 1 };

  for (var g = 1; g <= 26; g++) {
    for (var n = 0; n <= 20; n++) {
      // The compactified moduli stack is only defined in the stable range.
      if (2 * g - 2 + n <= 0) continue;

      var state = "unknown";
      if (g in positiveBound && n < positiveBound[g])
        state = "yes";
      else if (g >= 2 && 2 * g + n >= 24)
        state = "no";

      gorenstein[g + "," + n] = state;
    }
  }
})();
