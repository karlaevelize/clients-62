const axios = require("axios")

const getGoogle = async () => {
  const response = await axios.get("https://www.google.nl/")
  console.log(response)
}

// getGoogle()

const getHello = async () => {
  const response = await axios.get("http://localhost:4000/")
  console.log("response", response.data)
}

// getHello()

const getCharacters = async () => {
  const response = await axios.get("http://localhost:4000/characters")
  console.log("response", response.data)
}

// getCharacters()

const getOneCharacter = async (id) => {
  const response = await axios.get(`http://localhost:4000/characters/${id}`)
  console.log(response.data)
}

getOneCharacter(56)

const getQuote = async () => {
  const response = await axios.get("https://api.quotable.io/random")
  console.log({content: response.data.content, author: response.data.author} )
}

// getQuote()

const getQuotes = async () => {
  const response = await axios.get("https://api.quotable.io/quotes")
  console.log(response.data.results)
}

// getQuotes()

