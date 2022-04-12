let network = document.getElementById("net-work");

network.addEventListener("click", render);

function render() {
  let resultHTML = "";
  resultHTML += `<div>
    <embed src="files/network01.pdf" type="application/pdf" width="100%" height="800px" />
  </div>`;

  document.getElementById("show-pdf").innerHTML = resultHTML;
}
