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
$('.blank').each(function (index) {
  $('.hide').hide();
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
    drop: function (event, ui) {
      $(this).append(ui.draggable);
      $(this).addClass('answered');
      
      
      if ($('#prob1').text().length > 0) {
        $('#prob1a').show();
      } 
      
      if ($('#prob2').text().length > 0) {
        $('#prob2a').show();
      } 
      
      if ($('#prob3').text().length > 0) {
        $('#prob3a').show();
      } 
      
      if ($('#prob4').text().length > 0) {
        $('#prob4a').show();
      } 
      if ($('#prob5').text().length > 0) {
        $('#prob5a').show();
      } 
      if ($('#prob6').text().length > 0) {
        $('#prob6a').show();
      } 
      if ($('#prob7').text().length > 0) {
        $('#prob7a').show();
      }
      if ($('#prob8').text().length > 0) {
        $('#prob8a').show();
      } 
      if ($('#prob9').text().length > 0) {
        $('#prob9a').show();
      } 
      if ($('#prob10').text().length > 0) {
        $('#prob10a').show();
      }
      
      score++;
      $(ui.draggable).draggable('destroy');
      $(this).droppable("destroy");
    }
  });

  
}); // end of function  

