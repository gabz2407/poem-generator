function addApi(response) {
  new Typewriter(".poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function getInput(event) {
  event.preventDefault();
  let input = event.target.value;

  let poem = document.querySelector("#poem-container");
  poem.classList.remove("hidden");

  let prompt = `Generate a poem about ${input} in this format: <h2 class="poem-title">title</h2><p class="poem-text">poem</p>`;
  let context = `Accordingly to your knowledge, generate a beautiful poem with two stanzas `;
  let apiKey = "8bc029ce07bb99a925obf42d966t543f";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(addApi);
}

let poemForm = document.querySelector("#generator-form");
poemForm.addEventListener("submit", getInput);
