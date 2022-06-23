var headerText = `<div>
<span><div class="header" class="col-md-6 top-header-left">  
<br>
<img src="images/PCMaster.png" width="215" height="140" alt="lorem" align="left">

<nav class="one">
<ul class="topmenu">
      
<li class="d1">
  <form>
  <input type="text" placeholder="Искать здесь...">
  <button type="submit"><img src="images/poisk.png" width="40" height="35" alt="lorem" align="left"></button>
  </form>
</li>
      
       <a href="index.html"><li>Главная страница</li></a>
       
       <a href="cotalog.html"><li>Каталог
         <ul class="submenu">
           <a href="index nou.html"><li>Ноутбуки</li></a>
           <a href="index pc.html"><li>Компьютеры</li></a>
           <a href="index mish.html"><li>Компьютерные мыши</li></a>
           <a href="index klava.html"><li>Клавиатуры</li></a>
           <a href="index nauhi.html"><li>Наушники</li></a>
           <a href="index mamki.html"><li>Материнские платы</li></a>
           <a href="index videokard.html"><li>Видеокарты</li></a>
           <a href="index disk ssd.html"><li>SSD накопители</li></a>
         </ul>
      </li></a>
      
      <a href="cart.html"><li>Корзина<span id="total-cart-count" class="badge"></span></li></a>
  </ul>
</nav>  
</div ></span>
</div>`;

function setHeader() {
  var header =  document.createElement("div");
  header.innerHTML = headerText ;
  document.body.insertAdjacentElement('afterbegin', header );
}

setHeader();
