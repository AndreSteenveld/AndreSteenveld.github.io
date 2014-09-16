define([ 
    "jquery", 

    "scripts/validation", 
    "scripts/cart", 
    "scripts/select", 
    "scripts/values",
    "scripts/messages",
    
    "module", 

    "domReady!"
], 
function( $, validation, cart, select, values, messages, module ){
            
    var $pairs = $( "[type='checkbox'][name^='extra']" ).map( function(  index, $checkbox ){
            $checkbox = $( $checkbox );
            
            var $amount = $( "~ > input[type='number']", $checkbox.parent( ) );
            
            return { $checkbox: $checkbox, $amount: $amount };        
        });
                
    var validator = validation.validator( module.config( ).ajax );        
    
    $pairs.each( function( index, pair ){
        
        pair.$checkbox.change( function( evt ){        
            validator( evt )
                .then( cart )
                .then( select )
                .then( values )
                .then( messages );
        });
        
        pair.$amount.change( function( evt ){        
            validator( evt )
                .then( cart )
                .then( select )
                .then( values )
                .then( messages );
        });
        
        pair.$checkbox.blur( function( evt ){        
            validator( evt )
                .then( cart )
                .then( select )
                .then( values )
                .then( messages );
        });
        
        pair.$amount.blur( function( evt ){        
            validator( evt )
                .then( cart )
                .then( select )
                .then( values )
                .then( messages );
        });
        
    });
    
});