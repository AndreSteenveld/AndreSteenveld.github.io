require([ "jquery", "foundation" ], function( $ ){

    $( document ).foundation( );
    
    $( document ).on( "after-height-change.fndtn.equalizer", function( ){
        $( ".testemonial .testemonial_button" )
            .css({ lineHeight: $( ".testemonial .testemonial_slickContainer" ).css( "height" ));
    });    
        

});