const $ = document;

function getElementByClass (elem) {
    return $.querySelector(`.${elem}`)
}

function getAllElementsByClass (elem) {
    return $.querySelectorAll(`.${elem}`)
}

// DOM Elements
const html_tag = getElementByClass('html');
const dark_mode_btn = getElementByClass('dark-mode-container');
const switches = getAllElementsByClass('circle');
const all_filter = getElementByClass('all');
const active_filter = getElementByClass('active');
const inactive_filter = getElementByClass('inactive');
const extensions = $.querySelectorAll('.extension-container > div[class *="-container"]');
const extensions_arr = []
extensions.forEach(extension => extensions_arr.push(extension));
const filter_options = [all_filter, active_filter, inactive_filter]




filter_options.forEach(option => {
    option.addEventListener('click', (event)=> {
        filter_extensions(event.currentTarget)   
    })
})

function filter_extensions (element) {
    filter_options.forEach(option => option.classList.remove('active-filter'));
    element.classList.add('active-filter');
    switch (element.id) {
        case 'inactive':
            filter_inactive ()
            break;
        case 'active' :
            filter_active()
            break;
        default:
            filter_all()
            break;
    }
}


function filter_all () {
    extensions_arr.forEach(extension => extension.classList.remove('hidden'));
}

function filter_active () {
    filter_all()
    const not_active_extension = extensions_arr.filter(extension => extension.classList.contains('active-extension') == false)
    not_active_extension.forEach(extension => extension.classList.add('hidden'));
}

function filter_inactive () {
    filter_all()
    const active_extension = extensions_arr.filter(extension => extension.classList.contains('active-extension'))
    active_extension.forEach(extension => extension.classList.add('hidden'));
}











switches.forEach(element => {
    element.addEventListener('click', (event)=> {
        toggle_switch(event.target)
    })
})

function toggle_switch(element) {
    element.classList.toggle('go-right');
    element.parentElement.classList.toggle('active-switch');
    element.parentElement.parentElement.parentElement.classList.toggle('active-extension');
}



























let dark_mode = true
dark_mode_btn.addEventListener('click', toggle_dark_mode);

function toggle_dark_mode() {
    if(dark_mode) {
        dark_mode_btn.firstElementChild.classList.remove('hidden');
        dark_mode_btn.lastElementChild.classList.add('hidden');
        html_tag.classList.add('dark');
        dark_mode = !dark_mode;
    }
    else {
        dark_mode_btn.firstElementChild.classList.add('hidden');
        dark_mode_btn.lastElementChild.classList.remove('hidden');
        html_tag.classList.remove('dark');
        dark_mode = !dark_mode;
    }
}
