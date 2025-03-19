window.addEventListener( 'load', () => {
	const acf_fields = document.querySelectorAll( '.acf-field[data-name]' ),
	      svg_icon   = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.696-3.534c.63 0 1.332-.288 2.196-1.458l.911-1.22a.334.334 0 0 0-.074-.472.38.38 0 0 0-.505.06l-1.475 1.679a.241.241 0 0 1-.279.061.211.211 0 0 1-.12-.244l1.858-7.446a.499.499 0 0 0-.575-.613l-3.35.613a.35.35 0 0 0-.276.258l-.086.334a.25.25 0 0 0 .243.312h1.73l-1.476 5.922c-.054.234-.144.63-.144.918 0 .666.396 1.296 1.422 1.296zm1.83-10.536c.702 0 1.242-.414 1.386-1.044.036-.144.054-.306.054-.414 0-.504-.396-.972-1.134-.972-.702 0-1.242.414-1.386 1.044a1.868 1.868 0 0 0-.054.414c0 .504.396.972 1.134.972z" fill="#5195d1"/></svg>';

	if ( acf_fields.length ) {
		for ( const field of acf_fields ) {
			const label_wrapper = field.querySelector( '.acf-label' );

			if ( label_wrapper ) {
				// Create the icon element
				const icon             = document.createElement( 'span' );
				icon.innerHTML         = svg_icon;
				icon.style.cursor      = 'pointer';
				icon.style.marginRight = '10px';

				// Append the icon to the label
				label_wrapper.insertBefore( icon, label_wrapper.children[ 0 ] ?? null );

				// Add click event listener to the label
				label_wrapper.addEventListener( 'click', function () {
					const dataName       = field.getAttribute( 'data-name' ),
					      label_position = this.getBoundingClientRect();
					console.log( label_position );

					navigator.clipboard.writeText( dataName ).then( () => {
						// Show popup notification
						const popup                 = document.createElement( 'div' );
						popup.textContent           = 'Copied!';
						popup.style.position        = 'fixed';
						popup.style.top             = label_position.bottom + 5 + 'px';
						popup.style.left            = label_position.left + 'px';
						popup.style.backgroundColor = '#333';
						popup.style.color           = '#dfdfdf';
						popup.style.padding         = '5px 10px';
						popup.style.borderRadius    = '5px';
						popup.style.zIndex          = '1000';
						document.body.appendChild( popup );

						// Remove popup after 2 seconds
						setTimeout( () => {
							document.body.removeChild( popup );
						}, 2000 );
					} );
				} );
			}
		}
	}
} );
