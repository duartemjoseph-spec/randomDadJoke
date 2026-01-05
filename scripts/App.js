const jokeText = document.getElementById("joke-text");
const jokeBtn = document.getElementById("new-joke-btn");
const laughImg = document.getElementById('laugh-img');

const fetchDadJokeJsonData = async () => {
  const url = "https://icanhazdadjoke.com/";

  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
    },
  });

  const data = await response.json();
  return data;
};

const displayDadJoke = async () => {
  try {
    const data = await fetchDadJokeJsonData();

    jokeText.innerText = data.joke;
    laughImg.style.display = "inline-block"; 

  } catch (error) {
    console.error("Error:", error);
    jokeText.innerText = "Oops! Failed to fetch a joke.";
  }
};

jokeBtn.addEventListener("click", displayDadJoke);

displayDadJoke();
