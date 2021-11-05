// Requisição para encurtar a URL
function shortenURL() {
  //Validar URL

  let url = document.getElementById("inputURL").value;

  if (!url) {
    $('.alert').css("display", "block")
    return;
  }

  //Encurtar a URL
  //Headers

  let headers = {
    "Content-type": "application/json",
    apiKey: "b0ebd5f0e9f04be0bfe8d058df5d8b6c",
  };

  //Dados

  let linkRequest = {
    destination: url,
    domain: { fullName: "rebrand.ly" },
  };

  fetch("https://api.rebrandly.com/v1/links", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(linkRequest),
  })
    .then((res) => res.json())
    .then((json) => {
      console.log(json.shortUrl);
      let input = document.getElementById("inputURL");
      let showURL = document.getElementById("showURL");
      console.log(showURL);
      showURL.innerHTML = json.shortUrl;
      input.value = "";
    });
}


//Copiar a URL encurtada
function copy() {
  let clipboard = new ClipboardJS(".btn-copy");

  clipboard.on("success", (e) => {
      $('.success').css('display', 'block');
      $('.success').fadeOut(3000);
  });

  clipboard.on("error", function (e) {
    $('.error').css('display', 'block');
    $('.error').fadeOut(3000)
  });
}


// Fechar aviso de URL inválida
function closeWarning() {
    $(".alert").css("display", "none")
}


// Abrir Modal de Informações
function showInfoModal() {
    let modal = document.getElementById('modal')

    modal.style.display = 'block'
}


// Fechar Modal de Informações
function closeInfoModal() {
    let modal = document.getElementById('modal')
    modal.style.display = 'none'
}
