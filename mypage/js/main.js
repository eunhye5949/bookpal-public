$(function(){

    /* 닉네임 10글자 이후 말줄임 */
    var maxLength = 10;
    var nickName = $("#nickName").text();
    if (nickName.length > maxLength) {
        var trimmedNickName = nickName.substring(0, maxLength) + "..."; 
        $("#nickName").text(trimmedNickName);
    }

    function maskEmail() {
        var emailElement = $("#email");
        var email = emailElement.text();
        var parts = email.split("@");
        var firstPartLength = parts[0].length;
        var maskedFirstPart = parts[0].substring(0, firstPartLength - 3) + "***";
        emailElement.text(maskedFirstPart + "@" + parts[1]);
    }
    maskEmail();

})