const quote = document.getElementById("quote")
const author = document.getElementById("author")
const btn = document.getElementById("btn")



  async function getQuote() {
  const apiKey = '5OgR1t1BBIpQPF9RO7BM5A==ZdQCpLfmdNJ872GB';  // Replace 'YOUR_API_KEY' with your actual API key
  const category = 'happiness';   // You can change the category if you want
  const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'X-Api-Key': apiKey
      }
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    const quote = data[0].quote;
    const author = data[0].author;

    document.getElementById('quote').innerText = quote;
    document.getElementById('author').innerText = `~ ${author}`;
  } catch (error) {
    console.error('Request failed:', error);
    document.getElementById('quote').innerText = 'Failed to fetch a new quote. Please try again later.';
    document.getElementById('author').innerText = '';
  }
}

