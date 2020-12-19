

// keydown event
document.addEventListener('keydown', (e) => {
    
    console.log(e)

    //info container
    const info = document.querySelector('.info-container')
    //show big key
    document.querySelector('h2').textContent = e.key
    info.firstElementChild.lastElementChild.textContent = e.key
    info.children[1].lastElementChild.textContent = e.which
    info.lastElementChild.lastElementChild.textContent = e.code 


});






