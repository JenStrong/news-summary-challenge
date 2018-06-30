var assert = {
    isTrue: function (testName, assertion) {
        if (!assertion) {
            document.write("<div style = 'color: red;'><h4>Test Failed: <br></h4>" + testName + "</div><br>");
        } else {
            document.write("<div style = 'color: green;'><h4>Test passed: </h4> " + testName + "</div><br>");
        }
    }
};
