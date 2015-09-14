$(document).ready(function(){
    var index = 0;
    var tasks = {task: []};

    $("form#new-task").submit(function(event){
        event.preventDefault();
        var inputtedDescription = $("input#new-description").val();
        var newTask = { description: inputtedDescription, completed: 0 };

        tasks.task.push(newTask);

        $("#uncompleted-tasks").empty();
        $("#completed-tasks").empty();
        makeLists(tasks, index);


        $('body').on('click', 'input.uncompleted', function(){
        // $("input.check").click(function() {

            var checkedItem = $(this).val();

            tasks.task[checkedItem].completed = 1;

            $("#uncompleted-tasks").empty();
            $("#completed-tasks").empty();

            makeLists();
        });

        $('body').on('click', 'input.completed', function(){
        // $("input.check").click(function() {

            var checkedItem = $(this).val();

            tasks.task[checkedItem].completed = 0;

            $("#uncompleted-tasks").empty();
            $("#completed-tasks").empty();

            makeLists();
        });

        $("input#new-description").val("");
    });

    // Function to populate both display lists on the webpage
    //-------------------------------------------------------------------------
    var makeLists = function() {
        index=0;
        tasks.task.forEach(function(task) {
            if (task.completed === 1) {
                $("ul#completed-tasks").append("<li id='completed'><input class='check completed' type='checkbox' id='index' value='" + index + "' checked >  " +
                  task.description + "</li>");
                  index++;
            } else {
                $("ul#uncompleted-tasks").append("<li><input class='check uncompleted' type='checkbox' id='index' value='" + index + "'>  " +
                  task.description + "</li>");
                  index++;
            }
        });
    };
});
