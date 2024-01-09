$(document).ready(function () {
    const modeToggle = document.getElementById("modeToggle");
    const mode = localStorage.getItem('mode');

    $('#modeToggle').change(function () {
      if ($(this).is(':checked')) {
        // Dark mode activated
        $('#dcContent').removeClass('hidden');
        $('#mcuContent').addClass('hidden');
        $('body').removeClass('mcu');
        $('body').addClass('dc');
        localStorage.setItem('mode', 'dc');
      } else {
        $('#dcContent').addClass('hidden');
        $('#mcuContent').removeClass('hidden');
        $('body').addClass('mcu');
        $('body').removeClass('dc');
        localStorage.setItem('mode', 'mcu');
      }
    });

    if (mode === 'dc') {
      modeToggle.checked = true;
      $('#dcContent').removeClass('hidden');
      $('#mcuContent').addClass('hidden');
      $('body').removeClass('mcu');
      $('body').addClass('dc');
      localStorage.setItem('mode', 'dc');
    } else {
      $('#dcContent').addClass('hidden');
      $('#mcuContent').removeClass('hidden');
      $('body').addClass('mcu');
      $('body').removeClass('dc');
      localStorage.setItem('mode', 'mcu');
    }
  });
