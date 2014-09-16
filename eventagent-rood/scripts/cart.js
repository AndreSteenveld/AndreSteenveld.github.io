define( [ "jquery", "domReady!" ], function( $ ){
    
    // Templates
    var ITEM_TEMPLATE  = $( "#wizard_cart_item-template" ).html( ),
        TOTAL_TEMPLATE = $( "#wizard_cart_total-template" ).html( );    
    
    // Our interface to communicate with the data we are getting
    return function cart( data ){
        
        if( !data || !( "cart"  in data ) ) return;
        
        var total = TOTAL_TEMPLATE
                .replace( "{{title}}", data.cart.total.title )
                .replace( "{{total}}", data.cart.total.total ),
                
            items = data.cart.items.map( function( item ){
                
                return ITEM_TEMPLATE
                    .replace( "{{title}}", item.title )
                    .replace( "{{amount}}", item.amount );
                    
            });     
            
        $( "#wizard_cart" ).html( items.join( "\n" ) + "\n" + total );
        
        return data;
        
    };
    
});