fetch("https://65f5b6eb41d90c1c5e0a06aa.mockapi.io/requests", {
  method: "GET",
  headers: { "content-type": "application/json" },
})
  .then((res) => {
    return res.json();
  })
  .then((requests) => {
    requests.forEach((request) => {
      const form = createRequestForm(request);
      document.querySelector(".requests").appendChild(form);
    });
  })
  .catch((error) => {
    const errorBox = document.querySelector(".requests-error");
    errorBox.textContent = `Ошибка произошла при получении заявок. \n ${error.message}`;
  });

function createRequestForm(request) {
  const form = document.createElement("form");
  form.classList.add("request-form");

  const heading = document.createElement("h3");
  heading.textContent = "Заявка #" + request.id;
  form.appendChild(heading);

  const dateLabel = document.createElement("label");
  dateLabel.textContent = "Дата получения: " + request.createdAt.slice(0, 10);
  form.appendChild(dateLabel);

  const timeLabel = document.createElement("label");
  timeLabel.textContent = "Время получения: " + request.createdAt.slice(11, 19);
  form.appendChild(timeLabel);

  const labels = [
    "Тип повреждения: " + request.type,
    "Степень повреждения: " + request.degree,
    "Адрес: " + request.address,
    "Статус: ",
  ];
  const selectOptions = [
    "Заявка принята",
    "Заявка обрабатывается",
    "Заявка обработана",
  ];

  labels.forEach((labelText) => {
    const label = document.createElement("label");
    label.textContent = labelText;

    if (labelText.startsWith("Степень повреждения: ")) {
      label.classList.add("degree");
      if (labelText.endsWith("Низкий")) {
        label.classList.add("yellow");
      } else if (labelText.endsWith("Средний")) {
        label.classList.add("blue");
      } else {
        label.classList.add("red");
      }
    }

    if (labelText === "Статус: ") {
      const select = document.createElement("select");
      select.classList.add("status" + request.id);

      selectOptions.forEach((optionText) => {
        const option = document.createElement("option");
        option.value = optionText;
        option.textContent = optionText;
        if (optionText == request.status) {
          option.selected = true;
        }
        select.appendChild(option);
      });

      label.appendChild(select);
    }

    form.appendChild(label);
  });

  const submitButton = document.createElement("button");
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("id", "request-submit");
  submitButton.textContent = "Обновить статус";
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    e.target.classList.add("disabled")
    updateRequest(request, e.target);
  });
  form.appendChild(submitButton);

  const errorBox = document.createElement("div");
  errorBox.classList.add(`error-${request.id}`);
  form.appendChild(errorBox);

  return form;
}

function updateRequest(request, submitButton) {
  const status = document.querySelector(".status" + request.id).value;
  console.log(status);
  fetch(`https://65f5b6eb41d90c1c5e0a06aa.mockapi.io/requests/${request.id}`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ ...request, history: [...request.history, {status, date: Date.now()}], status: status }),
  })
    .then((res) => {
      return res.json();
    })
    .then((request) => {
        document.querySelector(".status" + request.id).value = request.status;
        submitButton.classList.remove("disabled");
    })
    .catch((error) => {
      const errorBox = document.querySelector(`.error-${request.id}`);
      errorBox.textContent = `Ошибка произошла при обработке заявки. \n ${error.message}`;
    });
}
