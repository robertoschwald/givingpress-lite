jQuery( document ).ready( function( $ ) {

	/**
	 * Real-time preview of the site title and description text
	 */
	wp.customize( 'blogdescription', function( value ) {
		value.bind( function( to ) {
			$( '.site-description' ).html( to );
		} );
	} );

	/**
	 * Real-time preview of the site title color
	 */
	wp.customize( 'header_textcolor', function( value ) {
		value.bind( function( to ) {
			if ( 'blank' == to ) {
				$( '#masthead .site-description' ).css( {
					'display': 'none'
				} );
			} else {
				$( '#masthead .site-description' ).css( {
					'display': 'block',
					'color': to
				} );
			}
		} );
	} );

});