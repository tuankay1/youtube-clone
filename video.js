var span = Array.from(document.querySelectorAll('span')) 
var items = Array.from(document.querySelectorAll('section'));
var iframe = document.querySelector('iframe');
var video_container = document.getElementById('video-container');

items.forEach(item =>{
    item.addEventListener("click", ()=>{
        video_container.classList.toggle('active');
        var id = item.getAttribute('id');
        const video_src = document.createAttribute('src');
        iframe.setAttribute('src', span[id].innerText);
    })
})