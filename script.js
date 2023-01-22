const slider = document.querySelector('.slides');

const prev = document.querySelector('#prev-btn');
const next = document.querySelector('#next-btn');

var index=0;

prev.addEventListener('click', function(){
  index = (index > 0)? index - 1 : 0;
  slider.style.transform = 'translate('+ (index) * 50 + '%)';
});


next.addEventListener('click', function(){
  index = (index < 1)? index + 1 : 1;
  slider.style.transform = 'translate('+ (index) * -50 + '%)';
});
