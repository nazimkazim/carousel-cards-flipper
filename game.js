const cards = [
  { front: 'Apple', back: 'Яблоко' },
  { front: 'Cherry', back: 'Вишня' },
  { front: 'Melon', back: 'Арбуз' },
  { front: 'Car', back: 'Машина' },
  { front: 'Book', back: 'Книга' },
  { front: 'Pen', back: 'Ручка' },
  { front: 'Nice', back: 'Прекрасный' },
  { front: 'TV', back: 'Телевизор' },
  { front: 'Mobile', back: 'Мобильный' },
  { front: 'Curious', back: 'Любопытный' }
];

var container = document.getElementById('container');

const createCard = () => {
  for (var card in cards) {
    // Create an item
    var item = document.createElement('div');
    // Add class to item div
    item.className = 'item';
    // Create flip card inner elem
    var flipCardInner = document.createElement('div');
    // Add 'flip-card-inner' class
    flipCardInner.className = 'flip-card-inner';
    // Create front card elem
    var frontCardElem = document.createElement('div');
    // Add 'flip-card-front' class
    frontCardElem.className = 'flip-card-front';
    // Creat front card text
    var frontCardText = document.createTextNode(cards[card].front);
    // Append front card text to frontcard element
    frontCardElem.appendChild(frontCardText);
    // Create back card elem
    var backCardElem = document.createElement('div');
    // Add 'flip-card-front' class
    backCardElem.className = 'flip-card-back';
    // Creat back card text
    var backCardText = document.createTextNode(cards[card].back);
    // Append front card text to frontcard element
    backCardElem.appendChild(backCardText);
    // Append front card elem to flip card inner
    flipCardInner.appendChild(frontCardElem);
    // Append back card elem to flip card inner
    flipCardInner.appendChild(backCardElem);
    // Append flip card inner to item
    item.appendChild(flipCardInner);
    container.appendChild(item);
    //console.log(container);
  }
  //console.log(container);
};

createCard();

$('.item .flip-card-inner').click(function() {
  $(this)
    .closest('.item')
    .toggleClass('hover');
  $(this).css('transform, rotateX(180deg)');
});

var radius = 250; // adjust to move out items in and out
var inclination = 0;
var fields = $('.item'),
  container = $('#container'),
  width = container.width(),
  height = container.height();
var angle = 0,
  step = (2 * Math.PI) / fields.length;

fields.each(function() {
  var x = Math.round(
    width / 2 + radius * Math.cos(angle) - $(this).width() / 2
  );
  var y = Math.round(
    height / 2 + radius * Math.sin(angle) - $(this).height() / 2
  );
  if (window.console) {
    //console.log($(this).text(), x, y);
  }
  $(this).css({
    left: x + 'px',
    top: y + 'px',
    WebkitTransform: 'rotate(' + inclination + 'deg)'
  });
  angle += step;
  inclination += 0;
});
