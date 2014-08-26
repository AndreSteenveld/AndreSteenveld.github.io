define( [ "jquery", "scripts/state" ], function( $, state ){
    
    state = JSON.parse( state );

    function add( item ){
        
        var $row = $(
                $template.item
                    .replace( "{{amount}}",      item.amount || "" )
                    .replace( "{{description}}", item.description )
                    .replace( "{{price}}",       item.price || "" )
            );
        
        $row.data( "index", items.push( item ) );
        
        "price" in item
            ? $row.insertBefore( $cart.total )
            : $row.insertAfter( $cart.title );
            
        update( );        
    }
    
    function remove( item ){
    
                
        update( );                
    }
    
    function update( ){
    
        $( ".wizard_cart_total_amount" ).text(
            items.reduce(
                function( total, item ){
                    
                    if( "price" in item )
                        total += "amount" in item
                            ? item.price * item.amount
                            : item.price;
                    
                    return total;       
                                 
                },
                0.00
            )
        );
        
    }

    var $cart = {
            title: $( ".wizard_cart_title" )[ 0 ],
            total: $( ".wizard_cart_total" )[ 0 ]
        };
        
    var $template = { item: $( "#wizard_cart_item-template" ).text( ) };

    var items = [ ];
        
    Object
        .keys( state )
        .forEach( function( key ){
        
            switch( key ){
                        
                case "package": {
                    add({
                        description: state.package.name,
                        price: state.package.price
                    });
                    break;
                }
            
                case "extra": { 
                    state.extra.forEach( function( item ){
                    
                        add( JSON.parse( item ) );
                        
                    });
                    break;     
                }
                case "booking": { break; }
                case "personal": { break; }
                
                default: {
                    console.log( "We found an unknown key! [ ", key, " ]" );
                    break;
                }
            
            }        
        
        });

    return { add: add, remove: remove };
});