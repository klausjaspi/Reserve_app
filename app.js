
 document.querySelector('.custom-select-wrapper').addEventListener('click', function () {
    this.querySelector('.custom-select').classList.toggle('open');
    this.querySelector('.anotherone').classList.toggle('open');
    this.querySelector('.calendarbar').classList.toggle('open');
    this.querySelector('.calendarbar2').classList.toggle('open');
 })


/*for (const dropdown of document.querySelectorAll(".custom-select-wrapper")) {
    dropdown.addEventListener('click', function() {
        this.querySelector('.custom-select').classList.toggle('open');
    })
}*/

 window.addEventListener('click', function (e) {
     const select = document.querySelector('.custom-select')
     if (!select.contains(e.target)) {
        select.classList.remove('open');
    }
    const select2 = document.querySelector('.anotherone')
     if (!select2.contains(e.target)) {
        select2.classList.remove('open');
    }
    const select3 = document.querySelector('.calendarbar')
     if (!select3.contains(e.target)) {
        select3.classList.remove('open');
    }
    const select4 = document.querySelector('.calendarbar2')
     if (!select3.contains(e.target)) {
        select4.classList.remove('open');
    }
 });


/*window.addEventListener('click', function(e) {
    for (const select of document.querySelectorAll('.custom-select')) {
        if (!select.contains(e.target)) {
            select.classList.remove('open');
        }
    }
});*/

