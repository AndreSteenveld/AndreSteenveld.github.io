
require.config({ 

    //baseUrl: "../",

    config: {
        
        "scripts/wizard/package":       { ajax: { jsonpCallback: "jsonp_callback", dataType: "jsonp", url: "./content/wizard/package.json" } },
        "scripts/wizard/customize":     { ajax: { jsonpCallback: "jsonp_callback", dataType: "jsonp", url: "./content/wizard/customize.json" } },
        "scripts/wizard/personal-info": { ajax: { jsonpCallback: "jsonp_callback", dataType: "jsonp", url: "./content/wizard/personal-info.json" } },
        "scripts/wizard/summary":       { ajax: { jsonpCallback: "jsonp_callback", dataType: "jsonp", url: "./content/wizard/summary.json" } }   
        
    },

    packages: [
        { name: "scripts", location: "../scripts/" },
        { name: "lib",     location: "../lib/" },
        
        { name: "jquery",           main: "jquery",                  location: "../vendor/jquery/dist/" },
        { name: "jquery.cookie",    main: "jquery.cookie",           location: "../vendor/jquery.cookie/" },        
        { name: "jquery.serialize", main: "jquery.serialize-object", location: "../vendor/jquery-serialize-object/" },
        { name: "slick",            main: "slick",                   location: "../vendor/slick.js/slick/" }
    ],

    paths: {
        "domReady" : "../vendor/requirejs-domready/domReady",
        "i18n"     : "../vendor/requirejs-i18n/i18n",        
        
        "foundation"             : "../vendor/foundation/js/foundation/foundation",
        "foundation/abide"       : "../vendor/foundation/js/foundation/foundation.abide",
        "foundation/accordion"   : "../vendor/foundation/js/foundation/foundation.accordion",
        "foundation/alert"       : "../vendor/foundation/js/foundation/foundation.alert",
        "foundation/clearing"    : "../vendor/foundation/js/foundation/foundation.clearing",
        "foundation/dropdown"    : "../vendor/foundation/js/foundation/foundation.dropdown",
        "foundation/equalizer"   : "../vendor/foundation/js/foundation/foundation.equalizer",
        "foundation/interchange" : "../vendor/foundation/js/foundation/foundation.interchange",
        "foundation/joyride"     : "../vendor/foundation/js/foundation/foundation.joyride",
        "foundation/magellan"    : "../vendor/foundation/js/foundation/foundation.magellan",
        "foundation/offcanvas"   : "../vendor/foundation/js/foundation/foundation.offcanvas",
        "foundation/orbit"       : "../vendor/foundation/js/foundation/foundation.orbit",
        "foundation/reveal"      : "../vendor/foundation/js/foundation/foundation.reveal",
        "foundation/tab"         : "../vendor/foundation/js/foundation/foundation.tab",
        "foundation/tooltip"     : "../vendor/foundation/js/foundation/foundation.tooltip",
        "foundation/topbar"      : "../vendor/foundation/js/foundation/foundation.topbar",

        "fastclick"            : "../vendor/fastclick/lib/fastclick",
        "jquery.placeholder"   : "../vendor/jquery-placeholder/jquery.placeholder",
        "jquery.query"         : "../vendor/jquery-plugin-query-object/jquery.query-object",
        "jquery.scrolltofixed" : "../vendor/ScrollToFixed/jquery-scrolltofixed"
    },
        
    shim: {
            
        "foundation": { 
            deps: [ "jquery", "fastclick" ], 
            exports: "Foundation"
        },
    
        "foundation/abide"       : { deps: [ "foundation" ] },
        "foundation/accordion"   : { deps: [ "foundation" ] },
        "foundation/alert"       : { deps: [ "foundation" ] },
        "foundation/clearing"    : { deps: [ "foundation" ] },
        "foundation/dropdown"    : { deps: [ "foundation" ] },
        "foundation/equalizer"   : { deps: [ "foundation", "jquery.placeholder" ] },
        "foundation/interchange" : { deps: [ "foundation" ] },
        "foundation/joyride"     : { deps: [ "foundation", "jquery.cookie" ] },
        "foundation/magellan"    : { deps: [ "foundation" ] },
        "foundation/offcanvas"   : { deps: [ "foundation" ] },
        //"foundation/orbit"       : { deps: [ "foundation" ] },
        "foundation/reveal"      : { deps: [ "foundation" ] },
        "foundation/slider"      : { deps: [ "foundation" ] },
        "foundation/tab"         : { deps: [ "foundation" ] },
        "foundation/tooltip"     : { deps: [ "foundation" ] },
        "foundation/topbar"      : { deps: [ "foundation" ] },
        
        "fastclick"            : {                     exports: "FastClick"    },
        "jquery.placeholder"   : { deps: [ "jquery" ], exports: "Placeholders" },
        "jquery.query"         : { deps: [ "jquery" ], exports: "jQuery.query" },
        "jquery.scrolltofixed" : { deps: [ "jquery" ], exports: "jQuery.ScrollToFixed" }
        
    }
        
});
