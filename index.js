const fetch = require('node-fetch');

const index = async () => {
  const limit = 100;
  const url = `https://manuscripts.herokuapp.com/api/entries?limit={$limit}`;
  const entries = await fetch(url).then(response => response.json());
  const result = entries.map(entry => ({
    params: { id: entry.uuid }
  }));
  console.log(result);
}

index();
