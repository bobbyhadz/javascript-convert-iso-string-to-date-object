// EXAMPLE 1 - Convert an ISO string to a Date object in JavaScript

const isoStr1 = '2022-07-21T09:35:31.820Z';

// ✅ Create Date object (setting date to UTC)
const date1 = new Date(isoStr1);
console.log(date1); // 👉️ Thu Jul 21 2022 12:35:31 GMT+0300

// ✅ Create Date object (setting date to local time)
const date2 = new Date(isoStr1.slice(0, -1));
console.log(date2); // 👉️ Thu Jul 21 2022 09:35:31 GMT+0300

// ------------------------------------------------------------------

// // EXAMPLE 2 - Convert an ISO string to a Date object storing the local time

// const isoStr1 = '2022-07-21T09:35:31.820Z';

// // ✅ Create a Date object (setting the date to local time)
// const date2 = new Date(isoStr1.slice(0, -1));
// console.log(date2); // 👉️ Thu Jul 21 2022 09:35:31 GMT+0300

// ------------------------------------------------------------------

// // EXAMPLE 3 - Convert a Date string to ISO format using JavaScript

// const dateStr = '2022-07-21';

// const date = new Date(dateStr);

// const iso = date.toISOString();
// console.log(iso); // 👉️ "2022-07-21T00:00:00.000Z"
