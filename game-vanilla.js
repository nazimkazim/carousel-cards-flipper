var radius = 100; // adjust to move out items in and out
var fields = document.querySelectorAll('.item'),
  container = document.getElementById('container'),
  width = container.style.width,
  height = container.style.height;
var angle = 0,
  step = (2 * Math.PI) / fields.length;
/* fields.each(function() {
  var x = Math.round(
    width / 2 + radius * Math.cos(angle) - $(this).width() / 2
  );
  var y = Math.round(
    height / 2 + radius * Math.sin(angle) - $(this).height() / 2
  );
  if (window.console) {
    console.log($(this).text(), x, y);
  }
  $(this).css({
    left: x + 'px',
    top: y + 'px'
  });
  angle += step;
}); */

fields.forEach(() => {
  console.log(this);
  var x = Math.round(width / 2 + radius * Math.cos(angle) - 30 / 2);

  var y = Math.round(height / 2 + radius * Math.cos(angle) - 30 / 2);

  this.innerHTML = `.rot {
    left:${x} + 'px',
    top:${y} + 'px'
  }
  `;
  angle += step;
});
