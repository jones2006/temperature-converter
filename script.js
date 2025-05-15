
// alert("this is a converter")

function convert() {
  let txt_field = Number(document.getElementById("txt_field").value);
  let fahrenval = (txt_field * 9) / 5 + 32;
  let result = document.getElementById("result");
  result.innerHTML = fahrenval + " fahrenheit";
}
