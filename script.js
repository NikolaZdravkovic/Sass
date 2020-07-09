function add(selector, cls) {
    document.querySelector(selector).classList.add(cls)
}

function remove(selector, cls) {
    document.querySelector(selector).classList.remove(cls);
}

function show(pos) {
    remove('.slide.showing', 'showing');
    add('.slide:nth-child(' + pos + ')', 'showing')
    remove('.dotDesktop.active', 'active');
    add('.dotDesktop:nth-child(' + pos + ')', 'active')
}