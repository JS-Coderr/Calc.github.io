function appendToScreen(value) {
  document.getElementById('screen').value += value;
}

function clearScreen() {
  document.getElementById('screen').value = '';
}

function calculate() {
  try {
    var result = eval(document.getElementById('screen').value);
    document.getElementById('screen').value = result;
  } catch (error) {
    document.getElementById('screen').value = 'Error';
  }
}
