define({

    get: function( path, obj ){
        return [ obj || this ]
            .concat( path.split( "." ) )
            .reduce( function( previous, current ){ return previous[ current ]; });
    },

    set: function( path, value, obj ){    
        return [ obj || this ]
            .concat( path.split( "." ) )
            .reduce( function( previous, current, index, array ){
            
                if( index + 1 === array.length ) 
                    return ( previous[ current ] = value );

                if( !( current in previous ) )
                    previous[ current ] = { };
                    
                return previous[ current ];
                
            });    
    },
    
    mixin: function( ){
    
        return Array.prototype.slice.call( arguments ).reduce( function( target, mix ){
        
            Object
                .keys( mix )
                .forEach( function( key ){ 
                    
                    target[ key ] = mix[ key ]; 
                   
                });
                
            return target;
            
        });        
        
    }

}); 