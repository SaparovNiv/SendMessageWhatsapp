document.addEventListener("DOMContentLoaded", function () {
  const inputPhone = document.getElementById("inputPhoneNumber");
  const startChatButtonn = document.getElementById("buttonStartChat");
  startChatButtonn.addEventListener("click", function () {
    startChatOnWhatsapp(inputPhone.value);
  });

  inputPhone.addEventListener("keyup", function (event) {
    console.log(event.key);
    if (event.key === "Enter") {
      startChatOnWhatsapp(inputPhone.value);
    }
  });
});

const startChatOnWhatsapp = (phone) => {
  var newURL = `https://web.whatsapp.com/send?phone=+972${phone}`;
  chrome.tabs.create({ url: newURL });
};
