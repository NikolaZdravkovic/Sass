function add(selector, cls) {
    document.querySelector(selector).classList.add(cls)
}

function remove(selector, cls) {
    document.querySelector(selector).classList.remove(cls);
}

function show(pos) {
    remove('.slide.showing', 'showing');
    remove('.createdByText.show', 'show');
    remove('.box4text.showText', 'showText');



    add('.slide:nth-child(' + pos + ')', 'showing')
    add('.createdByText:nth-child(' + pos + ')', 'show')
    add('.box4text:nth-child(' + pos + ')', 'showText')


    remove('.dotDesktop.active', 'active');
    add('.dotDesktop:nth-child(' + pos + ')', 'active')
}