use("orders");

db.order.insertMany([
  {
    orderId: "ABC123",
    price: 2,
  },
  {
    orderId: "ABC23",
    price: 2,
  },
  {
    orderId: "ABC123",
    price: 4,
  },
  {
    orderId: "ABC123",
    price: 5,
  },
]);

db.order.deleteMany({ orderId: "ABC123" });
