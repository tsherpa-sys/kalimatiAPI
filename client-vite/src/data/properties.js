// generate formatted Nepali rental or sale prices


import listings from './data'
const formatRent = (amount, period) => {
  // Rental price formatting
  if (amount >= 100000) {
    return `₹ ${(amount / 100000).toFixed(1)} lakh /${period}`;
  }
  return `₹ ${amount.toLocaleString()} /${period}`;
};

const formatSale = (amount) => {
  // Sale price formatting (NO /mo or /year)
  if (amount >= 10000000) {
    return `₹ ${(amount / 10000000).toFixed(1)} crore`;
  }
  if (amount >= 100000) {
    return `₹ ${(amount / 100000).toFixed(1)} lakh`;
  }
  return `₹ ${amount.toLocaleString()}`;
};

// Rental price ranges (per month)
const rentRange = {
  studio: [15000, 35000],
  apartment: [30000, 70000],
  house: [60000, 150000],
  villa: [150000, 400000], // 1.5–4 lakh per month
};

// Sale price ranges (total cost)
const saleRange = {
  studio: [2500000, 4500000], // 25–45 lakh
  apartment: [4000000, 12000000], // 40 lakh – 1.2 crore
  house: [12000000, 30000000], // 1.2–3 crore
  villa: [30000000, 80000000], // 3–8 crore
};

// Random type
const randomType = () =>
  ["Studio", "Apartment", "House", "Villa"][Math.floor(Math.random() * 4)];

const randomListingType =() =>["Sale","Rent","Lease"][Math.floor(Math.random() * 3)]
// Random rent period
const randomPeriod = () =>
  Math.random() < 0.7 ? "mo" : "year"; // 70% monthly, 30% yearly

const randomLocation = () => {
  const locations = [
    "Lazimpat",
    "Baneshwor",
    "Kupondole",
    "Jawalakhel",
    "Pulchowk",
    "Boudha",
    "Bhaktapur",
    "Maharajgunj",
    "Kalanki",
    "Chabahil",
  ];
  return locations[Math.floor(Math.random() * locations.length)];
};

const randomImage = () => {
  const seed = Math.floor(Math.random() * 10000); // unique per property
  return `https://picsum.photos/seed/${seed}/400/300`;
};


export const properties = listings.splice(0,50).map((_, i) => {
  const type = randomType();
  const listingType = Math.random() < 0.7 ? "rent" : "sale"; // 70% rentals, 30% sale

  let rawPrice, priceText, rentPeriod = null;

  // if (listingType === "rent") {
  //   rentPeriod = randomPeriod(); // "mo" or "year"

  //   const [min, max] = rentRange[type];
  //   rawPrice = Math.floor(Math.random() * (max - min) + min);

  //   // If yearly rent → multiply monthly by 12
  //   if (rentPeriod === "year") {
  //     rawPrice *= 12;
  //   }

  //   priceText = formatRent(rawPrice, rentPeriod);
  // } else {
  //   // SALE pricing
  //   const [min, max] = saleRange[type];
  //   rawPrice = Math.floor(Math.random() * (max - min) + min);
  //   priceText = formatSale(rawPrice);
  // }

  return {
    id: i + 1,
    title:_.Title,
    type : randomType(),
    listingType:randomListingType(),
    rentPeriod,   
    rawPrice: _.Price,
    price: priceText,
    beds: _.Bedroom,
    baths: _.Bathroom,
    sqft: _['Build Area'],
    location: `${randomLocation()}, Kathmandu`,
    images:[randomImage(),randomImage(),randomImage(),randomImage()],
    lat: 27.65 + Math.random() * 0.16,
    lng: 85.28 + Math.random() * 0.12,
    amenities : _.Amenities,
    address:_.Address
  };
});


