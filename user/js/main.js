$(function(){

    $('.check_list input[type="checkbox"]').change(function() {
        var allChecked = $('.check_list input[type="checkbox"]').length === $('.check_list input[type="checkbox"]:checked').length;
        $('#agree').prop('checked', allChecked);
    });

    $('#agree').change(function() {
        var isChecked = $(this).is(':checked');
        $(this).closest('.check_event').find('input[type="checkbox"]').prop('checked', isChecked);
    });

})