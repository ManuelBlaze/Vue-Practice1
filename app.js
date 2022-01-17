/**
 * Birth date
 * @constant
 * @type {Date}
 * @default
 */
const BIRTH_DATE = new Date("1997-12-17");

/**
 * Favorite number
 * @constant
 * @type {Number}
 * @default
 */
const FAVORITE_NUMBER = Math.random();

/**
 * Get actual age
 * @returns {Number} Years of life
 */
const getAge = () => {
  const currentTime = new Date().getTime();
  const birthDateTime = BIRTH_DATE.getTime();
  const difference = currentTime - birthDateTime;

  return parseInt(difference / (1000 * 60 * 60 * 24 * 365));
};

// define Vue app
const app = Vue.createApp({
  data() {
    return {
      name: "Manuel Escobar",
      favoriteNumber: FAVORITE_NUMBER,
      coolImage:
        "https://images-na.ssl-images-amazon.com/images/I/81skXNhKmcL.jpg",
    };
  },
  methods: {
    getAge,
    ageInFiveYears: () => getAge() + 5,
  },
});

// initialize Vue functionalities
app.mount("#assignment");
