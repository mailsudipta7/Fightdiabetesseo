"use strict";

sduttaApp.controller('homeController', ['$scope', 'commonApiServices', '$http', '$rootScope', '$window', function ($scope, commonApiServices, $http, $rootScope, $window) {
    // #region Members
    $scope.message = "Something awesome is on it's way!";
    $scope.pageClass = "page-home";
    $scope.load = false;
    $scope.myInfoData = null;
    $scope.servicesRelativeLocation = "/services/";
    $scope.blogsRelativeLocation = "/blogs/";
    $scope.telPrefix = "tel:";
    $scope.mailPrefix = "mailto:";
    $scope.mapPrefix = "https://maps.google.com/?q=";
    $scope.ChamberCount = 0;
    $scope.activeChamberIndex = 0;
    $scope.mapURL = "";
    $scope.galleryImagePrefix = "#menu";
    $scope.galleryTabImagePrefix = "tab";
    $scope.galleryImageContainerPrefix = "menu";


    var config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    // #endregion

    angular.element($window).bind('load', function () {
        console.log("Load : " + new Date().toGMTString());
    });

    angular.element(document).ready(function () {
        console.log("Ready : " + new Date().toGMTString());
    });

    var initialize = function () {
        $(document).scrollTop(0);
        $scope.load = true;
        $(".pg-loader").fadeIn("slow");
        $http.get(commonApiServices.homePageServices.GetHomePageInfo, null, config)
            .then(
                function (response) {
                    $scope.myInfoData = response.data;
                    $rootScope.myInfoData = response.data;
                    $scope.ChamberCount = $scope.myInfoData.chamberDetails.length;
                    $scope.activeChamberIndex = $scope.ChamberCount > 0 ? 0 : -1;
                    $scope.mapURL = $scope.getMapSrc($scope.myInfoData.chamberDetails[$scope.activeChamberIndex].Coordinates);
                    //document.getElementById('mapView').src = $scope.mapURL;
                    $scope.load = false;
                    setTimeout(function () {
                        $(".offer-hldr-box").slice(0, 3).show();
                        $(".diabetes-info-box").slice(0, 2).show();
                        $('.slider').bxSlider({
                            auto: true,
                            pager: false,
                            controls: true,
                            mode: 'fade',
                            autoHover: false,
                            speed: 2000,
                            autoDelay: 0,
                            adaptiveHeight: false,
                            pause: 15000

                        });
                        $("#tab1").addClass("active");
                        $("#menu1").addClass("active").removeClass("fade");
                        $(function () {
                            var $gallery = $('.tab-content a').simpleLightbox();

                            $gallery.on('show.simplelightbox', function () {
                                console.log('Requested for showing');
                            })
                                .on('shown.simplelightbox', function () {
                                    console.log('Shown');
                                })
                                .on('close.simplelightbox', function () {
                                    console.log('Requested for closing');
                                })
                                .on('closed.simplelightbox', function () {
                                    console.log('Closed');
                                })
                                .on('change.simplelightbox', function () {
                                    console.log('Requested for change');
                                })
                                .on('next.simplelightbox', function () {
                                    console.log('Requested for next');
                                })
                                .on('prev.simplelightbox', function () {
                                    console.log('Requested for prev');
                                })
                                .on('nextImageLoaded.simplelightbox', function () {
                                    console.log('Next image loaded');
                                })
                                .on('prevImageLoaded.simplelightbox', function () {
                                    console.log('Prev image loaded');
                                })
                                .on('changed.simplelightbox', function () {
                                    console.log('Image changed');
                                })
                                .on('nextDone.simplelightbox', function () {
                                    console.log('Image changed to next');
                                })
                                .on('prevDone.simplelightbox', function () {
                                    console.log('Image changed to prev');
                                })
                                .on('error.simplelightbox', function (e) {
                                    console.log('No image found, go to the next/prev');
                                    console.log(e);
                                });
                        });
                        $(".pg-loader").fadeOut("slow");
                    }, 100);
                },
                function (response) {
                    alert("failure");
                    $scope.load = false;
                    setTimeout(function () { $(".pg-loader").fadeOut("slow"); }, 1500);
                }
            );
    }
    initialize();

    //console.log("Load : " + new Date().toGMTString());
    //$window.onload = function () {
    //    console.log("Load : " + new Date().toGMTString());
    //};
    //$(window).load(function () {
    //        console.log("Load : " + new Date().toGMTString());
    //});
    //$(window).on('load', function () {
    //    console.log("Load : " + new Date().toGMTString());
    //});


    angular.element(document).ready(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() >= 200) {
                $('.menubar').addClass('fixed-header', 2000);
            }
            else {
                $('.menubar').removeClass('fixed-header', 2000);
            }
        });

        //===== Mobile Menu hamberger menu=============================//
        $(".navbar-toggler").on('click', function () {
            $(this).toggleClass("active");
        });


        var subMenu = $(".sub-menu-bar .navbar-nav .sub-menu");

        if (subMenu.length) {
            subMenu.parent('li').children('a').append(function () {
                return '<button class="sub-nav-toggler"> <i class="fa fa-chevron-down"></i> </button>';
            });

            var subMenuToggler = $(".sub-menu-bar .navbar-nav .sub-nav-toggler");

            subMenuToggler.on('click', function () {
                $(this).parent().parent().children(".sub-menu").slideToggle();
                return false
            });
        }
        //===== /Mobile Menu end=============================//

        //scroll to top	
        // hide #back-top first
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

        $(document).on("scroll", onScroll);

        //smoothscroll
        $('.menu-nav li a').on('click', function (e) {
            e.preventDefault();
            $(document).off("scroll");

            $('a').each(function () {
                $(this).removeClass('active');
            })
            $(this).addClass('active');

            var target = "#" + this.id.split('_')[1];
            var targetObj = $(target);
            $('html, body').stop().animate({
                'scrollTop': targetObj.offset().top - 22
            }, 1000, 'swing', function () {
                //window.location.hash = target;
                $(document).on("scroll", onScroll);
            });
        });
        function onScroll(event) {
            var scrollPos = $(document).scrollTop();
            $('.menu-nav li a').each(function () {
                var currLink = $(this);
                var refElement = $("#" + $(this).attr("id").split('_')[1]);
                if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                    $('.menu-nav ul li a').removeClass("active");
                    currLink.addClass("active");
                }
                else {
                    currLink.removeClass("active");
                }
            });
        }
        //lode more function for service offer section// 
        ////$(".offer-hldr-box").slice(0, 3).show();
        $("#loadMore").on("click", function (e) {
            e.preventDefault();
            $(".offer-hldr-box:hidden").slice(0, 3).slideDown();
            if ($(".offer-hldr-box:hidden").length == 0) {
                $("#loadMore").text("Content End").addClass("noContent");
            }
        });
        //lode more function for blog section// 

        $("#loadMoreBlogPanel").on("click", function (e) {
            e.preventDefault();
            $(".diabetes-info-box:hidden").slice(0, 2).slideDown();
            if ($(".diabetes-info-box:hidden").length == 0) {
                $("#loadMoreBlogPanel").text("Content End").addClass("noContent");
            }
        });
        //jQuery('#filter-date').datetimepicker({
        //    timepicker: false,
        //    format: "d/m/yy"
        //});

        //Time Picker
        jQuery('#filter-date-slot').datetimepicker({
            timepicker: false,
            //format:'H:i',
            format: 'm/d/yy'
        });
        //Time Picker
        jQuery('#filter-time-slot').datetimepicker({
            timepicker: true,
            datepicker: false,
            //format:'H:i',
            format: 'H:i',
            step: 15
        });
    });

    $scope.getChamberTitleDetails = function (data) {
        return "Address: " + data.ChamberAddress
            + "\nContact No: " + data.ChamberPhoneNo
            + "\nLandmark: " + data.ChamberLandmark;
    }

    $scope.getMobileImage = function (pathToChange) {
        return pathToChange.replace(".jpg", "-mob.jpg");;
    }

    $scope.changeActiveChamber = function (index) {
        $scope.activeChamberIndex = index;

        $scope.mapURL = $scope.getMapSrc($scope.myInfoData.chamberDetails[$scope.activeChamberIndex].Coordinates);
        document.getElementById('mapView').src = $scope.mapURL;

        var target = "#contact"
        var targetObj = $(target);
        $('html, body').stop().animate({
            'scrollTop': targetObj.offset().top - 22
        }, 1000, 'swing', function () {
        });
    }

    $scope.getMapSrc = function (latlon) {
        var mapStart = "https://www.google.com/maps/embed/v1/view?key=AIzaSyD1nekLJNwhCxKaFXBrMLkMM5kqnUQlyzU&center=";
        var mapEnd = "&zoom=18&maptype=roadmap";
        return mapStart + latlon + mapEnd;
    };
}]);