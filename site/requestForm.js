const requestForm = document.querySelector(".request-form");
const damageType = document.querySelector("#type");
const damageDegree = document.querySelector("#degree");
const damagePhotos = document.querySelector("#photos");
const address = document.querySelector("#address");
const requestSubmit = document.querySelector("#request-submit");

requestSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  requestForm.classList.add("disabled-form");

  const newRequest = {
    address: address.value,
    photos: damagePhotos.value,
    type: damageType.value,
    degree: damageDegree.value,
    status: "Заявка принята",
  };

  fetch("https://65f5b6eb41d90c1c5e0a06aa.mockapi.io/requests", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(newRequest),
  })
    .then((res) => {
      return res.json();
    })
    .then((request) => {
      requestForm.style.display = "none";
      const requestResult = document.querySelector(".request-result");
      requestResult.textContent = `Ваша заявка принята под номером ${request.id}`;
    })
    .catch((error) => {
      const errorBox = document.querySelector(".error-box");
      errorBox.textContent = `Ошибка произошла при отправке заявки. \n ${error.message}`;
    });
});

const statusSubmitButton = document.querySelector("#request-status-submit");
const requestId = document.querySelector("#status-id");
statusSubmitButton.addEventListener("click", (e) => {
  e.preventDefault();
  fetch("https://65f5b6eb41d90c1c5e0a06aa.mockapi.io/requests/" + requestId.value, {
    method: "GET",
    headers: { "content-type": "application/json" },
  })
    .then((res) => {
      return res.json();
    })
    .then((request) => {
      document.querySelector(".status-text").textContent = `Статус заявки #${request.id}:  ${request.status}`;
    })
    .catch((error) => {
      const errorBox = document.querySelector(".status-error-box");
      errorBox.textContent = `Ошибка произошла при получении статуса. \n ${error.message}`;
    });
});