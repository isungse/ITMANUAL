let network = document.getElementById("net-work");
let barcode = document.getElementById("barcode");

network.addEventListener("click", getNetwork);
barcode.addEventListener("click", getBarcode)

function getNetwork(){
    let resultHTML = "";
  
    resultHTML += `<div>
      <embed src="files/network01.pdf" type="application/pdf" width="100%" height="800px" />
    </div>`;
  
    document.getElementById("show-pdf").innerHTML = resultHTML;
}

function getBarcode(){
    let resultHTML = "";
  
    resultHTML += `<div>
      <embed src="files/001.pdf" type="application/pdf" width="100%" height="800px" />
    </div>`;
  
    document.getElementById("show-pdf").innerHTML = resultHTML;
}