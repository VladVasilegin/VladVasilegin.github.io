
    $(document).ready(function() {
      $('#showpopup').on('click', function(event) {
        event.preventDefault();
        $('.teh-inspection').fadeIn();

      });
      $('.show-imgpopup').on('click', function(event) {
        event.preventDefault();
        $('.teh-inspectimg').fadeIn();

      });
      $('.show-imgfinal').on('click', function(event) {
        event.preventDefault();
        $('.teh-final').fadeIn();

      });
      $('.popup-close').on('click', function(event) {
        event.preventDefault();
        $('.popup').fadeOut();
      });

      });

    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){ 
        // Создание карты.    
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.79455006321775,37.61482508916545],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 14
        });


        var myPlacemark1 = new ymaps.Placemark([55.79455006321775,37.61482508916545], {
            balloonContentHeader: 'ООО Вира',
            balloonContentBody: '<button id=#showpopup class="popup-download popup-show" >Выбрать</button>',
            balloonContentFooter: ''
        }, {
            iconLayout: 'default#image',
            iconImageHref: '../img/mark.png',
            iconImageSize: [30, 30],
            iconImageOffset: [-3, -42]
        });
        myMap.geoObjects.add(myPlacemark1);
        myPlacemark1.balloon.open();
    }







 //    var d = new Date(year, month, date);
 //    if (d.date < 10) {

	// 	date = "0" + day;

	// }

	// if (d.month <10) {

	// d.month = "0" + month;

	// }
 //   document.getElementsByTagName('input')[0].setAttribute("min", d.getFullYear()+"-"+(d.getMonth())+"-"+d.getDay());