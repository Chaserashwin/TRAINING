use("teacher");

db.monthlyBudget.createIndex({ category: 1 });

db.monthlyBudget.createIndex({ category: "text" });

db.monthlyBudget.createIndex({ $text: { $search: "food" } });
