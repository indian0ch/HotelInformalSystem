function sendMessage(text) {
  let tg = {
    token: "5855579399:AAFwa7JV6xt8kj7FhhmhEfHwMlCzQqb0ieI",
    chat_id: "-1001876151539",
  };
  const url = `https://api.telegram.org/bot${tg.token}/sendMessage`;
  const obj = {
    chat_id: tg.chat_id,
    text: text,
  };
  //   const xht = new XMLHttpRequest();
  //   xht.open("POST", url, true);
  //   xht.setRequestHeader("Content-type", "application/json; charset=UTF-8");
  //   xht.send(JSON.stringify(obj));
  fetch(url, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(obj),
  })
    .then(function (res) {
      alert('Form data was send');
    })
    .catch(function (res) {
      alert(res.error);
    });
}
export default sendMessage;
