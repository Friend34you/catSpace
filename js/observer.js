(function () {
  var warning1 = document.querySelector('.upwarning1');
  var warning2 = document.querySelector('.upwarning2');
  var warning3 = document.querySelector('.upwarning3');

  var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
        return;
      }

      if (entry.isIntersecting) {
        entry.target.classList.add('upwarning1-anim');
      }
    });
  });

  observer.observe(warning1);
  observer.observe(warning2);
  observer.observe(warning3);
})();