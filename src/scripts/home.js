export function homePage() {
  const container = document.getElementById("container");

  container.innerHTML = "";

  const main = document.createElement("div");
  main.className = "section";
  container.appendChild(main);

  const offer1 = document.createElement("div");
  offer1.className = "offer";
  offer1.innerHTML = `<h2>🔥 Новинка недели: Карамельный Макиато</h2>
                        <p>Почувствуй тепло с каждым глотком. Только на этой неделе со скидкой 20%!</p>`;
  main.appendChild(offer1);

  const offer2 = document.createElement("div");
  offer2.className = "offer";
  offer2.innerHTML = `<h2>☕ Утренний Эспрессо Буст</h2>
                        <p>Получите бесплатное печенье к каждому двойному эспрессо с 8:00 до 11:00!</p>`;
  main.appendChild(offer2);


  const coffeeReviewsTitle = document.createElement("h2");
  coffeeReviewsTitle.textContent = "☕ Лучшие напитки недели";
  main.appendChild(coffeeReviewsTitle);

  const coffeeReviewBlock = document.createElement("div");
  coffeeReviewBlock.className = "review-block";

  const coffeeReview1 = document.createElement("div");
  coffeeReview1.className = "review";
  coffeeReview1.innerHTML = `<h3>Матча Латте</h3>
                               <p>“Очень нежный и сбалансированный вкус. Теперь это мой любимый напиток!” — Аня М.</p>`;

  const coffeeReview2 = document.createElement("div");
  coffeeReview2.className = "review";
  coffeeReview2.innerHTML = `<h3>Капучино на овсяном молоке</h3>
                               <p>“Впервые попробовала — и была в восторге. Легкий, ароматный, идеальный для утра.” — Дима К.</p>`;

  coffeeReviewBlock.appendChild(coffeeReview1);
  coffeeReviewBlock.appendChild(coffeeReview2);
  main.appendChild(coffeeReviewBlock);


  const baristaReviewsTitle = document.createElement("h2");
  baristaReviewsTitle.textContent = "⭐ Лучшие бариста месяца";
  main.appendChild(baristaReviewsTitle);

  const baristaReviewBlock = document.createElement("div");
  baristaReviewBlock.className = "review-block";

  const baristaReview1 = document.createElement("div");
  baristaReview1.className = "review";
  baristaReview1.innerHTML = `<h3>Алексей В.</h3>
                                <p>“Сделал мне лучший латте в жизни. Приятный и внимательный. Настоящий мастер!” Кристина С.</p>`;

  const baristaReview2 = document.createElement("div");
  baristaReview2.className = "review";
  baristaReview2.innerHTML = `<h3>Екатерина П.</h3>
                                <p>“Катя запомнила мой заказ после одного визита. Вот это сервис!” Иван Т.</p>`;

  baristaReviewBlock.appendChild(baristaReview1);
  baristaReviewBlock.appendChild(baristaReview2);
  main.appendChild(baristaReviewBlock);





  
  const footer = document.createElement("footer");
  footer.textContent = '© 2025 Кафе "Hive-Coffee"';
  container.appendChild(footer);
}