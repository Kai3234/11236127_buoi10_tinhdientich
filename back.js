function showForm() {
  document.querySelectorAll(".shapeForm").forEach(form => form.classList.add("hidden"));
  let selectedShape = document.getElementById("shape").value;
  document.getElementById(selectedShape + "Form").classList.remove("hidden");
}

function calculateRectangle() {
  let length = parseFloat(document.getElementById("length").value);
  let width = parseFloat(document.getElementById("width").value);
  if (width > length) {
    document.getElementById("result").innerText = "Vui lòng đảm bảo chiều dài > chiều rộng!";
    document.getElementById("result").classList.remove("resultBox")
    document.getElementById("result").classList.add("warning")
  }
  else if (length > 0 && width > 0) {
    let perimeter = 2 * (length + width);
    let area = length * width;
    document.getElementById("result").innerText = `Chu vi: ${perimeter.toFixed(2)}\nDiện tích: ${area.toFixed(2)}`;
    document.getElementById("result").classList.add("resultBox")
    document.getElementById("result").classList.remove("warning")
  } else {
    document.getElementById("result").innerText = "Vui lòng nhập số hợp lệ!";
    document.getElementById("result").classList.remove("resultBox")
    document.getElementById("result").classList.add("warning")
  }
}

function calculateSquare() {
  let side = parseFloat(document.getElementById("side").value);
  if (side > 0) {
    let perimeter = 4 * side;
    let area = side * side;
    document.getElementById("result").innerText = `Chu vi: ${perimeter.toFixed(2)}\nDiện tích: ${area.toFixed(2)}`;
    document.getElementById("result").classList.add("resultBox")
    document.getElementById("result").classList.remove("warning")
  } else {
    document.getElementById("result").innerText = "Vui lòng nhập số hợp lệ!";
    document.getElementById("result").classList.remove("resultBox")
    document.getElementById("result").classList.add("warning")
  }
}

function calculateTriangle() {
  let a = parseFloat(document.getElementById("a").value);
  let b = parseFloat(document.getElementById("b").value);
  let c = parseFloat(document.getElementById("c").value);
  if (a > 0 && b > 0 && c > 0 && (a + b > c) && (a + c > b) && (b + c > a)) {
    let perimeter = a + b + c;
    let s = perimeter / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    document.getElementById("result").innerText = `Chu vi: ${perimeter.toFixed(2)}\nDiện tích: ${area.toFixed(2)}`;
    document.getElementById("result").classList.add("resultBox")
    document.getElementById("result").classList.remove("warning")
  } else {
    document.getElementById("result").innerText = "Vui lòng nhập số hợp lệ hoặc đảm bảo ba cạnh hợp lệ!";
    document.getElementById("result").classList.remove("resultBox")
    document.getElementById("result").classList.add("warning")
  }
}