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

    var $initials     = $( "[name='naw[initials]']" ),
        $surname      = $( "[name='naw[surname]']" ),
        $email        = $( "[name='naw[email]']" ),
        $phone_number = $( "[name='naw[phone_number]']" ),
        $address      = $( "[name='naw[address]']" ),
        $zipcode      = $( "[name='naw[zipcode]']" ),
        $city         = $( "[name='naw[city]']" ),
        $country      = $( "[name='naw[country]']" );
    
    var url       = module.config( ).validation_url,
        validator = validation.validator({ url : url });        
    
    [
        $initials,    
        $surname,     
        $email,       
        $phone_number,
        $address,     
        $zipcode,     
        $city,        
        $country
    ]
    .forEach( function( $node ){
        
        $node.change( function( evt ){        
            validator( evt )
                .then( cart )
                .then( select )
                .then( values )
                .then( messages );
        });
                
        $node.blur( function( evt ){         
            validator( evt )
                .then( cart )
                .then( select )
                .then( values )
                .then( messages );
        });       
        
    });
    
});