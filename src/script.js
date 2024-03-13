function addApi(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
  });
}

function getInput(event) {
  let input = event.target.value;

  let prompt = `Generate a poem about ${input} in HTML in this format: <h2 class="poem-title">title</h2><p class="poem">poem</p>`;
  let context = `Accordingly to your knowledge, generate a poem with two stanzas `;
  let apiKey = "8bc029ce07bb99a925obf42d966t543f";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(addApi);
}

function generatePoem(event) {
  event.preventDefault();

  let inputSearch = document.querySelector("#search-txt");
  inputSearch.addEventListener("change", getInput);
}

let poemForm = document.querySelector("#generator-form");
poemForm.addEventListener("submit", generatePoem);
