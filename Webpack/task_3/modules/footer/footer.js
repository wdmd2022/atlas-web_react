import $ from 'jquery';
import './footer.css';

$(function() {
    const footerText = '<p>Copyright - Holberton School</p>';
    const footer = $('<footer>').html(footerText);
    $('body').append(footer);
})
