$(document).ready(function() {
    console.log("Script is running");
    $('body').on('mouseenter', '.submitted-grids .edit-grid', function() {
        let deleteButton = $('<button>').addClass('delete-button').text('Delete');
        $(this).append(deleteButton);
    });

    $('body').on('mouseleave', '.submitted-grids .edit-grid', function() {
        $(this).find('.delete-button').remove();
    });
});