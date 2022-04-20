let network = document.getElementById("network");
let barcode = document.getElementById("barcode");
let ocs = document.getElementById("ocs");

network.addEventListener("click", getNetwork);
barcode.addEventListener("click", getBarcode);
ocs.addEventListener("click", getOcs);

function getNetwork() {
  let resultHTML = "";

  resultHTML += `<div class="row">
      
    <div class="col-3 box"><div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">공유폴더 접속불가</h5>
      <a href="network.html" class="card-link">Click</a>
      
    </div>
  </div></div>
    <div class="col-3 box"><div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">LAN Cable 접속불량</h5>
      <a href="network.html" class="card-link">Click</a>
      
    </div>
  </div></div>
      <div class="col-3 box"><div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">TEST1</h5>
        <a href="#" class="card-link">Card link</a>
        
      </div>
    </div></div>
      <div class="col-3 box"><div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">TEST2</h5>
        <a href="#" class="card-link">Card link</a>
        <p class="card-text"></p> 
      </div>
    </div></div>
  </div>`;

  document.getElementById("show-pdf").innerHTML = resultHTML;
}

function getBarcode() {
  let resultHTML = "";

  resultHTML += `<div>
      <embed src="files/network01.pdf" type="application/pdf" width="100%" height="800px" />
    </div>`;

  document.getElementById("show-pdf").innerHTML = resultHTML;
}

function getOcs() {
  let resultHTML = "";

  resultHTML += ``;

  document.getElementById("show-pdf").innerHTML = resultHTML;
}
