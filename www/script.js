function appendValue(val) {
  document.getElementById('display').value += val;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function deleteLast() {
  const current = document.getElementById('display').value;
  document.getElementById('display').value = current.slice(0, -1);
}

function calculate() {
  try {
    document.getElementById('display').value = eval(document.getElementById('display').value);
  } catch {
    alert("Invalid Expression");
  }
}

// PWA service worker register
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}
