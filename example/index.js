var onSuccess = function(value) {
    alert("GET SUCCESS - Key: " + key + " Value: " + value);
};
var onError = function(error) {
     alert("GET FAIL - Key: " + key + " Error: " + error);
};
		
function doGet() {
    var chain = new iosKeychain();
    var key = document.getElementById("get1").value;
    chain.get(key, onSuccess, onError);
}

function doSet() {
    var chain = new iosKeychain();

    var key = document.getElementById("set1").value;
    var value = document.getElementById("set2").value;

    chain.set(key, value, onSuccess, onError);
}

function doRemove() {
    var chain = new iosKeychain();
    var key = document.getElementById("rem1").value;

    chain.removeForKey(key, onSuccess, onError);
}
