/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function dibujar_circulo(ctx,x,y,r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI*2, true);
  ctx.closePath();
  ctx.fill();
}

function dibujar_rectangulo(ctx,x,y,w,h) {
  ctx.beginPath();
  ctx.rect(x,y,w,h);
  ctx.closePath();
  ctx.fill();
}



function limpiar_canvas(ctx) {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
}