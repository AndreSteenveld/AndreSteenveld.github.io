define([ "jquery", "jquery.serialize" ], function( $ ){   
    
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
            
            request = $.ajax({ 
                type    : "POST", 
                data    : JSON.stringify( record ),
                url     : settings.url,
                headers : {
                    
                    "Accept"       : "application/json",
                    "Content-Type" : "application/json"
                
                }
            });
            
            request.always( function( ){ request = null; } );
            
            return request;
        };
                
    };    
    
    return { validator : validator };
    
});