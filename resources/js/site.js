import $ from 'jquery';
import { Loader } from "@googlemaps/js-api-loader";

window.$ = window.jQuery = $;
window.dataLayer = window.dataLayer || [];

const loader = new Loader({
    apiKey: "AIzaSyAXqiPpYvU5Ow9nOiYcl3D-3BKoURdDpY4",
    version: "weekly"
});

$(function () {
    $('.slick-slider').slick({
        centerMode: true,
        mobileFirst: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 5,
                }
            }
        ]
    });
});

$(function () {
    $('nav a').hover(function () {
        var a = Math.random() * 10 - 5;
        $(this).css('transform', 'rotate(' + a + 'deg) scale(1.25)');
    }, function () {
        $(this).css('transform', 'none');
    });
});

$(function () {
    $('.map').each(function () {
        let mapEl = $(this);

        // get the address from the data attribute
        const address = $(this).data('address');
        const city = $(this).data('city');
        const state = $(this).data('state');
        const zip = $(this).data('zip');
        const fullAddress = address + ', ' + city + ', ' + state + ' ' + zip;

        // create a new geocoder to get the lat/long of the address
        loader.load().then(() => {
            const geocoder = new google.maps.Geocoder();

            geocoder.geocode({ address: fullAddress }, (results, status) => {
                if (status === google.maps.GeocoderStatus.OK) {
                    // Extract the latitude and longitude from the first result
                    const location = results[0].geometry.location;
                    const latitude = location.lat();
                    const longitude = location.lng();

                    // Create a new Map instance
                    const map = new google.maps.Map(mapEl[0], {
                        center: { lat: latitude, lng: longitude },
                        zoom: 15,
                        disableDefaultUI: true
                    });

                    // Add a marker for the result
                    const marker = new google.maps.Marker({
                        map: map,
                        position: { lat: latitude, lng: longitude }
                    });

                    // Add an info window with the address information
                    const infowindow = new google.maps.InfoWindow({
                        content: fullAddress
                    });

                    infowindow.open(map, marker);
                } else {
                    console.error("Geocoding request failed. Status:", status);
                }
            });
        });
    });
});

$(function () {
    // smooth scroll to locations
    $('a[href*="#pantries"]').on('click', function (e) {
        e.preventDefault();
        window.dataLayer.push({
            'event': 'viewedPantryLocations',
        });
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 50
        }, 500, 'linear');
    });
});

// Google Analytics Event Tracking
$(function () {
    $('.resource').on('click', function (e) {
        window.dataLayer.push({
            'event': 'viewedResource',
            'resource': $(this).attr('href')
        });
    });
    $('.donate-button').on('click', function (e) {
        window.dataLayer.push({
            'event': 'donationButtonClicked'
        });
    });
    $(document).on('opened', '.remodal.pantry-details', function (e) {
        window.dataLayer.push({
            'event': 'viewedPantry',
            'pantry': e.currentTarget.dataset.remodalId
        });
    });
    $(document).on('opened', '.remodal.donate', function (e) {
        window.dataLayer.push({
            'event': 'donationModalOpened'
        });
    });
});
