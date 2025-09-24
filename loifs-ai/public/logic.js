document.getElementById('loifsForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  const data = {
    observation: document.getElementById('observation').value,
    clientType: document.getElementById('clientType').value,
    location: document.getElementById('location').value,
    site: document.getElementById('site').value
  };

  const response = await fetch('/api/invoke-loifs', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  const result = await response.json();
  document.getElementById('result').innerText = JSON.stringify(result, null, 2);
});