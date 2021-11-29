// Declaraciones

const windowWidth = window.innerWidth;
const cellHeight = windowWidth / 100;
const windowHeight= window.innerHeight - window.innerHeight / 100;
const cellY = Math.ceil(windowHeight/cellHeight);

let rows = cellY;
let columns = 100;

const doc = $(document);
const table = $('#table');

let color = 'rgb(0,0,0)';
let clickOn = false;

// Responsive grid 

let tableContent = '';

let r = 1;
while (r <= rows) {

  tableContent += '<tr>';

  for (let i = 1; i <= columns; i++) {
    tableContent += '<td></td>';
  }

  tableContent += '</tr>';
  r += 1;

}

table.append(tableContent);

table.on('click', 'td', function() {
  if ($( this ).hasClass( "click" )) {
    $(this).css('background-color', 'white');
    $(this).removeClass('click');
  } else {
    pintarCuadritos($(this));
  }
});

table.contextmenu(function(e) {
  e.preventDefault();
  $( "#modal" ).fadeIn();
  $( "#modal" ).css('top', e.pageY - 10);
  $( "#modal" ).css('left', e.pageX -10);
});

$( "#modal" ).mouseleave(function(){
  $('#modal').fadeOut();
});

table.on('mousedown', function(e) {
  e.preventDefault();
  clickOn = true;
});

doc.on('mouseup', function() {
  clickOn = false;
});

table.on('mouseover', 'td', function() {
  if (clickOn) {pintarCuadritos($(this));}
});

function pintarCuadritos(targetCell) {
  targetCell.css('background-color', color);
  targetCell.addClass('click');
}

$('#colorContainer div').click(function() {
  $('#modal').fadeOut();
  color = $(this).css('background-color');
});