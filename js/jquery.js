$(document).ready(() => {
    let taskForm = $('#taskForm');
    let newTaskImput = $('#newTask');
    let taskList = $('#taskList');
    taskForm.submit((event) => {
        event.preventDefault();

        let newTaskText = newTaskImput.val();
        if(newTaskText){
            addTask(newTaskText);
        }
        newTaskImput.val('');
    });

    let ex1Button = $('#ex1Button');
    ex1Button.click(() => {
        let ex1p = $('[id=ex1]');
        ex1p.hide();
    });

    $('[id=ex2]').click(function() {
        $(this).hide();
    });

    let ex3Button = $('#ex3Button');
    ex3Button.click(() => {
        let ex3p = $('[id=ex3]');
        ex3p.toggle();
    });

    let ex4Button = $('#ex4Button');
    ex4Button.click(() => {
        $(div1ex4).fadeToggle();
        $(div2ex4).fadeToggle('slow');
        $(div3ex4).fadeToggle(3000);
    });
    
    $('#flipEx5').click(() => {
        $('#panelEx5').slideToggle('slow');
    });

    let ex6Button = $('#ex6Button');
    ex6Button.click(() => {
        $('#divEx6').animate({left: '250px'});
    });

    let ex7Button = $('#ex7Button');
    $('#flipEx7').click(() => {
        $('#panelEx7').slideDown(5000);
    });
    ex7Button.click(() => {
        $('#panelEx7').stop();
    });

    let addTask = (text) => {
        let newTask = $('<li><p>' + text + '<p></li>');
        newTask.click(function() {
            $(this).toggleClass('completed');
        });
        let delateButton = $('<button class="delete">X</button>');

        delateButton.click(function() {
            $(this).parent().remove();
        });

        newTask.append(delateButton);
        taskList.append(newTask);
    }

    console.log('jQuery is ready');
});