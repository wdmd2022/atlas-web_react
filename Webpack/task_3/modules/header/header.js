import $ from 'jquery';
import './header.css';

$(function() {
    const header = $('<header>');
    header.append('<div id="logo"></div>');
    header.append('<h1>Holberton Dashboard</h1>');
    console.log('Init header');
    $('body').prepend(header);
});
