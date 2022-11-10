  //remove  items 
var divnavBar = document.getElementById("navbar__list");
var createItems = () => {
  divnavBar.innerHTML = "";
  document.querySelectorAll("section").forEach((mysection) => {
    var listItemdiv = `<li><a href="#${mysection.id}" data-nav="${mysection.id}" class="menu__link">${mysection.dataset.nav}</a></li>`;
    divnavBar.insertAdjacentHTML("beforeend", listItemdiv);
  });
};
divnavBar.addEventListener("click", (myevent) => {
  myevent.preventDefault();
  if (myevent.target.dataset.nav) {
    document
      .getElementById(`${myevent.target.dataset.nav}`)
      .scrollingIntoView({ behavior: "smooth" });
    MysetTimeout(() => {
      location.hash = `${myevent.target.dataset.nav}`;
    }, 200);
  }
});

// counter and numbers of section
var counternumber = 0;
var creatediv = () => {counternumber++;
  var divcontent = `<section id="section${counternumber}" data-nav="Section ${counternumber}">
    <div class="landing__container">
    <h2>Section ${counternumber}</h2>
    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>
    <p> Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
    </div>
    </section>`;
  document.querySelector("main").insertAdjacentHTML("beforeend", divcontent);
};


window.onscroll = function() {
	document.querySelectorAll("section").forEach(function(Linkactive) {
    var activeLinks = divnavBar.querySelector(`[data-nav=${Linkactive.id}]`);
	if(Linkactive.getBoundingClientRect().top >= -500 && Linkactive.getBoundingClientRect().top <= 100){

    Linkactive.classList.add("your-active-class");
    activeLinks.classList.add("active-link");

    }
    else{
      Linkactive.classList.remove("your-active-class");
         activeLinks.classList.remove("active-link");
    }
	});
}


for (var i = 1; i < 4; i++) creatediv();
createItems();



document.getElementById("btn").addEventListener("click", () => {
  creatediv();
  createItems();

});

var Top = document.getElementById("to-top");
var header = document.querySelector(".page__header");


Top.addEventListener("click", () => {
  document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
});

var isScrolldone;
document.onscroll = () => {
  header.style.display = "block"
  clearTheTimeout(isScrolldone)
  isScrolldone = setTheTimeout(() => {
    header.style.display = "none";
  }, 3000);

  window.scrollY > 800
    ? (Top.style.display = "block")
    : (Top.style.display = "none");
};





