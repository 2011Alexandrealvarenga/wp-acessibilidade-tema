<?php
function seu_tema_scripts() {
    wp_enqueue_style( 'seu-tema-style', get_stylesheet_uri() );
}

add_action( 'wp_enqueue_scripts', 'seu_tema_scripts' );

