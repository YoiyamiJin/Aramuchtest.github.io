document.addEventListener('DOMContentLoaded', function() {
  // ヒーローセクションのフェードインアニメーション
  const hero = document.querySelector('.hero');
  setTimeout(() => {
    hero.style.transition = 'opacity 1s';
    hero.style.opacity = 1;
  }, 500);

  // Intersection Observerでスクロールに合わせたフェードイン
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  const observer = new IntersectionObserver(
    (entries, observerInstance) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observerInstance.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  animateElements.forEach(element => {
    observer.observe(element);
  });

  // モバイルメニューのトグル機能
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const navLinks = document.querySelector('nav .nav-links');
  mobileToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
  });
});
