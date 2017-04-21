function changeid (path, title)
{
    var _tit = document.getElementById('showImg').getElementsByTagName('tit')[0];
    var _img = document.getElementById('showImg').getElementsByTagName('img')[0];
    _img.src = "myCSS/myIMG/GALLERY/"+path;
    _tit.textContent = title;
}
function myret() {
    window.location.href = 'index.html';
}