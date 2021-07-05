// document.getElementById('top-nav').style.display='none'
// $('.ui.sidebar')
//   .sidebar('toggle')
// ;

$('.ui.sidebar').sidebar('hide')

$('#hamburger').click(()=>{
    $('.ui.sidebar').sidebar('setting', 'transition', 'overlay').sidebar('toggle');
})