

window.onload = function () {
  let canvas = document.getElementById('c');
  let ctx = canvas.getContext('2d');
  let width = clamp(window.innerWidth, 1200, Infinity);
  let height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
  let v = new Verly(50, canvas, ctx);

  // URL = undefined;

  let urlText = 'CCET';
  
  // check support
  if ('URL' in window && URL !== undefined) {
    let url = new URL(window.location.href);
    let query_string = url.search;
    let search_params = new URLSearchParams(query_string);
    urlText = search_params.get('text') || 'HELLO';
  }

  let word = new Text(urlText, 50, 100, 25, v);
  v.addEntity(word.entity);

  function animate() {
    ctx.clearRect(0, 0, width, height);

    v.update();
    v.render();
    v.interact();

    requestAnimationFrame(animate);
  }
  animate();
}