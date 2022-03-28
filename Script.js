/*Responsive menu*/
let menuToggle = document.querySelector(".menu--toggle");
let menuToggleIcon = document.querySelector(".menu--toggle i");
let menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("show");

  if (menu.classList.contains("show")) {
    menuToggleIcon.setAttribute("class", "fa fa-times");
  } else {
    menuToggleIcon.setAttribute("class", "fa fa-bars");
  }
});

/*Responsive menu principal*/
let menuToggle1 = document.querySelector(".choose-title");
let menuToggleIcon1 = document.querySelector(".choose-title i");
let menu1 = document.querySelector(".menu");
let container = document.querySelector(".container");

let items = document.querySelectorAll(".items");

menuToggleIcon1.addEventListener("click", () => {
  menu1.classList.toggle("show__menu");
  container.classList.toggle("show__menu");

  for (i = 0; i < items.length; i++) {
    const item = items[i];

    item.addEventListener("click", () => {
      if (container.classList.contains("show__menu")) {
        container.classList.remove("show__menu");
      }
    });
  }

  if (menu1.classList.contains("show__menu")) {
    menuToggleIcon1.setAttribute("class", "fa fa-angle-up");
  } else {
    menuToggleIcon1.setAttribute("class", "fa fa-angle-down");
  }
});

function graph(pos) {
  const graphics = [
    "https://public.tableau.com/views/PIB2_0/PIBDashboard?:language=es-ES&publish=yes&:display_count=n&:origin=viz_share_link?:showVizHome=no&:embed=true",
    "https://public.tableau.com/views/IGAE/Exportaciones?:language=es-ES&:display_count=n&:origin=viz_share_link?:showVizHome=no&:embed=true",
    "https://public.tableau.com/views/ITAEE1/ConfianzaEmpresarial?:language=en-US&:display_count=n&:origin=viz_share_link:showVizHome=no&:embed=true",
    "https://public.tableau.com/views/IMAIEF_16352410456140/Exportaciones?:language=es-ES&:display_count=n&:origin=viz_share_link?:showVizHome=no&:embed=true",

    "https://public.tableau.com/views/Mdicos2_0/Mdicos?:language=es-ES&publish=yes&:display_count=n&:origin=viz_share_link?:showVizHome=no&:embed=true",
    "https://public.tableau.com/views/Enfermeras2_0/Enfermeras?:language=es-ES&publish=yes&:display_count=n&:origin=viz_share_link?:showVizHome=no&:embed=true",
    "https://public.tableau.com/views/CamasCensables2_0/CamasCensables?:language=es-ES&:display_count=n&:origin=viz_share_link?:showVizHome=no&:embed=true",
    "https://public.tableau.com/views/Afiliados2_0/CamasCensables2?:language=es-ES&publish=yes&:display_count=n&:origin=viz_share_link?:showVizHome=no&:embed=true",

  "https://public.tableau.com/views/PEA2_0/PEADB?:language=es-ES&publish=yes&:display_count=n&:origin=viz_share_link?:showVizHome=no&:embed=true",
    "https://public.tableau.com/views/Informalidad2_0/InformalidadDB?:language=es-ES&publish=yes&:display_count=n&:origin=viz_share_link?:showVizHome=no&:embed=true",
      "https://public.tableau.com/views/Desempleo2_0/Desempleo?:language=es-ES&publish=yes&:display_count=n&:origin=viz_share_link?:showVizHome=no&:embed=true",

    "https://public.tableau.com/views/AlumnosSTEM2_0/AlumnosSTEM2_0?:language=es-ES&:display_count=n&:origin=viz_share_link?:showVizHome=no&:embed=true",
    "https://public.tableau.com/views/Investigadores_16354033695000/EducacinFull2?:language=es-ES&publish=yes&:display_count=n&:origin=viz_share_link?:showVizHome=no&:embed=true",
    "https://public.tableau.com/views/Aosdeescolaridad/Escolaridadpromedio?:language=es-ES&publish=yes&:display_count=n&:origin=viz_share_link?:showVizHome=no&:embed=true",

    "https://public.tableau.com/views/DeudaInternavsExternaNacional/DeudaInternaVsExterna?:language=es-ES&publish=yes&:display_count=n&:origin=viz_share_link?:showVizHome=no&:embed=true",
    "https://public.tableau.com/views/MarketCap_16352246164760/CapitalizacinBurstilPIB?:language=es-ES&publish=yes&:display_count=n&:origin=viz_share_link?:showVizHome=no&:embed=true",
    "https://public.tableau.com/views/Bancarizacin/Bancarizacion?:language=es-ES&publish=yes&:display_count=n&:origin=viz_share_link?:showVizHome=no&:embed=true",

    "https://public.tableau.com/views/Seguridad_16348852665820/Seguridad?:language=es-ES&publish=yes&:display_count=n&:origin=viz_share_link?:showVizHome=no&:embed=true",
    "https://public.tableau.com/views/AccesoaInternet/Accesoainternet?:language=es-ES&publish=yes&:display_count=n&:origin=viz_share_link?:showVizHome=no&:embed=true",
    "https://public.tableau.com/views/ConfianzaEmpresarial/ConfianzaEmpresarial?:language=es-ES&publish=yes&:display_count=n&:origin=viz_share_link?:showVizHome=no&:embed=true",

    "https://public.tableau.com/views/Exportaciones2_0_16348797149960/Exportaciones?:language=es-ES&publish=yes&:display_count=n&:origin=viz_share_link?:showVizHome=no&:embed=true",
    "https://public.tableau.com/views/BalanzaComercial2_0/BalanzaComercial?:language=es-ES&:display_count=n&:origin=viz_share_link?:showVizHome=no&:embed=true",

    "https://public.tableau.com/views/InversinExtranjeraDirecta2_0/InversinExtranjeraDirecta?:language=es-ES&publish=yes&:display_count=n&:origin=viz_share_link?:showVizHome=no&:embed=true",
    "https://public.tableau.com/views/InversinExtranjeraIndirecta2_0/Exportaciones?:language=es-ES&publish=yes&:display_count=n&:origin=viz_share_link?:showVizHome=no&:embed=true",
  ];
  p = document.getElementById("tableau");
  footer = document.getElementById("footer");
  if (p) {
    document.body.removeChild(p);
    document.body.removeChild(footer);
  }
 
 p.innerHTML =
    `<iframe src="` +
    graphics[pos] +
    `"
width="100%" height="100%"></iframe>`;
 
 

  footer.innerHTML = `
<div class="icons">
  <img class="icon" src="https://img.icons8.com/ios-filled/25/BEA155/linkedin.png"/>
  <img class="icon" src="https://img.icons8.com/ios-filled/25/BEA155/facebook--v1.png"/>
  <img class="icon" src="https://img.icons8.com/ios-filled/25/BEA155/twitter.png"/>
</div>
<p>Arango,  & the O Team. (2021)</p>

`;

  document.body.appendChild(p);
  document.body.appendChild(footer);
}
