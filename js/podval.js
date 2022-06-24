var headerText = `<div>
<span><div class="fon-pod" align="center">
       <br>	
 	   <font color="white" size="5">Официальные партнёры<font>
	   <div class="tex4">
	   <img src="images/microsoft.png" width="200" height="65" alt="lorem" >
	   <img src="images/nvidia.png" width="200" height="65" alt="lorem" >
	   <img src="images/intel.png" width="200" height="65" alt="lorem" >
	   </div>
	   
	   <br>
	   
	 <font color="white" size="5">Мы здесь, и нас много<font>
	 <div class="tex4">
      <a onclick="window.open('https://vk.com/id.kirillroch')"><img src="images/vk.png" width="40" height="40" alt="lorem" >ВКонтакте</a><a> </a>
      <a onclick="window.open('https://vk.com/id.kirillroch')"><img src="images/fasebook.png" width="40" height="40" alt="lorem" >Facebook</a><a> </a>
      <a onclick="window.open('https://vk.com/id.kirillroch')"><img src="images/twitter.png" width="40" height="40" alt="lorem" >Twitter</a><a> </a>
	</div>
    	  	
	
	</div>
    
    <div class="tex-pod" align="center">
      <font color="white" face="IMPACT" size="4">© 2010-2020 GoodPC_X1. Все права защищены.</font>
      <font color="white" size="4"><p>"PCmaster" - является товарным знаком ООО "TKFK", зарегистрированным в России и других странах. </p></font>
    </div></span>
</div>`;

function setHeader() {
  var header =  document.createElement("div");
  header.innerHTML = headerText ;
  document.body.insertAdjacentElement('beforeend', header );
}

setHeader();
