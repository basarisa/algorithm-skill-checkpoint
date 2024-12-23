function sortProductsByPrice(products) {
  // Your code here
  return products.sort((a,b) => a.price - b.price)
}

//ทำวิธีนี้เนื่องจากจำ syntex Bubble Sort ไม่ได้ค่ะ 

// Test case
const products = [
  { name: "Apple", price: 1.2 },
  { name: "Banana", price: 0.8 },
  { name: "Cherry", price: 2.5 },
  { name: "Date", price: 1.5 },
];
console.log(sortProductsByPrice(products));

// Output: [
//   { name: 'Banana', price: 0.8 },
//   { name: 'Apple', price: 1.2 },
//   { name: 'Date', price: 1.5 },
//   { name: 'Cherry', price: 2.5 }
// ]
