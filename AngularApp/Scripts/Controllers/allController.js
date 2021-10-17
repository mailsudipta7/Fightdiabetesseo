"use strict";

sduttaApp.controller('mainController', ['$scope', '$sce', function ($scope, $sce) {
    $scope.trustHtml = function(string) {
        return $sce.trustAsHtml(string);
    }
}]);

sduttaApp.controller('homeController', ['$scope', 'commonApiServices', '$http', '$rootScope', '$window', function ($scope, commonApiServices, $http, $rootScope, $window) {
    // #region Members
    $scope.message = "Something awesome is on it's way!";
    $scope.pageClass = "page-home";
    $scope.load = false;
    $scope.myInfoData = null;
    $scope.servicesRelativeLocation = "/services?tab=";
    $scope.blogsRelativeLocation = "/blogs?tab=";
    $scope.telPrefix = "tel:";
    $scope.mailPrefix = "mailto:";
    $scope.mapPrefix = "https://maps.google.com/?q=";
    $scope.ChamberCount = 0;
    $scope.activeChamberIndex = 0;
    $scope.mapURL = "";
    $scope.galleryImagePrefix = "#menu";
    $scope.galleryTabImagePrefix = "tab";
    $scope.galleryImageContainerPrefix = "menu";
    $scope.galleryLoadMorePrefix = "galleryMore";


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

    $scope.emptyObjectCheck = function (objCheck) {
        return objCheck == null || objCheck == undefined;
    };
    $scope.emptyValueCheck = function (objCheck) {
        return objCheck == null || objCheck == undefined || objCheck.length == 0;
    };

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
                    document.getElementById('mapView').src = $scope.mapURL;
                    $scope.load = false;
                    setTimeout(function () {
                        $(".offer-hldr-box").slice(0, 3).show();
                        $(".diabetes-info-box").slice(0, 2).show();
                        if (!$scope.emptyObjectCheck($scope.myInfoData)
                            && !$scope.emptyObjectCheck($scope.myInfoData.galleryGroupedDetails)
                            && $scope.myInfoData.galleryGroupedDetails.length > 0) {
                            $scope.myInfoData.galleryGroupedDetails.forEach(function (item, index) {
                                if (!$scope.emptyObjectCheck(item.galleryImages)
                                    && item.galleryImages.length > 4) {
                                    $("#" + $scope.galleryLoadMorePrefix + (index + 1)).show();
                                    $("#" + $scope.galleryImageContainerPrefix + (index + 1) + " .gallery-box").slice(0, 4).css("display", "inline-block");
                                }
                                else if (!$scope.emptyObjectCheck(item.galleryImages)
                                    && item.galleryImages.length <= 4
                                    && item.galleryImages.length > 0) {
                                    $("#" + $scope.galleryImageContainerPrefix + (index + 1) + " .gallery-box").slice(0, 4).css("display", "inline-block");
                                }
                            });
                            $("#tab1").addClass("active");
                            $("#menu1").addClass("active").removeClass("fade");
                        }

                        $('.slider').bxSlider({
                            auto: true,
                            autoStart: true,
                            autoHover: false,
                            autoDelay: 0,
                            pause: $scope.myInfoData.userInfo.Scrolltime,
                            speed: 2000,
                            mode: 'fade',
                            pager: false,
                            controls: true,
                            adaptiveHeight: true,
                            keyboardEnabled: false
                        });
                        $(function () {
                            var $gallery = $('.tab-content a').simpleLightbox();

                            $gallery.on('show.simplelightbox', function () {
                                //console.log('Requested for showing');
                            })
                                .on('shown.simplelightbox', function () {
                                    //console.log('Shown');
                                })
                                .on('close.simplelightbox', function () {
                                    //console.log('Requested for closing');
                                })
                                .on('closed.simplelightbox', function () {
                                    //console.log('Closed');
                                })
                                .on('change.simplelightbox', function () {
                                    //console.log('Requested for change');
                                })
                                .on('next.simplelightbox', function () {
                                    //console.log('Requested for next');
                                })
                                .on('prev.simplelightbox', function () {
                                    //console.log('Requested for prev');
                                })
                                .on('nextImageLoaded.simplelightbox', function () {
                                    //console.log('Next image loaded');
                                })
                                .on('prevImageLoaded.simplelightbox', function () {
                                    //console.log('Prev image loaded');
                                })
                                .on('changed.simplelightbox', function () {
                                    //console.log('Image changed');
                                })
                                .on('nextDone.simplelightbox', function () {
                                    //console.log('Image changed to next');
                                })
                                .on('prevDone.simplelightbox', function () {
                                    //console.log('Image changed to prev');
                                })
                                .on('error.simplelightbox', function (e) {
                                    //console.log('No image found, go to the next/prev');
                                    //console.log(e);
                                });
                        });
                        $(".pg-loader").fadeOut("slow");
                    }, 1000);
                },
                function (response) {
                    alert("failure");
                    $scope.load = false;
                    setTimeout(function () { $(".pg-loader").fadeOut("slow"); }, 1500);
                }
            );
    }
    initialize();

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

            if ($(".navbar-toggler").css("display") == 'block') {
                $(".navbar-toggler").click();
            }

            $(document).off("scroll");

            $('.menu-nav li a').each(function () {
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

    $scope.GalleryLoadMore = function (id) {
        $("#" + $scope.galleryImageContainerPrefix + (id) + " .gallery-box:hidden").slice(0, 4).slideDown();
        if ($("#" + $scope.galleryImageContainerPrefix + (id) + " .gallery-box:hidden").length == 0) {
            $("#" + $scope.galleryLoadMorePrefix + (id) + " a").text("No More Images").addClass("noContent");
        }
    };

    $scope.getCurrentYear = function () {
        return new Date().getFullYear();
    };
}]);

