
// lenis
const lenis = new Lenis();

lenis.on('scroll', ScrollTrigger.update);
 
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// lenis link
$('.sc-visual .group-content.content2 .link-btn').click(function (e) { 
  e.preventDefault();
  lenis.scrollTo('#project');
});

// nav btn
$('#header .toggle').click(function (e) { 
  e.preventDefault();

  if ($(this).hasClass('show')){
    nav.reverse();
  } else {
    nav.restart();
  }

  $('#header .nav').toggleClass('open');
  
  $(this).toggleClass('show');
});

// nav .nav-item hover
$('#header .nav .nav-item').hover(function(){
  $(this).siblings().css('opacity','0.2');
}, function(){
  $(this).siblings().css('opacity','1');
});

// nav .nav-item click
$('#header .nav .nav-item1').click(function(e){ 
  e.preventDefault();

  lenis.scrollTo('.sc-visual .group-content.content2');
  nav.reverse();
  $('#header .toggle').removeClass('show'); 
  $('#header .nav').removeClass('open');
});
$('#header .nav .nav-item2').click(function(e){ 
  e.preventDefault();

  lenis.scrollTo('#project');
  nav.reverse();
  $('#header .toggle').removeClass('show'); 
  $('#header .nav').removeClass('open');
});
$('#header .nav .nav-item3').click(function(e){ 
  e.preventDefault();

  lenis.scrollTo('#contact');
  nav.reverse();
  $('#header .toggle').removeClass('show'); 
  $('#header .nav').removeClass('open');
});

// nav clip-path
const nav = gsap.timeline({
  scrollTrigger: {
    trigger: '#header .nav', 
    start: "top top",
    end: "100% 100%",
    // markers: true,
  },
  paused: true, 
})
nav
  // .set('#header .nav', { 
  //   visibility: 'visible', opacity: 1 })
  .to('#header .nav .nav-leftBg',{
    transform: 'translateY(0%)'
  },'a')
  .to('#header .nav .nav-list',{
    'clip-path': 'inset(0% 0% 0% 0%)'
  },'a')

// con-wrap
const visualwrap = gsap.timeline({
  scrollTrigger: {
    trigger: '.con-wrap', 
    start: '0% 0%',
    end: '100% 100%',
    scrub: 0,
    // markers: true,
  }
});
visualwrap
  .to('.sc-visual .group-content.content2 .content-area',{ opacity:0, })
  .from('.sc-visual .about-inner .about-area',{ opacity:0, },'a')
  .to('.sc-visual .about-inner .moon-area', { opacity: 1, transform: 'translate(0%)' },'a-=0.1')

// sc-visual
const visual = gsap.timeline({});
visual
 .from('.sc-visual .group-content.content1 .title',0.8,{ yPercent:100, opacity: 1, stagger:0.2,},'>')
 .to('.sc-visual .group-content.content1',0.8,{ 'clip-path': 'inset(0% 0% 100% 0%)' },'>')

// point-area
const pointArea = gsap.timeline({
  scrollTrigger: {
    trigger: '.point-area', 
    start: '20% 70%',
    end: '100% 100%',
    scrub: 0,
    // markers: true,
    onEnter: function() {
      $('.point-area .marquee').addClass('on');
    },
    onLeave: function() {
      $('.point-area .marquee').removeClass('on');
    },
    onEnterBack: function() {
      $('.point-area .marquee').addClass('on');
    },
    onLeaveBack: function() {
      $('.point-area .marquee').removeClass('on');
    }
  }
});

// custom cursor

// footer
gsap.to("#footer", {
  scrollTrigger: {
    trigger: ".point-area",
    start: "100% 100%", 
    end: "bottom bottom", 
    scrub: 0,
    // markers: true,
  },
});