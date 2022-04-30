// CURRENCY
/*
The first
argument specifies the locale that the number should be formatted for and the second
is an object that specifies more details about how the number should be formatted
*/

let euros = Intl.NumberFormat("es", {style:"currency", currency: "EUR"});
let pounds = Intl.NumberFormat("en", {style: "currency", currency: "GBP"});
let rupiah = Intl.NumberFormat("id", {style:"currency", currency: "IDR"});

// console.log(euros.format(10));
// console.log(pounds.format(1000));
// console.log(rupiah.format(10000));

let data = [0.05, .75, 1];
let formatData = Intl.NumberFormat(undefined, {
  style: "percent",
  minimumFractionDigits: 1,
  maximumFractionDigits: 1
}).format;

// console.log(data.map(formatData));

// arabic decimal digits
let arabic = Intl.NumberFormat("ar",{userGrouping: false}).format;
// console.log(arabic(1234567890));


// DATE AND TIME
let dateObj = new Date("2020-01-02T13:14:15Z");

// basic format
let basicFormatEn = Intl.DateTimeFormat("en-US").format(dateObj);
let basicFormatFr = Intl.DateTimeFormat("fr-FR").format(dateObj);
// console.log(basicFormatEn);

// spelled out weekday and month
let opts = {
  weekday: "long",
  month: "long",
  year: "numeric",
  day: "numeric"
};

let spelledInEn = Intl.DateTimeFormat("en-US", opts).format(dateObj);
// console.log(spelledInEn);


// COMPARING STRING
const colator = new Intl.Collator().compare;
let alphabet = ["a", "z", "A", "Z"];
// console.log(alphabet.sort(colator));
