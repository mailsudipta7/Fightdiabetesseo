"use strict";

sduttaApp.controller('servicesController', ['$scope', 'commonApiServices', '$http', '$rootScope', '$routeParams', function ($scope, commonApiServices, $http, $rootScope, $routeParams) {
    $scope.message = "Something awesome is on it's way!";
    $scope.pageClass = "page-services";
    $scope.load = false;
    $scope.serviceDetails = null;
    $scope.servicename = $routeParams.servicename;
    console.log($scope.servicename);
    var config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    // #endregion
    $scope.emptyObjectCheck = function (objCheck) {
        return objCheck == null || objCheck == undefined;
    };
    $scope.emptyValueCheck = function (objCheck) {
        return objCheck == null || objCheck == undefined || objCheck.length == 0;
    };

    var initialize = function () {
        $(document).unbind('scroll');
        $(document).scrollTop(0);
        if ($scope.emptyObjectCheck($rootScope) || $scope.emptyObjectCheck($rootScope.myInfoData) || $scope.emptyObjectCheck($rootScope.myInfoData.serviceDetails)) {
            $scope.load = true;
            $(".pg-loader").fadeIn("slow");
            $http.get(commonApiServices.servicePageServices.GetServicesPageInfo, null, config)
                .then(
                    function (response) {
                        $scope.serviceDetails = response.data.serviceDetails;
                        $scope.load = false;
                        setTimeout(function () { $(".pg-loader").fadeOut("slow"); }, 1500);
                    },
                    function (response) {
                        alert("failure");
                        $scope.load = false;
                        setTimeout(function () { $(".pg-loader").fadeOut("slow"); }, 1500);
                    }
                );
        }
        else {
            $scope.serviceDetails = $rootScope.myInfoData.serviceDetails;
            setTimeout(function () { $(".pg-loader").fadeOut("slow"); }, 1000);
        }
    }
    initialize();

    angular.element(document).ready(function () {
        //Write whatever script you want to write after doccument ready state. The behaviour is kind of same when compared to writting scrpt tag just before body tag ends
        $("#input-21f").rating({
            starCaptions: function (val) {
                if (val < 3) {
                    return val;
                } else {
                    return 'high';
                }
            },
            starCaptionClasses: function (val) {
                if (val < 3) {
                    return 'label label-danger';
                } else {
                    return 'label label-success';
                }
            },
            hoverOnClear: false
        });
        var $inp = $('#rating-input');

        $inp.rating({
            min: 0,
            max: 5,
            step: 1,
            size: 'lg',
            showClear: false
        });

        $('#btn-rating-input').on('click', function () {
            $inp.rating('refresh', {
                showClear: true,
                disabled: !$inp.attr('disabled')
            });
        });


        $('.btn-danger').on('click', function () {
            $("#kartik").rating('destroy');
        });

        $('.btn-success').on('click', function () {
            $("#kartik").rating('create');
        });

        $inp.on('rating.change', function () {
            alert($('#rating-input').val());
        });


        $('.rb-rating').rating({
            'showCaption': true,
            'stars': '3',
            'min': '0',
            'max': '3',
            'step': '1',
            'size': 'xs',
            'starCaptions': { 0: 'status:nix', 1: 'status:wackelt', 2: 'status:geht', 3: 'status:laeuft' }
        });
        $("#input-21c").rating({
            min: 0, max: 8, step: 0.5, size: "xl", stars: "8"
        });


        $(".scrollup").hide();

        $(window).scroll(function () {
            if ($(this).scrollTop() > 250) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });
        $('.scrollup').click(function () {
            $("html, body").animate({ scrollTop: 0 }, 1000);
            return false;
        });
        //$(document).on("scroll", onScroll);

        //function onScroll(event) {
        //    var scrollPos = $(document).scrollTop();
        //    $('.menu-nav li a').each(function () {
        //        var currLink = $(this);
        //        var refElement = $("#" + $(this).attr("id").split('_')[1]);
        //        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        //            $('.menu-nav ul li a').removeClass("active");
        //            currLink.addClass("active");
        //        }
        //        else {
        //            currLink.removeClass("active");
        //        }
        //    });
        //}

        $('.owl-demo1').owlCarousel({
            loop: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            nav: true,
            dots: false,
            autoplay: 1000,
            smartSpeed: 1500,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
    });
}]);