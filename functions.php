<?php
function seu_tema_scripts() {
    wp_enqueue_style( 'seu-tema-style', get_stylesheet_uri() );
}

add_action( 'wp_enqueue_scripts', 'seu_tema_scripts' );

function acessibilidadeCss()
{ 

		wp_register_style('acessibilidade_css', get_stylesheet_directory_uri().'/assets/css/acessibilidade.css');
		wp_enqueue_style('acessibilidade_css');
}
add_action('wp_enqueue_scripts', 'acessibilidadeCss');

function acessibilidadeJs()
{ 
		wp_register_script('acessibilidade_js', get_stylesheet_directory_uri().'/assets/js/acessibilidade.js', array('jquery'));
		wp_enqueue_script('acessibilidade_js');
}
add_action('wp_footer', 'acessibilidadeJs');