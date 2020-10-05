/**
 * Drag and Drop quiz
 */

// Make words draggable with revert = true

score = 0;
if ($('.draggable')[0]) {
  $('.draggable').draggable({
    revert: true,
    snapTolerance: 30,
    revertDuration: 0,
    cursor: "move"
  });
}

// Make blank spaces accept corresponding word

$('.blank').each(function(index) {

  toAccept = $(this)[0].dataset.accept;
  // Resize spans to correct answer
  if ($(this).hasClass('resizable')) {
    answer = $('.draggable.' + toAccept);
    width = answer[0].scrollWidth;
    width = width - ($(this).css('padding-left').replace('px', '') * 2);
    $(this).css('width', width);
  }

  $(this).droppable({
    accept: '.' + toAccept,
    drop: function(event, ui) {
      $(this).append(ui.draggable);
      $(this).addClass('answered');

      score++;
      $(ui.draggable).draggable('destroy');
      $(this).droppable("destroy");
    }
  });
});