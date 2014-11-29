
//var NXT_IP_ADDRESS = "54.83.4.11";
var NXT_IP_ADDRESS = "23.89.198.45:7876";

// :Security: All companies accessible to all users!
//Meteor.publish('companies', function () {
//    return Companies.find({}, {sort: {name: 1}});
//});


Meteor.methods({
    getAccount: function (account) {
        this.unblock();
        return Meteor.http.call("GET", "http://" + NXT_IP_ADDRESS + "/nxt?requestType=getAccount&account=" + account);
    }
});


//HTTP.call("POST", "http://api.twitter.com/xyz", {
//        data: {
//            some: "json", stuff: 1}},
//    function (error, result) {
//        if (!error) {
//            Session.set("twizzled", true);
//        }
//    }
//);

Meteor.methods({
    pingServer: function () {
        this.unblock();
        return true;
    }
});
