document.addEventListener('DOMContentLoaded', function () {

  function applyStyle(el, prop, value) {
    el.style[prop] = value;
  }

  document.querySelectorAll('*').forEach(function (el) {
    el.classList.forEach(function (cls) {

      // Height and Width (h- and w-)
      let hwMatch = cls.match(/^(h|w)-([\d.]+)(px|%|vh|dvh|em|rem|vw)$/);
      if (hwMatch) {
        applyStyle(el, hwMatch[1] === 'h' ? 'height' : 'width', hwMatch[2] + hwMatch[3]);
      }

      // Padding and Margin (p- and m-)
      let pmMatch = cls.match(/^(p|m)(?:-([tblrxy]))?-([\d.]+)(px|%|em|rem)$/);
      if (pmMatch) {
        let type = pmMatch[1] === 'p' ? 'padding' : 'margin';
        let direction = pmMatch[2];
        let value = pmMatch[3] + pmMatch[4];
        if (direction) {
          switch (direction) {
            case 't': applyStyle(el, type + 'Top', value); break;
            case 'b': applyStyle(el, type + 'Bottom', value); break;
            case 'l': applyStyle(el, type + 'Left', value); break;
            case 'r': applyStyle(el, type + 'Right', value); break;
            case 'x': applyStyle(el, type + 'Left', value); applyStyle(el, type + 'Right', value); break;
            case 'y': applyStyle(el, type + 'Top', value); applyStyle(el, type + 'Bottom', value); break;
          }
        } else {
          applyStyle(el, type, value);
        }
      }

      // Border Radius (round-)
      let roundMatch = cls.match(/^round-([\d.]+)(px|em|rem|%)$/);
      if (roundMatch) {
        applyStyle(el, 'borderRadius', roundMatch[1] + roundMatch[2]);
      }

      // Font Size (text-)
      let textMatch = cls.match(/^text-([\d.]+)(px|em|rem|%)$/);
      if (textMatch) {
        applyStyle(el, 'fontSize', textMatch[1] + textMatch[2]);
      }

      // Text Color (c-)
      let colorMatch = cls.match(/^c-(.+)$/);
      if (colorMatch) {
        applyStyle(el, 'color', colorMatch[1]);
      }

      // Background Color (bg-)
      let bgColorMatch = cls.match(/^bg-(.+)$/);
      if (bgColorMatch) {
        applyStyle(el, 'backgroundColor', bgColorMatch[1]);
      }
      
        // Gap (gap-) , added vw
      let gapMatch = cls.match(/^gap-([\d.]+)(px|em|rem|%|vh|vw)$/);
        if (gapMatch) {
            applyStyle(el, 'gap', gapMatch[1] + gapMatch[2]);
        }

        // Top, Bottom, Left, Right (t-, b-, l-, r-)
        let offsetMatch = cls.match(/^(t|b|l|r)-([\d.]+)(px|%|em|rem|vh|vw)$/);
        if (offsetMatch) {
            let propMap = {
                't': 'top',
                'b': 'bottom',
                'l': 'left',
                'r': 'right'
            };
            applyStyle(el, propMap[offsetMatch[1]], offsetMatch[2] + offsetMatch[3]);
        }
    });
  });
});
