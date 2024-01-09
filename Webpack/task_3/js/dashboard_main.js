import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';

var count = 0;

function updateCounter(){
    count += 1;
    $('#count').text(`${count} clicks on the button`)
}

$(function() {
    $('body').append('<div id="logo"></div>');
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button id="get_started">Click here to get started</button>');
    $('body').append("<p id='count'>0 clicks on the button</p>")
    $('body').append('<p>Copyright - Holberton School</p>');
    $('#get_started').on('click', _.debounce(updateCounter, 500));
});
