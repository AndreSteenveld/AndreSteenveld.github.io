define([ "jquery" ], function( $ ){

    return function content( data ){
            
        if( !data || !( "select" in data ) ) return;
        
        Object     
            .keys( data.select )
            .forEach( function( selector ){

                var $select = $( selector );
                
                $select.html( "" );
            
                var options = data.select[ selector ].reduce( 
                    function( $select, attribute ){
                    
                        $select.append( $( "<option>", attribute ) );
                    
                        return $select;
                    
                    }
                    , $select
                );    
                
            });
            
        return data;
    
    };

});