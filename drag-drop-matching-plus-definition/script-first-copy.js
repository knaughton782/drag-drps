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


      if ($('td:first-child').hasClass('.answered')) {
        var className = $('#table').attr('class');
        switch (className) {
          case 'word-5':
            $("tr td:last-child").text("Mentors need to be able to see their mentee's strengths and areas of need and have resources available for the mentee to use independently.");
            break;
          case 'word-4':
            $("tr td:last-child").text("Mentors need to be able to provide feedback, use coaching techniques, be able to have difficult conversations if necessary. Begin weaning yourself to build more autonomy with your mentee.");
            break;
          case 'word-3':
            $("tr td:last-child").text("Mentors need to listen, help with balancing stress and work, advise more direct less, and celebrate successes. Take a team and partner approach.");
            break;
          case 'word-2':
            $("tr td:last-child").text("Mentors need to be consistent, reliable, celebrate successes, be less directive and more facilitative. Take a team or partner approach.");
            break;
          case 'word-1':
            $("tr td:last-child").text("Mentors need to provide resources, direct beginning teacher on how to, and lend a hand on how to get started.");
            break;
          default:
            $("tr td:last-child").text("Mentors need to be able to see their mentee's strengths and areas of need and have resources available for the mentee to use independently.");
        }
      }


      score++;
      $(ui.draggable).draggable('destroy');
      $(this).droppable("destroy");
    }
  });
}); // end of function  




  // if ($('.missing-words__blank').val() !== '') {
  //   var className = $('#table').attr('class');
  //   switch (className) {
  //     case 'word-5':
  //       $("tr td:last-child").text("Mentors need to be able to see their mentee's strengths and areas of need and have resources available for the mentee to use independently.");
  //       break;
  //     case 'word-4':
  //       $("tr td:last-child").text("Mentors need to be able to provide feedback, use coaching techniques, be able to have difficult conversations if necessary. Begin weaning yourself to build more autonomy with your mentee.");
  //       break;
  //     case 'word-3':
  //       $("tr td:last-child").text("Mentors need to listen, help with balancing stress and work, advise more direct less, and celebrate successes. Take a team and partner approach.");
  //       break;
  //     case 'word-2':
  //       $("tr td:last-child").text("Mentors need to be consistent, reliable, celebrate successes, be less directive and more facilitative. Take a team or partner approach.");
  //       break;
  //     case 'word-1':
  //       $("tr td:last-child").text("Mentors need to provide resources, direct beginning teacher on how to, and lend a hand on how to get started.");
  //       break;
  //     default:
  //       $("tr td:last-child").text("Mentors need to be able to see their mentee's strengths and areas of need and have resources available for the mentee to use independently.");
  //   }
  // }
