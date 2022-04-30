let worker;

function startSearch() {
  const statusDisplay = document.getElementById('status');

  worker = new Worker('prime-worker.js');
  statusDisplay.textContent = 'Search started';

  // Report error message on the page
  worker.onerror = error => {
    statusDisplay.textContent = error.message;
  }

  // Handle message from the worker
  worker.onmessage = event => {
    const message = event.data;

    console.log('Received a message from the worker');
    if (message.messageType === 'PrimeList') {
      const primes = message.data;
      document.getElementById('primeContainer').textContent = primes.join(', ');
    } else if (message.messageType === 'Progress') {
      statusDisplay.textContent = `${message.data}% done ...`;
    }
  }

  // get the search range and tell the worker to start
  document.getElementById('primeContainer').textContent = '';
  const fromNumber = document.getElementById('from').value;
  const toNumber = document.getElementById('to').value;
  worker.postMessage({
    from: fromNumber,
    to: toNumber
  });
  console.log('Worker started');
}

function cancelSearch() {
  console.log('Cancelling worker');
  worker.terminate();
}

window.onload = () => {
  document.getElementById('cancel').addEventListener('click', cancelSearch);
  document.getElementById('search').addEventListener('click', startSearch);
}
