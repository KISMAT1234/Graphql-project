import autocannon from "autocannon";
const url = 'http://localhost:8000';
const query = JSON.stringify({
  query: `
    query {
      users {
        id
        name
      }
    }
  `
});

autocannon(
  {
    url,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: query,
    connections: 50, // Simulates 50 concurrent users
    duration: 10,    // Runs for 10 seconds
  },
  (err:any, result:any) => {
    if (err) {
      console.error('Autocannon encountered an error:', err);
    } else {
      console.log('Autocannon results:', result);
    }
  }
);
