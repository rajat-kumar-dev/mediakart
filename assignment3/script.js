document.addEventListener(
  'scroll',
  function () {
    document.body.style.setProperty(
      '--scroll',
      window.scrollY / (document.body.offsetHeight - window.innerHeight)
    );
  },
  false
);
