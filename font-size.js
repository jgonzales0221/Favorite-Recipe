
var baseFontSize = 16; // Default base font size for paragraphs with class 'intro'

function changeFontSize(change) {
    var elements = document.querySelectorAll('.intro, .resizable-text,.ingrRec, .instr, .notes,  .instruction, .questions, .answers'); // Now selects both intro and resizable-text classes
    elements.forEach(element => {
        var currentFontSize = parseFloat(window.getComputedStyle(element, null).getPropertyValue('font-size'));
        element.style.fontSize = (currentFontSize + change) + 'px';
    });
}

function resetFontSize() {
    var elements = document.querySelectorAll('.intro, .resizable-text,.ingrRec, .instr, .notes, .instruction, .questions, .answers');
    elements.forEach(element => {
        element.style.fontSize = baseFontSize + 'px';
    });
}