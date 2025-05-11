export function aboutUs () {

    const container = document.getElementById("container");

    container.innerHTML = "";

   // Основной контейнер

   const mainAbout = document.createElement("div");
   mainAbout.className = "sectionAbout";
  

   // Блок "О нас"
   const aboutUp = document.createElement("div");
   aboutUp.className = "infoBlock";
   aboutUp.innerHTML = `
     <h2>О нас</h2>
     <p>
       Добро пожаловать в <strong>Hive Coffee</strong> — место, где начинается ваше утро и продолжается вдохновение.<br>
       Мы открыли двери в 2020 году, чтобы создать кафе, куда хочется возвращаться снова и снова. У нас<br>
       вы найдёте ароматный кофе, приготовленный из отборных зёрен, авторские напитки, домашнюю<br>
       выпечку и атмосферу, в которой приятно проводить время — в одиночестве, с друзьями или за<br>
       работой.<br><br>
       Мы также предлагаем доставку — чтобы вкус любимого кофе мог сопровождать вас где угодно.<br>
       Следите за нашими акциями и специальными предложениями — мы любим радовать своих гостей.<br><br>
       <strong>Hive Coffee</strong> — это больше, чем кафе. Это настроение, вкус и забота, которые остаются с вами.
     </p>
   `;

   // Добавляем блок в основной контейнер
   mainAbout.appendChild(aboutUp);
   container.appendChild(mainAbout);
}