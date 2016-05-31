requirejs(['./main'], function (common) {
    require(['jquery', 'bootstrap', 'owl', 'fuelux'], function ($, bootstrap, owl) {

        /*
            google.load("visualization", "1", {
                    packages: ["corechart"],
                    callback: drawChart
                });
        function drawChart() {
            var data = google.visualization.arrayToDataTable([
                ['Year', 'Sales'],
                ['2013',  1000],
                ['2014',  1170],
                ['2015',  660],
                ['2016',  1030]
            ]);

            var options = {
                legend: {position: 'none'},
                hAxis: {
                    textPosition: 'none',
                    baselineColor: 'transparent',
                    titleTextStyle: {
                        color: '#333'
                    }
                },
                vAxis: {
                    minValue: 0,
                    textPosition: 'none',
                    gridlines: {
                        color: 'transparent'
                    }
                },
                backgroundColor: {
                    fill: 'transparent'
                }
            };

            var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
            chart.draw(data, options);
        }
*/
        $('.carousel').carousel({
            interval: 4000
        });

        var owl;
        $(document).ready(function () {
            owl = $("#owl-demo");
            owl.owlCarousel({
                navigation: false, // Show next and prev buttons
                slideSpeed: 300,
                paginationSpeed: 400,
                singleItem: true,
                afterInit: afterOWLinit // do some work after OWL init
            });

            function afterOWLinit() {
                // adding A to div.owl-page
                $('.owl-controls .owl-page').append('<a class="item-link" href="#"/>');
                var pafinatorsLink = $('.owl-controls .item-link');
                /**
                 * this.owl.userItems - it's your HTML <div class="item"><img src="http://www.ow...t of us"></div>
                 */
                $.each(this.owl.userItems, function (i) {
                    $(pafinatorsLink[i])
                        // i - counter
                        // Give some styles and set background image for pagination item
                        .css({
                            'background': 'url(' + $(this).find('img').attr('src') + ') center center no-repeat',
                            '-webkit-background-size': 'cover',
                            '-moz-background-size': 'cover',
                            '-o-background-size': 'cover',
                            'background-size': 'cover'
                        })
                        // set Custom Event for pagination item
                        .click(function () {
                            owl.trigger('owl.goTo', i);
                        });
                });
                // add Custom PREV NEXT controls
                $('.owl-pagination').prepend('<a href="#prev" class="prev-owl"/>');
                $('.owl-pagination').append('<a href="#next" class="next-owl"/>');
                // set Custom event for NEXT custom control
                $(".next-owl").click(function () {
                    owl.trigger('owl.next');
                });
                // set Custom event for PREV custom control
                $(".prev-owl").click(function () {
                    owl.trigger('owl.prev');
                });
            }
        });
    });
});


