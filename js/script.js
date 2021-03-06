$('img.img-svg').each(function(){
    let $img = $(this);
    let imgClass = $img.attr('class');
    let imgURL = $img.attr('src');
    $.get(imgURL, function(data) {
      let $svg = $(data).find('svg');
      if(typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass+' replaced-svg');
      }
      $svg = $svg.removeAttr('xmlns:a');
      if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
        $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
      }
      $img.replaceWith($svg);
    }, 'xml');
});

(function () {

    $('.promocode__input').on( "input", function(e){
        if($(this).val() !== '') {
            $(this).parent().addClass('promocode__input-wrap_active');
        }
        else {
            $(this).parent().removeClass('promocode__input-wrap_active');
        }
    });

    $('.packaged').mouseover(function() {
        $('.percentage-place').text($(this).attr('percentage-place'));
        $('.ticket-place').text($(this).attr('ticket-place'));
        $('.fee-month').text($(this).attr('fee-month'));
        $('.fee-year').text($(this).attr('fee-year'));
        $('.percent-month').text($(this).attr('percent-month'));
        $('.percent-year').text($(this).attr('percent-year'));
        $('.income-month').text($(this).attr('income-month'));
        $('.income-year').text($(this).attr('income-year'));

        //$('.packaged').removeClass('packaged_active');
        //$(this).addClass('packaged_active');
    });

    $('.packaged__btn').click(function(e) {
        e.stopPropagation();
        let package_type = $(this).attr('pacekage-type');
        // Запрос к серверу на добавление пользователя к выбраным
    });    

    $('.promocode__input').on( "input", function(e){     
        let value = $(this).val();

        let re = /а|б|в|г|д|е|ё|ж|з|и|ё|к|л|м|н|о|п|р|с|т|у|ф|х|ц|ч|ш|щ|ъ|ы|ь|э|ю|я/gi;
        if (re.test(value)) {
            value = value.replace(re, '');
        }

        $(this).val(value);
    });

    $('.phone').bind('paste', function(e) {
        e.preventDefault();
        let value = (e.originalEvent || e).clipboardData.getData('text/plain');
        
        let re = /а|б|в|г|д|е|ё|ж|з|и|ё|к|л|м|н|о|п|р|с|т|у|ф|х|ц|ч|ш|щ|ъ|ы|ь|э|ю|я/gi;
        if (re.test(value)) {
            value = value.replace(re, '');
        }

        $(this).val(value);
    });

}());
