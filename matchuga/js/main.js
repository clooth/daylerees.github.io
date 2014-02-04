jQuery(document).ready(function($)
{
    $('.j-start').click(function()
    {
        $('.stage').fadeOut(300);
        $('.form').delay(400).fadeIn(300);
    });
    $('.j-find').click(function()
    {
        $('.stage').fadeOut(300);
        $('.loading').delay(400).fadeIn(300).delay(3000).fadeOut(300);
        $('.congratulations').delay(4000).fadeIn(300);
    });
    $('.checkbox').click(function()
    {
        $('.checkbox').removeClass('active');
        $(this).addClass('active');
    });
});
