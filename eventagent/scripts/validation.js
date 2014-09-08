define([ "jquery", "scripts/object", "jquery.serialize" ], function( $, O ){   
    
    function validator( settings ){
    
        var request = null;
    
        return function( evt ){
    
            var record = { 
                event  : evt.type,
                target : $( evt.target ).attr( "name" ),
                form   : $( "#wizard form" ).serializeObject( ) 
            };
                
            delete record.form.state;
        
            if( request ) request.abort( );
                        
            request = $.ajax(
                O.mixin(
                    { 
                        data    : JSON.stringify( record ),            
                        headers : {
                            
                            "Accept"       : "application/json",
                            "Content-Type" : "application/json"
                        
                        }
                    }
                    , settings || { }
                )
            );
            
            request.always( function( ){ request = null; } );
            
            return request;
        };
                
    };    
    
    return { validator : validator };
    
});