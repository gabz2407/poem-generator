function addApi(response) {
  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = response.data.answer;
}

function generatePoem(event) {
  event.preventDefault();

  let prompt = `Generate a poem about bread`;
  let context = `Accordingly to your knowledge, generate a poem with two stanzas`;
  let apiKey = "8bc029ce07bb99a925obf42d966t543f";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(addApi);
}

let poemForm = document.querySelector("#generator-form");
poemForm.addEventListener("submit", generatePoem);
