var currentX, currentY;
var currentElem;
var blocksCount = 10;
function blockMove(elem, dx, dy)
{
    var coordX = parseFloat(getComputedStyle(elem).left) + dx;
    var coordY = parseFloat(getComputedStyle(elem).top) + dy;
    elem.style.left = coordX + "px";
    elem.style.top = coordY + "px";
}
document.documentElement.addEventListener('dragstart', function (event) {
   event.preventDefault();
});
document.documentElement.addEventListener('mousedown', function(event)
{
    currentElem = event.target;
    currentX = event.clientX;
    currentY = event.clientY;
    currentElem.classList.add('selected');
});
document.documentElement.addEventListener('mouseup', function(event)
{
    currentElem.classList.remove('selected');
});
document.documentElement.addEventListener('mousemove', function(event)
{
    if (event.buttons == 1) {
        var dx = event.clientX - currentX;
        var dy = event.clientY - currentY;
        blockMove(currentElem, dx, dy);
        currentX = event.clientX;
        currentY = event.clientY;
    }
});
function createRandomBlock()
{
    var elem = document.createElement('div');
    elem.classList.add('block');
    elem.style.left = Math.round(Math.random() * 800) + 'px';
    elem.style.top = Math.round(Math.random() * 300) + 'px';
    var rgbString = `rgb(${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)})`;
    elem.style.backgroundColor = rgbString;
    return elem;
}

for(var i = 0; i < blocksCount; i++)
{
    var blockElem = createRandomBlock();
    document.body.appendChild(blockElem);
}