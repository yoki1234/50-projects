const etsyData = {
  nav: {
    logo: "assets/etsy-logo.svg",
    signInIcon: "assets/sign-in-icon.svg",
    addToCartIcon: "assets/add-to-cart-icon.svg",
  },
  header: {
    title: "Discover one-of-a-kind items from independent creators",
    headerCollection: [
      {
        name: "Diwali",
        url: "assets/header/img1.webp",
      },
      {
        name: "Home & Living",
        url: "assets/header/img2.webp",
      },
      {
        name: "Clothing",
        url: "assets/header/img3.webp",
      },
      {
        name: "Jewellery",
        url: "assets/header/img4.webp",
      },
      {
        name: "Wall Art",
        url: "assets/header/img5.webp",
      },
      {
        name: "On Sale",
        url: "assets/header/img6.webp",
      },
    ],
  },
  main: {
    section: [
      {
        class:"card1",
        name: "ParametricArtWood",
        url: "assets/mainSection/img1.avif",
        currency: "₹",
        price: "1,567",
        discount:"700",
      },
      {
        class:"card2",
        name: "ParametricArtWood",
        url: "assets/mainSection/img2.webp",
        currency: "₹",
        price: "2,567",
        discount:null,
      },
      {
        class:"card3",
        name: "ParametricArtWood",
        url: "assets/mainSection/img3.webp",
        currency: "₹",
        price: "867",
        discount:"599",
      },
      {
        class:"card4",
        name: "ParametricArtWood",
        url: "assets/mainSection/img4.webp",
        currency: "₹",
        price: "4,099",
        discount:"2,999",
      },
      {
        class:"card5",
        name: "ParametricArtWood",
        url: "assets/mainSection/img5.webp",
        currency: "₹",
        price: "1,267",
        discount:null,
      },
      {
        class:"card6",
        name: "KobzarStudio",
        url: "assets/mainSection/img6.webp",
        currency: "₹",
        price: "11,675",
        discount:null,
      }
    ],
  },
};

function likeIcon() {
  return `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M12,21C10.349,21,2,14.688,2,9,2,5.579,4.364,3,7.5,3A6.912,6.912,0,0,1,12,5.051,6.953,6.953,0,0,1,16.5,3C19.636,3,22,5.579,22,9,22,14.688,13.651,21,12,21ZM7.5,5C5.472,5,4,6.683,4,9c0,4.108,6.432,9.325,8,10,1.564-.657,8-5.832,8-10,0-2.317-1.472-4-3.5-4-1.979,0-3.7,2.105-3.721,2.127L11.991,8.1,11.216,7.12C11.186,7.083,9.5,5,7.5,5Z">
    </path>
  </svg>
`;
}

function searchIcon() {
  return `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18ZM10,4a6,6,0,1,0,6,6A6.007,6.007,0,0,0,10,4Z">
    </path>
    <path d="M21,22a1,1,0,0,1-.707-0.293l-4-4a1,1,0,0,1,1.414-1.414l4,4A1,1,0,0,1,21,22Z">
    </path>
  </svg>
  `;
}

function navbar(navData) {
  navData = etsyData.nav;
  return `
    <nav>
      <a href="#" class="logo"><img src=${navData.logo}></a>
      <div class="search-box">
          <input type="search" placeholder="Search">
          ${searchIcon()}
      </div>
      <img class="nav-icon" src=${navData.signInIcon}>
      <img class="nav-icon" src=${navData.addToCartIcon}>
    </nav>
  `;
}
function headerCollectionTemplate(content) {
  return `
    <a herf="#" class="header-card">
      <img src=${content.url}>
      <p>${content.name}</p>
    </a>
  `;
}
function header(headerData) {
  headerData = etsyData.header;
  return `
  <header>
    <h2>${headerData.title}</h2>
    <div class="header-collection">
        ${headerData.headerCollection.map(headerCollectionTemplate).join("")}
    </div>
  </header>
  `;
}
function mainSectionCard(carddata) {
  return `
    <a href="#">
      <div class="main-section-card-conatiner ${carddata.class}">
          <img src=${carddata.url} class="${carddata.class}">
          <div class="price">
            <span style=${
              carddata.discount == null? "display:none " : ""
            }>
              <span>${carddata.currency}</span>
              <span>${carddata.discount}</span>
           </span>
            <span style=${
              carddata.discount != null? "text-decoration:line-through;font-weight:300;" : ""
            }>
              <span>${carddata.currency}</span>
              <span>${carddata.price}</span>
            </span>
            
          </div>
          ${likeIcon()}
      </div>
    </a>
  `;
}

function mainSections(mainSectionData) {
  mainSectionData = etsyData.main;
  return `
    <section class="main-section">
      ${mainSectionData.section.map(mainSectionCard).join("")}
    </section>
  `;
}
function main() {
  return `
 ${mainSections()}
 `;
}
const etsyTemplate = (document.getElementById("app").innerHTML = `
  <div class="container">
   ${navbar()}
   ${header()}
   ${main()}
  </div>
`);
