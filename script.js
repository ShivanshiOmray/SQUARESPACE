var t1 = gsap.timeline();
t1.from("#nav img ,#nav h4 , #nav button", {
  y: -50,
  opacity: 0,
  duration: 0.5,
  stagger: 0.2,
  delay: 0.5,
});
t1.from("#content h1", {
  y: 50,
  opacity: 0,
  stagger: 0.3,
});
t1.from("#main>img", {
  opacity: 0,
  scale: 0,
  stagger: 0.3,
});
t1.from("#main>button", {
  scale: 0,
  opacity: 0,
});
t1.to("#main>button", {
  y: 10,
  repeat: -1,
  yoyo: true,
});
