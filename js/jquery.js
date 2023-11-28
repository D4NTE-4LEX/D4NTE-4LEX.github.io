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

    let ex8Button = $('#ex8Button');
    ex8Button.click(() => {
        alert('Value: ' + $('#ex8').val());
    });

    let btn1ex9 = $('#btn1Ex9');
    let btn2ex9 = $('#btn2Ex9');
    let btn3ex9 = $('#btn3Ex9');
    btn1ex9.click(() => {
        $('#test1Ex9').text('Hello world!');
    });
    btn2ex9.click(() => {
        $('#test2Ex9').html('<b>Hello world!</b>');
    });
    btn3ex9.click(() => {
        $('#test3Ex9').val('Dolly Duck');
    });

    let btn1Ex10 = $('#btn1Ex10');
    let btn2Ex10 = $('#btn2Ex10');
    btn1Ex10.click(() => {
        $('[id=ex10]').append(' <b>Appended text</b>.');
    });
    btn2Ex10.click(() => {
        $('#olEx10').append('<li>Appended item</li>');
    });

    let btnEx11 = $('#btnEx11');
    btnEx11.click(() => {
        $('#ex11').remove();
    });

    let btnEx12 = $('#btnEx12');
    btnEx12.click(() => {
        $('#ex12').addClass('blue');
        $('#divEx12').addClass('important');
    });

    let btnEx13 = $('#btnEx13');
    btnEx13.click(() => {
        alert("Background color = " + $('#ex13').css('background-color'));
    });

    let btnEx14 = $('#btnEx14');
    btnEx14.click(() => {
        var txt = "";
        txt += "Width of div: " + $('#divEx14').width() + "</br>";
        txt += "Height of div: " + $('#divEx14').height();
        $('#divEx14').html(txt);
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