/**
 * Created by LeoAsp on 2016-05-10.
 */
$(document).ready(function () {
    checkRelationship();
});

function checkRelationship() {
    var user = sessionStorage.getItem("loggedInAs");
    var test = sessionStorage.getItem("chosenTest");
    var userTest = JSON.parse(localStorage.getItem("usertest"));
    var hasConnection = false;

    var currentTestIndex;

    for (var i = 0; i < userTest.testName.length; i++) {
        if (userTest.testName[i] == test) {
            currentTestIndex = i;
            for (var j = 0; j < userTest.mail[currentTestIndex].length; j++) {
                if (user == userTest.mail[currentTestIndex][j]) {
                    hasConnection = true;
                    break;
                } else {
                    hasConnection = false;
                }

            }
        }
    }
    if (hasConnection) {

    } else {
        location.href = "../Login.html";
    }


}