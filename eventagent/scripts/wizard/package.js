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

    var $persons        = $( "[name='booking[persons]']" ),
        $event_date     = $( "[name='booking[event_date]']" ),
        $ticket_type    = $( "[name='booking[ticket_type]']" ),
        $arrival_date   = $( "[name='booking[arrival_date]']" ),
        $departure_date = $( "[name='booking[departure_date]']" ),
        $room           = $( "[name='booking[room]']" );
        
    var url       = module.config( ).validation_url,
        validator = validation.validator({ url : url });        
        
    [
        $persons,       
        $event_date,
        $ticket_type,   
        $arrival_date,  
        $departure_date,
        $room
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