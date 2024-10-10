// Product data
const products = [
  {
    id: 1,
    name: "SAMSUNG Galaxy A14 5G (Light Green, 128 GB)",
    description: "47% off",
    imgSrc: "https://rukminim1.flixcart.com/image/850/850/xif0q/mobile/e/e/g/-original-imah4sssfvvahchb.jpeg?q=20&crop=false",
    affiliateLink: "https://www.shopsy.in/samsung-galaxy-a14-5g-light-green-128-gb/p/itmabe91abe7ba0c?pid=MOBGHT8UU3STRKZS&affid=inf_58a05c12-d91e-4903-a5e5-fb790385d6e6&cmpid=product.share.pp&_refId=PP.734f3885-f4e5-4684-a0b6-f6b5cf31c728.MOBGHT8UU3STRKZS&_appId=CL"
  },
  {
    id: 2,
    name: "Motorola g45 5G",
    description: "20% off",
    imgSrc: "https://rukminim1.flixcart.com/image/850/850/xif0q/mobile/r/l/c/-original-imah3xk892aj9gck.jpeg?q=20&crop=false",
    affiliateLink: "https://www.shopsy.in/motorola-g45-5g-brilliant-blue-128-gb/p/itm1decbdd265f94?pid=MOBH3YKQT2HEAPAM&affid=inf_58a05c12-d91e-4903-a5e5-fb790385d6e6&cmpid=product.share.pp&_refId=PP.a2558ae2-6711-426c-a8bc-ccd3b8028790.MOBH3YKQT2HEAPAM&_appId=CL"
  },
{
    id: 3,
    name: "Men Kurta (Black)",
    description: "79% off",
    imgSrc: "https://rukminim1.flixcart.com/image/850/1050/xif0q/shopsy-kurta/l/f/m/m-kurta-yellow-mandk-enterprise-original-imahybkbzghndvwk.jpeg?q=20&crop=false",
    affiliateLink: "https://www.shopsy.in/men-kurta/p/itm72c12f0403b7c?pid=KUUGGVUXA89JCZJX&affid=inf_58a05c12-d91e-4903-a5e5-fb790385d6e6&cmpid=product.share.pp&_refId=PP.fed73b87-d144-49d9-88d5-936b64029188.KUUGGVUXA89JCZJX&_appId=CL"
  },
  {
    id: 4,
    name: "Sneakers for men (Black, 6)",
    description: "70% off",
    imgSrc: "https://rukminim1.flixcart.com/image/850/1050/xif0q/shoe/i/2/p/10-khalifa-black-10-clymb-black-original-imah4u35z5hyehyy.jpeg?q=20&crop=false",
    affiliateLink: "https://www.shopsy.in/clymb-sneakers-men/p/itm982e464db0722?pid=SHOG8SSHDVPRK2DG&affid=inf_58a05c12-d91e-4903-a5e5-fb790385d6e6&cmpid=product.share.pp&_refId=PP.5f539757-de5b-46b2-b91c-edb4c122877d.SHOG8SSHDVPRK2DG&_appId=CL"
  },
  {
    id: 5,
    name: "M10 PRO 4HRS PLAYBACK HEADSET BLACK",
    description: "88% off",
    imgSrc: "https://rukminim1.flixcart.com/image/850/850/xif0q/headphone/g/p/l/m10-tws-wireless-headphones-touch-control-and-led-charging-original-imagrvd34zhmfzvy.jpeg?q=20&crop=false",
    affiliateLink: "https://www.shopsy.in/m10-pro-4hrs-playback-headset-black-pack-1-bluetooth-gaming/p/itmde34f315b3409?pid=XHOGRXGYYSGS4JGU&affid=inf_58a05c12-d91e-4903-a5e5-fb790385d6e6&cmpid=product.share.pp&_refId=PP.ca7e90b3-b47c-4761-93fd-95bb9e99d1da.XHOGRXGYYSGS4JGU&_appId=CL"
  },
  {
    id: 6,
    name: "LOCAL WATCH Analogue Display with Exclusive Design Analog Watch",
    description: "92% off",
    imgSrc: "https://rukminim1.flixcart.com/image/850/1050/xif0q/shopsy-watch/l/y/j/1-32-bk-ck-megavalue-men-original-imahyy3quh4qkekw.jpeg?q=20&crop=false",
    affiliateLink: "https://www.shopsy.in/local-watch-analogue-display-exclusive-design-analog-men/p/itma55c62655fe43?pid=XWWG9G8R86YHYTTZ&affid=inf_58a05c12-d91e-4903-a5e5-fb790385d6e6&cmpid=product.share.pp&_refId=PP.4b7d0c8a-2d03-4f40-8595-e8f5de017184.XWWG9G8R86YHYTTZ&_appId=CL"
  },
];

// Function to display all products
function displayProducts(productsToDisplay) {
  const productContainer = document.getElementById('productContainer');
  productContainer.innerHTML = ''; // Clear the container before adding new products

  productsToDisplay.forEach(product => {
    const productCard = `
      <div class="product-card">
        <img src="${product.imgSrc}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <a href="${product.affiliateLink}" class="buy-btn">Get the Deal</a>
      </div>
    `;
    productContainer.innerHTML += productCard;
  });
}

// Initial display of all products
displayProducts(products);

// Function to filter products based on search input
function searchProducts() {
  const searchInput = document.getElementById('searchBar').value.toLowerCase();
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchInput) || 
    product.description.toLowerCase().includes(searchInput)
  );
  displayProducts(filteredProducts);
}
