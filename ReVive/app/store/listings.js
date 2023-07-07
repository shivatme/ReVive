const listings = [
  {
    id: 201,
    title: "Red jacket",
    images: [{ location: require("../assets/listings/jacket1_full.jpg") }],
    price: 100,
    categoryId: 5,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
    favourite: false,
  },
  {
    id: 3,
    title: "Gray couch in a great condition",
    images: [{ location: require("../assets/listings/couch3_full.jpg") }],
    categoryId: 1,
    price: 1200,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
    favourite: false,
  },
  {
    id: 1,
    title: "Room & Board couch (great condition) - delivery included",
    description:
      "I'm selling my furniture at a discount price. Pick up at Venice. DM me asap.",
    images: [{ location: require("../assets/listings/couch2_full.jpg") }],
    price: 1000,
    categoryId: 1,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
    favourite: false,
  },
  {
    id: 2,
    title: "Designer wear shoes",
    images: [{ location: require("../assets/listings/shoes2_full.jpg") }],
    categoryId: 5,
    price: 100,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
    favourite: false,
  },
  {
    id: 102,
    title: "Canon 400D (Great Condition)",
    images: [{ location: require("../assets/listings/camera1_full.jpg") }],
    price: 300,
    categoryId: 3,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
    favourite: false,
  },
  {
    id: 101,
    title: "Nikon D850 for sale",
    images: [{ location: require("../assets/listings/camera2_full.jpg") }],
    price: 350,
    categoryId: 3,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
    favourite: false,
  },
  {
    id: 4,
    title: "Sectional couch - Delivery available",
    description: "No rips no stains no odors",
    images: [{ location: require("../assets/listings/couch1_full.jpg") }],
    categoryId: 1,
    price: 950,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
    favourite: false,
  },
  {
    id: 6,
    title: "Brown leather shoes",
    images: [{ location: require("../assets/listings/shoes1_full.jpg") }],
    categoryId: 5,
    price: 50,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
    favourite: false,
  },
];

const addListing = (listing) => {
  listing.id = listings.length + 1;
  listings.push(listing);
};

const getListings = () => listings;

const getListing = (id) => listings.find((listing) => listing.id === id);

const filterListings = (predicate) => listings.filter(predicate);

module.exports = {
  addListing,
  getListings,
  getListing,
  filterListings,
};