sduttaApp.controller('servicesController', ['$scope', 'commonApiServices', '$http', '$rootScope', '$routeParams', '$location', function ($scope, commonApiServices, $http, $rootScope, $routeParams, $location) {
    $scope.message = "Something awesome is on it's way!";
    $scope.pageClass = "page-services";
    $scope.load = false;
    $scope.serviceDetails = null;
    $scope.servicename = "";
    $scope.mapURL = "";
    $scope.mapPrefix = "https://maps.google.com/?q=";
    $scope.ChamberCount = 0;
    $scope.activeChamberIndex = 0;
    $scope.serviceTabPrefixes = {
        tab: "tab-s-",
        pane: "pane-s-",
        paneid: "#pane-s-",
        heading: "heading-s-",
        collapse: "collapse-s-",
        collapseid: "#collapse-s-"
    }
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

    $scope.checkInvalidUrl = function () {
        if ($scope.emptyObjectCheck($location.search().tab)) {
            $location.search({});
            $location.path('/').replace();
        }
        else {
            $scope.servicename = $scope.emptyObjectCheck($location.search().tab) ? "" : $location.search().tab;
        }
    }
    $scope.checkInvalidUrl();

    $scope.changeActiveChamber = function (index) {
        window.event.stopPropagation();
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

    $scope.setServiceActiveBasedOnUrl = function () {
        $scope.checkInvalidUrl();
        if ($scope.emptyObjectCheck($scope) || $scope.emptyObjectCheck($scope.myInfoData)
            || $scope.emptyObjectCheck($scope.myInfoData.serviceDetails) || $scope.myInfoData.serviceDetails.length == 0) {
            $location.search({});
            $location.path('/').replace();
            console.log("empty");
        }
        else {
            if ($scope.servicename != "") {
                var activeId = $scope.myInfoData.serviceDetails.find(element => element.SeoUriPart == $scope.servicename).Id;

                $("#tab-s-" + activeId).addClass("active");
                $("#collapse-s-" + activeId).addClass("show");
                $("#pane-s-" + activeId).addClass("active").addClass("show");
                $('.owl-demo1').owlCarousel({
                    loop: false,
                    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                    nav: true,
                    dots: false,
                    autoplay: false,
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

                $scope.addLightBox(activeId);

                if (window.innerWidth < 768) {
                    var target = "#pane-s-" + activeId;//"#home-mn";
                    var targetObj = $(target);
                    $('html, body').stop().animate({
                        'scrollTop': targetObj.offset().top - 82
                    }, 1000, 'swing', function () {
                    });
                }
            }
        }
    };

    $scope.forceChanegUrl = function (uri, curId) {
        $location.search('tab', uri);
        $scope.addLightBox(curId);

        if (window.innerWidth >= 768) {
            var target = "#servicesection";//"#home-mn";
            var targetObj = $(target);
            $('html, body').stop().animate({
                'scrollTop': targetObj.offset().top - 42
            }, 1000, 'swing', function () {
            });
        }
        else {
            var target = "#pane-s-" + curId;//"#home-mn";
            var targetObj = $(target);
            $('html, body').stop().animate({
                'scrollTop': targetObj.offset().top - 82
            }, 1000, 'swing', function () {
            });
        }
    };

    $scope.addLightBox = function (activeId) {
        $(function () {
            var $gallery = $("#collapse-s-" + activeId + " a.lightboximage").simpleLightbox();

            $gallery.on('show.simplelightbox', function () {
                //console.log('Requested for showing');
            })
                .on('shown.simplelightbox', function () {
                    //console.log('Shown');
                })
                .on('close.simplelightbox', function () {
                    //console.log('Requested for closing');
                })
                .on('closed.simplelightbox', function () {
                    //console.log('Closed');
                })
                .on('change.simplelightbox', function () {
                    //console.log('Requested for change');
                })
                .on('next.simplelightbox', function () {
                    //console.log('Requested for next');
                })
                .on('prev.simplelightbox', function () {
                    //console.log('Requested for prev');
                })
                .on('nextImageLoaded.simplelightbox', function () {
                    //console.log('Next image loaded');
                })
                .on('prevImageLoaded.simplelightbox', function () {
                    //console.log('Prev image loaded');
                })
                .on('changed.simplelightbox', function () {
                    //console.log('Image changed');
                })
                .on('nextDone.simplelightbox', function () {
                    //console.log('Image changed to next');
                })
                .on('prevDone.simplelightbox', function () {
                    //console.log('Image changed to prev');
                })
                .on('error.simplelightbox', function (e) {
                    //console.log('No image found, go to the next/prev');
                    //console.log(e);
                });
        });
    };

    var initialize = function () {
        $(document).unbind('scroll');
        $(document).scrollTop(0);
        if ($scope.emptyObjectCheck($rootScope) || $scope.emptyObjectCheck($rootScope.myInfoData)
            || $scope.emptyObjectCheck($rootScope.myInfoData.serviceDetails) || $scope.emptyObjectCheck($rootScope.myInfoData.chamberDetails)) {
            $scope.load = true;
            $(".pg-loader").fadeIn("slow");
            $http.get(commonApiServices.servicePageServices.GetServicesPageInfo, null, config)
                .then(
                    function (response) {
                        $scope.myInfoData = response.data;
                        $scope.ChamberCount = $scope.myInfoData.chamberDetails.length;
                        $scope.activeChamberIndex = $scope.ChamberCount > 0 ? 0 : -1;
                        $scope.mapURL = $scope.getMapSrc($scope.myInfoData.chamberDetails[$scope.activeChamberIndex].Coordinates);
                        document.getElementById('mapView').src = $scope.mapURL;
                        $scope.load = false;
                        console.log("init-s");

                        setTimeout(function () {
                            $scope.setServiceActiveBasedOnUrl();
                            $(".pg-loader").fadeOut("slow");
                        }, 300);
                    },
                    function (response) {
                        alert("failure");
                        $scope.load = false;
                        setTimeout(function () {
                            $(".pg-loader").fadeOut("slow");
                        }, 300);
                    }
                );
        }
        else {
            $scope.myInfoData = $rootScope.myInfoData;
            $scope.ChamberCount = $scope.myInfoData.chamberDetails.length;
            $scope.activeChamberIndex = $scope.ChamberCount > 0 ? 0 : -1;
            $scope.mapURL = $scope.getMapSrc($scope.myInfoData.chamberDetails[$scope.activeChamberIndex].Coordinates);
            console.log("init-l");

            setTimeout(function () {
                $scope.setServiceActiveBasedOnUrl();
                document.getElementById('mapView').src = $scope.mapURL;
                $(".pg-loader").fadeOut("slow");
            }, 300);
        }
    };
    initialize();

    angular.element(document).ready(function () {
        //Write whatever script you want to write after doccument ready state. The behaviour is kind of same when compared to writting scrpt tag just before body tag ends
        //$("#input-21f").rating({
        //    starCaptions: function (val) {
        //        if (val < 3) {
        //            return val;
        //        } else {
        //            return 'high';
        //        }
        //    },
        //    starCaptionClasses: function (val) {
        //        if (val < 3) {
        //            return 'label label-danger';
        //        } else {
        //            return 'label label-success';
        //        }
        //    },
        //    hoverOnClear: false
        //});
        //var $inp = $('#rating-input');
        //$inp.rating({
        //    min: 0,
        //    max: 5,
        //    step: 1,
        //    size: 'lg',
        //    showClear: false
        //});
        //$('#btn-rating-input').on('click', function () {
        //    $inp.rating('refresh', {
        //        showClear: true,
        //        disabled: !$inp.attr('disabled')
        //    });
        //});
        //$('.btn-danger').on('click', function () {
        //    $("#kartik").rating('destroy');
        //});
        //$('.btn-success').on('click', function () {
        //    $("#kartik").rating('create');
        //});
        //$inp.on('rating.change', function () {
        //    alert($('#rating-input').val());
        //});
        //$('.rb-rating').rating({
        //    'showCaption': true,
        //    'stars': '3',
        //    'min': '0',
        //    'max': '3',
        //    'step': '1',
        //    'size': 'xs',
        //    'starCaptions': { 0: 'status:nix', 1: 'status:wackelt', 2: 'status:geht', 3: 'status:laeuft' }
        //});
        //$("#input-21c").rating({
        //    min: 0, max: 8, step: 0.5, size: "xl", stars: "8"
        //});
        console.log("Ready");

        $(window).scroll(function () {
            if ($(this).scrollTop() >= 200) {
                $('.menubar').addClass('fixed-header', 2000);
            }
            else {
                $('.menubar').removeClass('fixed-header', 2000);
            }
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
    });
}]);

sduttaApp.controller('blogsController', ['$scope', 'commonApiServices', '$http', '$rootScope', '$routeParams', '$location', function ($scope, commonApiServices, $http, $rootScope, $routeParams, $location) {
    $scope.message = "Something awesome is on it's way!";
    $scope.pageClass = "page-services";
    $scope.load = false;
    $scope.serviceDetails = null;
    $scope.servicename = "";
    $scope.mapURL = "";
    $scope.mapPrefix = "https://maps.google.com/?q=";
    $scope.ChamberCount = 0;
    $scope.activeChamberIndex = 0;
    $scope.serviceTabPrefixes = {
        tab: "tab-s-",
        pane: "pane-s-",
        paneid: "#pane-s-",
        heading: "heading-s-",
        collapse: "collapse-s-",
        collapseid: "#collapse-s-"
    }
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

    $scope.checkInvalidUrl = function () {
        if ($scope.emptyObjectCheck($location.search().tab)) {
            $location.search({});
            $location.path('/').replace();
        }
        else {
            $scope.servicename = $scope.emptyObjectCheck($location.search().tab) ? "" : $location.search().tab;
        }
    }
    $scope.checkInvalidUrl();

    $scope.changeActiveChamber = function (index) {
        window.event.stopPropagation();
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

    $scope.setServiceActiveBasedOnUrl = function () {
        $scope.checkInvalidUrl();
        if ($scope.emptyObjectCheck($scope) || $scope.emptyObjectCheck($scope.myInfoData)
            || $scope.emptyObjectCheck($scope.myInfoData.blogDetails) || $scope.myInfoData.blogDetails.length == 0) {
            $location.search({});
            $location.path('/').replace();
            console.log("empty");
        }
        else {
            if ($scope.servicename != "") {
                var activeId = $scope.myInfoData.blogDetails.find(element => element.SeoUriPart == $scope.servicename).Id;

                $("#tab-s-" + activeId).addClass("active");
                $("#collapse-s-" + activeId).addClass("show");
                $("#pane-s-" + activeId).addClass("active").addClass("show");
                $('.owl-demo1').owlCarousel({
                    loop: false,
                    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                    nav: true,
                    dots: false,
                    autoplay: false,
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

                $scope.addLightBox(activeId);

                if (window.innerWidth < 768) {
                    var target = "#pane-s-" + activeId;//"#home-mn";
                    var targetObj = $(target);
                    $('html, body').stop().animate({
                        'scrollTop': targetObj.offset().top - 82
                    }, 1000, 'swing', function () {
                    });
                }
            }
        }
    };

    $scope.forceChanegUrl = function (uri, curId) {
        $location.search('tab', uri);
        $scope.addLightBox(curId);

        if (window.innerWidth >= 768) {
            var target = "#servicesection";//"#home-mn";
            var targetObj = $(target);
            $('html, body').stop().animate({
                'scrollTop': targetObj.offset().top - 42
            }, 1000, 'swing', function () {
            });
        }
        else {
            var target = "#pane-s-" + curId;//"#home-mn";
            var targetObj = $(target);
            $('html, body').stop().animate({
                'scrollTop': targetObj.offset().top - 82
            }, 1000, 'swing', function () {
            });
        }
    };

    $scope.addLightBox = function (activeId) {
        $(function () {
            var $gallery = $("#collapse-s-" + activeId + " a.lightboximage").simpleLightbox();

            $gallery.on('show.simplelightbox', function () {
                //console.log('Requested for showing');
            })
                .on('shown.simplelightbox', function () {
                    //console.log('Shown');
                })
                .on('close.simplelightbox', function () {
                    //console.log('Requested for closing');
                })
                .on('closed.simplelightbox', function () {
                    //console.log('Closed');
                })
                .on('change.simplelightbox', function () {
                    //console.log('Requested for change');
                })
                .on('next.simplelightbox', function () {
                    //console.log('Requested for next');
                })
                .on('prev.simplelightbox', function () {
                    //console.log('Requested for prev');
                })
                .on('nextImageLoaded.simplelightbox', function () {
                    //console.log('Next image loaded');
                })
                .on('prevImageLoaded.simplelightbox', function () {
                    //console.log('Prev image loaded');
                })
                .on('changed.simplelightbox', function () {
                    //console.log('Image changed');
                })
                .on('nextDone.simplelightbox', function () {
                    //console.log('Image changed to next');
                })
                .on('prevDone.simplelightbox', function () {
                    //console.log('Image changed to prev');
                })
                .on('error.simplelightbox', function (e) {
                    //console.log('No image found, go to the next/prev');
                    //console.log(e);
                });
        });
    };

    var initialize = function () {
        $(document).unbind('scroll');
        $(document).scrollTop(0);
        if ($scope.emptyObjectCheck($rootScope) || $scope.emptyObjectCheck($rootScope.myInfoData)
            || $scope.emptyObjectCheck($rootScope.myInfoData.blogDetails) || $scope.emptyObjectCheck($rootScope.myInfoData.chamberDetails)) {
            $scope.load = true;
            $(".pg-loader").fadeIn("slow");
            $http.get(commonApiServices.blogsPageServices.GetBlogsPageInfo, null, config)
                .then(
                    function (response) {
                        $scope.myInfoData = response.data;
                        $scope.ChamberCount = $scope.myInfoData.chamberDetails.length;
                        $scope.activeChamberIndex = $scope.ChamberCount > 0 ? 0 : -1;
                        $scope.mapURL = $scope.getMapSrc($scope.myInfoData.chamberDetails[$scope.activeChamberIndex].Coordinates);
                        document.getElementById('mapView').src = $scope.mapURL;
                        $scope.load = false;
                        console.log("init-s");

                        setTimeout(function () {
                            $scope.setServiceActiveBasedOnUrl();
                            $(".pg-loader").fadeOut("slow");
                        }, 300);
                    },
                    function (response) {
                        alert("failure");
                        $scope.load = false;
                        setTimeout(function () {
                            $(".pg-loader").fadeOut("slow");
                        }, 300);
                    }
                );
        }
        else {
            $scope.myInfoData = $rootScope.myInfoData;
            $scope.ChamberCount = $scope.myInfoData.chamberDetails.length;
            $scope.activeChamberIndex = $scope.ChamberCount > 0 ? 0 : -1;
            $scope.mapURL = $scope.getMapSrc($scope.myInfoData.chamberDetails[$scope.activeChamberIndex].Coordinates);
            console.log("init-l");

            setTimeout(function () {
                $scope.setServiceActiveBasedOnUrl();
                document.getElementById('mapView').src = $scope.mapURL;
                $(".pg-loader").fadeOut("slow");
            }, 300);
        }
    };
    initialize();

    angular.element(document).ready(function () {
        //Write whatever script you want to write after doccument ready state. The behaviour is kind of same when compared to writting scrpt tag just before body tag ends
        //$("#input-21f").rating({
        //    starCaptions: function (val) {
        //        if (val < 3) {
        //            return val;
        //        } else {
        //            return 'high';
        //        }
        //    },
        //    starCaptionClasses: function (val) {
        //        if (val < 3) {
        //            return 'label label-danger';
        //        } else {
        //            return 'label label-success';
        //        }
        //    },
        //    hoverOnClear: false
        //});
        //var $inp = $('#rating-input');
        //$inp.rating({
        //    min: 0,
        //    max: 5,
        //    step: 1,
        //    size: 'lg',
        //    showClear: false
        //});
        //$('#btn-rating-input').on('click', function () {
        //    $inp.rating('refresh', {
        //        showClear: true,
        //        disabled: !$inp.attr('disabled')
        //    });
        //});
        //$('.btn-danger').on('click', function () {
        //    $("#kartik").rating('destroy');
        //});
        //$('.btn-success').on('click', function () {
        //    $("#kartik").rating('create');
        //});
        //$inp.on('rating.change', function () {
        //    alert($('#rating-input').val());
        //});
        //$('.rb-rating').rating({
        //    'showCaption': true,
        //    'stars': '3',
        //    'min': '0',
        //    'max': '3',
        //    'step': '1',
        //    'size': 'xs',
        //    'starCaptions': { 0: 'status:nix', 1: 'status:wackelt', 2: 'status:geht', 3: 'status:laeuft' }
        //});
        //$("#input-21c").rating({
        //    min: 0, max: 8, step: 0.5, size: "xl", stars: "8"
        //});
        console.log("Ready");

        $(window).scroll(function () {
            if ($(this).scrollTop() >= 200) {
                $('.menubar').addClass('fixed-header', 2000);
            }
            else {
                $('.menubar').removeClass('fixed-header', 2000);
            }
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
    });
}]);

sduttaApp.controller('testController', ['$scope', function ($scope) {
    angular.element(document).ready(function () {
        $("#size").html(window.innerWidth + "x" + window.innerHeight);
    });
}]);