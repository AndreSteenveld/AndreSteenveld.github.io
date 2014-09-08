define( [ "jquery" ], function( $ ){

    return function values( data ){
        
        if( !data || !( "values" in data ) ) return; 
    
        return data;
    };

});