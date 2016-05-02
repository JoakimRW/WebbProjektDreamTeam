/**
 * Created by LeoAsp on 2016-04-29.
 */

var chosenTest;
var indexChosenTest;
var userTest;
$(document).ready(function () {
    userTest = JSON.parse(localStorage.getItem("usertest"));

    $("#tilldelaSection").on("click", "li.handle-item", function () {
        console.log("Clicked");
        var id = $(this).attr("id");
        console.log(id);
        var checkboxId = id + "checkbox";
        console.log(checkboxId);
        if (document.getElementById(checkboxId).checked) {
            document.getElementById(checkboxId).checked = false;
        } else {
            document.getElementById(checkboxId).checked = true;
        }
    });


});


function drawList() {
    userTest = JSON.parse(localStorage.getItem("usertest"));
    var users = JSON.parse(localStorage.getItem("users"));
    indexChosenTest = userTest.testName.indexOf(chosenTest);

    $("#studentList").empty();
    for (var i = 0; i < users.mail.length; i++) {
        var $li = "";
        var checked = false;
        for (var j = 0; j < userTest.mail.length; i++) {
            if (userTest.mail[i][j] == users.mail[i]) {
                checked = true;
            }
        }
        if (i % 2 == 0) {
            if (checked) {
                $li = $("<li class='grid-100 handle-item gray' id='" + users.mail[i] + "'><div class='grid-10'><input id=" + users.mail[i] + "checkbox type='checkbox' checked></div><div class='grid-20 handle-div'>" + users.firstName[i] + "</div><div class='grid-20 handle-div'>" + users.lastName[i] + "</div><div class='grid-25 handle-div'>" + users.className[i] + "</div><div class='grid-25 handle-div'>" + users.mail[i] + "</div></li>");
            } else {
                $li = $("<li class='grid-100 handle-item gray' id='" + users.mail[i] + "'><div class='grid-10'><input id=" + users.mail[i] + "checkbox type='checkbox'></div><div class='grid-20 handle-div'>" + users.firstName[i] + "</div><div class='grid-20 handle-div'>" + users.lastName[i] + "</div><div class='grid-25 handle-div'>" + users.className[i] + "</div><div class='grid-25 handle-div'>" + users.mail[i] + "</div></li>");
            }

        } else {
            if (checked) {
                $li = $("<li class='grid-100 handle-item white' id='" + users.mail[i] + "'><div class='grid-10'><input id=" + users.mail[i] + "checkbox type='checkbox' checked></div><div class='grid-20 handle-div'>" + users.firstName[i] + "</div><div class='grid-20 handle-div'>" + users.lastName[i] + "</div><div class='grid-25 handle-div'>" + users.className[i] + "</div><div class='grid-25 handle-div'>" + users.mail[i] + "</div></li>");
            } else {
                $li = $("<li class='grid-100 handle-item white' id='" + users.mail[i] + "'><div class='grid-10'><input id=" + users.mail[i] + "checkbox type='checkbox'></div><div class='grid-20 handle-div'>" + users.firstName[i] + "</div><div class='grid-20 handle-div'>" + users.lastName[i] + "</div><div class='grid-25 handle-div'>" + users.className[i] + "</div><div class='grid-25 handle-div'>" + users.mail[i] + "</div></li>");
            }
        }

        $("#studentList").append($li);
    }
}

$("#selectProv").change(function () {
    chosenTest = $("#selectProv").val();
    console.log(chosenTest);
    drawList();
});

$(".getClasses").click(function () {
console.log("GetClasses");
    var testData = JSON.parse(localStorage.getItem("testdata"));
    $("#selectProv").empty();
    console.log(testData.testName[0]);
    $("#selectProv").append($("<option></option>"))
    for (var i = 0; i < testData.testName.length; i++) {
        var $options=null;
        $options = $("<option> "+ testData.testName[i] + "</option>")
        $("#selectProv").append($options)
    }
    console.log($options);


});


