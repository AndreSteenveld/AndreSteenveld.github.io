define([ "jquery", "scripts/object", "jquery.query", "domReady!" ], function( $, object, query ){

    // Get our current amount of state collected during the wizarding process
    var $state = $( "[name='state']" ),
        urlState  = JSON.parse( query.keys[ "state" ] || "{ }" );

    // Update the state with the current URL data
    Object.keys( query.keys )
        .forEach( function( key ){
            
            if( key === "state" ) return;
                    
            // We got and array of stuff we need to handle now?                    
            if( Array.isArray( query.keys[ key ] ) ){

                object.set( key, query.keys[ key ], urlState );
                
            // A serialized object, make sure to deserialize it and stick it in properly
            } else if( (/^([\[\{]).*([\]\}])$/).test( query.keys[ key ] ) ){
                        
                object.set( key, JSON.parse( query.keys[ key ] ), urlState );
                
            // A plain vanilla litteral
            } else {
            
                object.set( key, query.keys[ key ], urlState );
                
            }
                        
        });

    $state.val( JSON.stringify( urlState ) );
    
    return $state.val( );
    
});