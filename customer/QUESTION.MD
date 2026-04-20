# JS Interview Practice — 40 Questions

## Dataset: `customers[]` — Nested Orders, Items, Reviews, Payments, Delivery

> **One dataset. 40 questions. Every JS operation covered.**
> Paste `customers-dataset.js` into your editor, then solve each question below.

---

### Dataset Shape (quick ref)

```
customers[]
  ├── customerId, name, email, region, tier, joinedAt
  ├── address { city, state, pincode }
  ├── orders[]
  │     ├── orderId, placedAt, status, couponApplied, discountPercent
  │     ├── items[]  { productId, productName, category, quantity, unitPrice, itemStatus }
  │     ├── payment  { method, status, paidAt }
  │     └── delivery { estimatedDate, actualDate, deliveredOnTime }
  └── reviews[]  { productId, rating, helpful, verified }

Regions  : North · South · East · West
Tiers    : basic · premium · enterprise
Order statuses   : pending · processing · shipped · delivered · cancelled
Payment statuses : paid · pending · failed · refunded
Payment methods  : UPI · Card · COD · Wallet
Categories       : Electronics · Furniture · Books · Sports · Home
```

---

## Complexity Legend

- 🟢 Easy — single loop, basic filter/map/reduce
- 🟡 Medium — multi-level nesting, grouping, edge cases
- 🔴 Hard — multi-condition logic, date math, ranking, composition

---

## 🟢 Easy (Q1–Q12)

---

### Q1 — Count total customers per region

**Difficulty:** 🟢 Easy
**Concepts:** `reduce`, grouping by string field

**Task:**
Count how many customers belong to each region.

**Constraints:**

- Loop all customers
- Group by `customer.region`
- Return an object

**Expected output shape:**

```js
{ North: 14, South: 12, East: 10, West: 14 }
```

**Hint:** `customers.reduce((acc, c) => { acc[c.region] = (acc[c.region] || 0) + 1; return acc; }, {})`

---

### Q2 — List all unique product categories

**Difficulty:** 🟢 Easy
**Concepts:** `flatMap`, `Set`, deduplication

**Task:**
Find every unique product category that has been ordered.

**Constraints:**

- Flatten all items from all orders from all customers
- Extract `category` field
- Return a sorted array of unique values

**Expected output shape:**

```js
["Books", "Electronics", "Furniture", "Home", "Sports"];
```

**Hint:** `[...new Set(customers.flatMap(c => c.orders.flatMap(o => o.items.map(i => i.category))))].sort()`

---

### Q3 — Count orders by status

**Difficulty:** 🟢 Easy
**Concepts:** `flatMap`, `reduce`, frequency count

**Task:**
Count total number of orders for each status across all customers.

**Constraints:**

- Flatten all orders from all customers
- Group by `order.status`
- Return count per status

**Expected output shape:**

```js
{ delivered: 44, pending: 6, shipped: 5, processing: 5, cancelled: 2 }
```

**Hint:** `customers.flatMap(c => c.orders).reduce((acc, o) => { acc[o.status] = (acc[o.status] || 0) + 1; return acc; }, {})`

---

### Q4 — Find customers with no orders

**Difficulty:** 🟢 Easy
**Concepts:** `filter`, array length check

**Task:**
Return all customers who have never placed an order.

**Constraints:**

- Check `orders` array is empty or missing
- Return `[{ customerId, name, email, region }]`

**Expected output shape:**

```js
[
  {
    customerId: "C041",
    name: "Sneha Roy",
    email: "sneha.roy@example.com",
    region: "East",
  },
];
```

**Hint:** `customers.filter(c => !c.orders || c.orders.length === 0)`

---

### Q5 — Total number of items ever ordered

**Difficulty:** 🟢 Easy
**Concepts:** `flatMap`, `reduce`, summing quantities

**Task:**
Find the total quantity of all items ordered across all orders and all customers.

**Constraints:**

- Flatten all items from all orders
- Sum the `quantity` field of each item
- Return a single number

**Expected output shape:**

```js
412;
```

**Hint:** `customers.flatMap(c => c.orders.flatMap(o => o.items)).reduce((sum, i) => sum + i.quantity, 0)`

---

### Q6 — List all customers in a specific tier

**Difficulty:** 🟢 Easy
**Concepts:** `filter`, parameterized function

**Task:**
Write a function `getByTier(tier)` that returns all customers in that tier.

**Constraints:**

- Accept `'basic'`, `'premium'`, or `'enterprise'` as input
- Return `[{ customerId, name, region, tier }]`
- Sort alphabetically by name

**Expected output shape (for 'enterprise'):**

```js
[
  { customerId: 'C048', name: 'Chitra Selvam',  region: 'South', tier: 'enterprise' },
  { customerId: 'C007', name: 'Deepa Krishnan', region: 'East',  tier: 'enterprise' },
  ...
]
```

**Hint:** `customers.filter(c => c.tier === tier).sort((a,b) => a.name.localeCompare(b.name))`

---

### Q7 — Find all cancelled orders

**Difficulty:** 🟢 Easy
**Concepts:** `flatMap`, `filter`, attaching parent data

**Task:**
Return all cancelled orders along with who placed them.

**Constraints:**

- Flatten all orders, attach `customerId` and `customerName`
- Filter where `order.status === 'cancelled'`
- Return `[{ orderId, customerId, customerName, placedAt }]`

**Expected output shape:**

```js
[
  {
    orderId: "ORD-1007",
    customerId: "C003",
    customerName: "Meera Joshi",
    placedAt: "2025-02-01T12:00:00Z",
  },
  {
    orderId: "ORD-1039",
    customerId: "C028",
    customerName: "Lata Pandey",
    placedAt: "2025-02-12T09:00:00Z",
  },
];
```

**Hint:** `customers.flatMap(c => c.orders.map(o => ({ ...o, customerId: c.customerId, customerName: c.name }))).filter(o => o.status === 'cancelled')`

---

### Q8 — Count reviews per product

**Difficulty:** 🟢 Easy
**Concepts:** `flatMap`, `reduce`, frequency map

**Task:**
Count how many reviews each product has received.

**Constraints:**

- Flatten all reviews from all customers
- Group by `productId`
- Return `{ 'P-19': 8, 'P-03': 6, ... }` sorted by count desc

**Expected output shape:**

```js
{ 'P-21': 9, 'P-02': 8, 'P-19': 7, 'P-03': 5, ... }
```

**Hint:** Use reduce to build a frequency map, then sort with Object.entries

---

### Q9 — All orders placed in a specific month

**Difficulty:** 🟢 Easy
**Concepts:** `Date`, string slicing, `filter`

**Task:**
Write a function `getOrdersByMonth(year, month)` returning all orders placed in that month.
Example call: `getOrdersByMonth(2025, 1)` → January 2025.

**Constraints:**

- Parse `order.placedAt` to get year and month
- Filter matching orders, attach `customerId` and `customerName`
- Return `[{ orderId, customerId, customerName, placedAt, status }]`

**Expected output shape:**

```js
// getOrdersByMonth(2025, 1) →
[
  { orderId: 'ORD-1001', customerId: 'C001', customerName: 'Ankit Mehta', ... },
  ...
]
```

**Hint:** `const d = new Date(o.placedAt); d.getFullYear() === year && d.getMonth() + 1 === month`

---

### Q10 — List payment methods used and how many times

**Difficulty:** 🟢 Easy
**Concepts:** `flatMap`, `reduce`, frequency count on nested field

**Task:**
Count how many orders were paid using each payment method.

**Constraints:**

- Flatten all orders
- Group by `order.payment.method`
- Return `{ UPI: 18, Card: 22, COD: 8, Wallet: 4 }`

**Expected output shape:**

```js
{ Card: 22, UPI: 18, COD: 8, Wallet: 4 }
```

**Hint:** Access `o.payment.method` inside your reduce

---

### Q11 — Average number of items per order

**Difficulty:** 🟢 Easy
**Concepts:** `flatMap`, `reduce`, averaging

**Task:**
Calculate the average number of line items per order across all orders.

**Constraints:**

- Flatten all orders
- For each order, get `order.items.length`
- Return a number rounded to 2 decimal places

**Expected output shape:**

```js
2.14;
```

**Hint:** total items count / total orders count

---

### Q12 — Customers who left at least one review

**Difficulty:** 🟢 Easy
**Concepts:** `filter`, nested array length

**Task:**
Return customers who have left at least one product review.

**Constraints:**

- Check `customer.reviews.length > 0`
- Return `[{ customerId, name, region, reviewCount }]`
- Sort by reviewCount descending

**Expected output shape:**

```js
[
  { customerId: 'C017', name: 'Tanvi Desai',  region: 'West',  reviewCount: 2 },
  { customerId: 'C001', name: 'Ankit Mehta',  region: 'North', reviewCount: 2 },
  ...
]
```

**Hint:** `customers.filter(c => c.reviews.length > 0).map(c => ({ ...spread, reviewCount: c.reviews.length }))`

---

## 🟡 Medium (Q13–Q28)

---

### Q13 — Total revenue per region (with discount applied)

**Difficulty:** 🟡 Medium
**Concepts:** Nested `reduce`, percentage math, grouping

**Task:**
Calculate total revenue for each region. Apply the `discountPercent` per order before summing.

**Constraints:**

- Revenue per item = `unitPrice × quantity`
- Order total = sum of items × `(1 - discountPercent / 100)`
- Group by `customer.region`
- Return `{ North: 84200, South: 71400, ... }`

**Expected output shape:**

```js
{ West: 285400, North: 164300, South: 139800, East: 121600 }
```

**Hint:**

```js
customers.reduce((acc, c) => {
  c.orders.forEach((o) => {
    const raw = o.items.reduce((s, i) => s + i.unitPrice * i.quantity, 0);
    const net = raw * (1 - o.discountPercent / 100);
    acc[c.region] = (acc[c.region] || 0) + net;
  });
  return acc;
}, {});
```

---

### Q14 — Top 5 customers by total spend

**Difficulty:** 🟡 Medium
**Concepts:** `map`, `sort`, `slice`, discount math

**Task:**
Find the top 5 customers ranked by total amount spent. Apply discount on each order.

**Constraints:**

- For each customer, sum all order totals after discount
- Sort descending by totalSpent
- Return `[{ customerId, name, region, tier, totalSpent }]`

**Expected output shape:**

```js
[
  { customerId: 'C034', name: 'Pallavi Jain',  region: 'West',  tier: 'enterprise', totalSpent: 99400 },
  { customerId: 'C011', name: 'Kavitha Raman', region: 'South', tier: 'enterprise', totalSpent: 93800 },
  ...
]
```

**Hint:** Map each customer to their total, then `.sort((a,b) => b.totalSpent - a.totalSpent).slice(0,5)`

---

### Q15 — Most popular product per category (by quantity ordered)

**Difficulty:** 🟡 Medium
**Concepts:** Two-level `reduce`, finding max within a group

**Task:**
For each product category, find the product with the highest total quantity ordered.

**Constraints:**

- Flatten all items from all orders
- Group by `category`, then by `productId` within each category
- Sum quantities
- Pick the product with max totalQty per category
- Return `{ Electronics: { productName, totalQty }, ... }`

**Expected output shape:**

```js
{
  Electronics: { productName: 'Wireless Earbuds', totalQty: 24 },
  Furniture:   { productName: 'Ergonomic Chair',  totalQty: 23 },
  Books:       { productName: 'Clean Code (Book)',totalQty: 9  },
  Sports:      { productName: 'Yoga Mat',         totalQty: 7  },
  Home:        { productName: 'Air Purifier',     totalQty: 5  }
}
```

**Hint:** Two-level reduce: `catMap[category][productId]`, then Object.entries to find max per category

---

### Q16 — Orders with payment failed but not cancelled

**Difficulty:** 🟡 Medium
**Concepts:** Multi-condition filter, anomaly detection

**Task:**
Find orders where `payment.status === 'failed'` but `order.status !== 'cancelled'`. These are data anomalies.

**Constraints:**

- Flatten all orders, attach customer info
- Both conditions must be true simultaneously
- Return `[{ orderId, customerId, customerName, orderStatus, paymentStatus }]`

**Expected output shape:**

```js
[
  {
    orderId: "ORD-1033",
    customerId: "C007",
    customerName: "Deepa Krishnan",
    orderStatus: "pending",
    paymentStatus: "failed",
  },
  {
    orderId: "ORD-1078",
    customerId: "C014",
    customerName: "Arun Pillai",
    orderStatus: "processing",
    paymentStatus: "failed",
  },
];
```

**Hint:** `payment.status === 'failed' && order.status !== 'cancelled'`

---

### Q17 — Average rating per product (min 2 reviews)

**Difficulty:** 🟡 Medium
**Concepts:** `flatMap`, grouping reviews, averaging, filtering by count

**Task:**
Calculate average star rating per product. Only include products with at least 2 reviews.

**Constraints:**

- Flatten all reviews from all customers
- Group by `productId`
- Average the `rating` field per product
- Filter out products with fewer than 2 reviews
- Return `[{ productId, avgRating, reviewCount }]` sorted by avgRating desc

**Expected output shape:**

```js
[
  { productId: 'P-02', avgRating: 4.9, reviewCount: 8 },
  { productId: 'P-21', avgRating: 4.8, reviewCount: 7 },
  ...
]
```

**Hint:** Build a `productId → [ratings]` map, then filter entries where length >= 2

---

### Q18 — Orders with mixed item statuses

**Difficulty:** 🟡 Medium
**Concepts:** `Set`, uniqueness check on nested array

**Task:**
Find orders where not all items share the same `itemStatus`. (Some delivered, some pending = anomaly.)

**Constraints:**

- For each order, collect unique `itemStatus` values using a Set
- If the Set has more than 1 unique value → flag it
- Return `[{ orderId, customerId, itemStatuses: ['delivered', 'pending'] }]`

**Expected output shape:**

```js
[
  {
    orderId: "ORD-1044",
    customerId: "C003",
    itemStatuses: ["pending", "delivered"],
  },
];
```

**Hint:** `new Set(order.items.map(i => i.itemStatus)).size > 1`

---

### Q19 — Revenue contribution % by tier

**Difficulty:** 🟡 Medium
**Concepts:** Grouping, percentage calculation, `toFixed`

**Task:**
What percentage of total revenue comes from each customer tier?

**Constraints:**

- Calculate total revenue across all customers (discount applied per order)
- Group revenue by `customer.tier`
- Percentage = `(tierRevenue / totalRevenue) * 100`
- Return `{ basic: 12.4, premium: 48.2, enterprise: 39.4 }`

**Expected output shape:**

```js
{ basic: 12.4, premium: 47.9, enterprise: 39.7 }
```

**Hint:** Reuse your getRevenue function. Divide each tier's total by grand total × 100. Use `.toFixed(1)`

---

### Q20 — Pending orders older than N days

**Difficulty:** 🟡 Medium
**Concepts:** Date math, parameterized filter, sorting

**Task:**
Find orders still pending that were placed more than N days ago. Return sorted by daysPending desc.

**Constraints:**

- Accept `N` as parameter (default 7)
- Filter `order.status === 'pending'`
- Compute daysPending from `placedAt` to today
- Filter where `daysPending > N`
- Return `[{ orderId, customerId, name, placedAt, daysPending }]`

**Expected output shape:**

```js
[
  { orderId: 'ORD-1028', customerId: 'C019', name: 'Divya Menon',    daysPending: 105 },
  { orderId: 'ORD-1033', customerId: 'C007', name: 'Deepa Krishnan', daysPending: 93  },
  ...
]
```

**Hint:** `Math.floor((Date.now() - new Date(order.placedAt)) / (1000 * 60 * 60 * 24))`

---

### Q21 — Customers who used a specific coupon

**Difficulty:** 🟡 Medium
**Concepts:** Nested filter, `flatMap`, deduplication

**Task:**
Write a function `getCouponUsers(couponCode)` that returns all customers who used that coupon.

**Constraints:**

- A customer qualifies if at least one of their orders has `couponApplied === couponCode`
- Return `[{ customerId, name, region, tier, timesUsed }]`
- `timesUsed` = how many times they used that specific coupon

**Expected output shape:**

```js
// getCouponUsers('SAVE10')
[
  { customerId: 'C001', name: 'Ankit Mehta', region: 'North', tier: 'premium',    timesUsed: 1 },
  { customerId: 'C002', name: 'Priya Shah',  region: 'West',  tier: 'enterprise', timesUsed: 1 },
  ...
]
```

**Hint:** `c.orders.filter(o => o.couponApplied === couponCode).length` gives timesUsed

---

### Q22 — Products never reviewed

**Difficulty:** 🟡 Medium
**Concepts:** Set comparison, cross-array diffing

**Task:**
Find all products that appear in order items but have never been reviewed by any customer.

**Constraints:**

- Build a Set of all reviewed productIds from `customer.reviews`
- Build a Set of all ordered productIds from `order.items`
- Return products in orders Set but NOT in reviews Set
- Return `[{ productId, productName }]` (unique, no duplicates)

**Expected output shape:**

```js
[
  { productId: 'P-16', productName: 'Water Bottle' },
  { productId: 'P-12', productName: 'Desk Lamp'    },
  ...
]
```

**Hint:** Build both Sets first. Then filter ordered products where `!reviewedSet.has(productId)`

---

### Q23 — COD orders with payment still pending

**Difficulty:** 🟡 Medium
**Concepts:** Multi-field filter on nested object

**Task:**
Find all orders where payment method is 'COD' and payment status is still 'pending'. These haven't been collected.

**Constraints:**

- Filter: `payment.method === 'COD'` AND `payment.status === 'pending'`
- Attach customer info
- Return `[{ orderId, customerId, customerName, orderStatus, placedAt }]`

**Expected output shape:**

```js
[
  {
    orderId: "ORD-1048",
    customerId: "C036",
    customerName: "Hema Sundaram",
    orderStatus: "pending",
    placedAt: "2025-03-10...",
  },
];
```

**Hint:** `o.payment.method === 'COD' && o.payment.status === 'pending'`

---

### Q24 — Top 3 most purchased products overall

**Difficulty:** 🟡 Medium
**Concepts:** flatMap, reduce to map, sort, slice

**Task:**
Find the top 3 products by total quantity ordered across all customers and orders.

**Constraints:**

- Flatten all items from all orders
- Group by `productId`, sum `quantity`
- Sort desc by totalQty
- Return top 3 as `[{ productId, productName, totalQty }]`

**Expected output shape:**

```js
[
  { productId: "P-21", productName: "Ergonomic Chair", totalQty: 26 },
  { productId: "P-19", productName: "Wireless Earbuds", totalQty: 24 },
  { productId: "P-02", productName: "Standing Desk", totalQty: 17 },
];
```

**Hint:** Build a `productId → { productName, totalQty }` map via reduce, then sort and slice

---

### Q25 — Orders delivered late

**Difficulty:** 🟡 Medium
**Concepts:** String date comparison, filtering on nested delivery object

**Task:**
Return all orders that were delivered late (actualDate > estimatedDate).

**Constraints:**

- Only consider orders with `status === 'delivered'`
- Compare `delivery.actualDate > delivery.estimatedDate` (ISO string comparison works)
- Return `[{ orderId, customerId, customerName, estimatedDate, actualDate, daysLate }]`
- `daysLate` = difference in days

**Expected output shape:**

```js
[
  { orderId: 'ORD-1002', customerId: 'C001', customerName: 'Ankit Mehta', estimatedDate: '2025-02-22', actualDate: '2025-02-25', daysLate: 3 },
  ...
]
```

**Hint:** `Math.floor((new Date(actual) - new Date(estimated)) / (1000*60*60*24))`

---

### Q26 — Revenue per payment method

**Difficulty:** 🟡 Medium
**Concepts:** Grouping by nested field, discount math

**Task:**
Calculate total revenue broken down by payment method. Apply discount per order.

**Constraints:**

- Only count orders where `payment.status === 'paid'`
- Apply discountPercent before summing
- Group by `payment.method`
- Return `{ UPI: 42000, Card: 180000, COD: 8400, Wallet: 14200 }`

**Expected output shape:**

```js
{ Card: 218400, UPI: 89300, Wallet: 18600, COD: 14900 }
```

**Hint:** Flatten all orders, filter paid ones, then reduce grouping on `o.payment.method`

---

### Q27 — Customers with orders in multiple regions (data check)

**Difficulty:** 🟡 Medium
**Concepts:** Detecting per-customer anomalies, Set uniqueness

**Task:**
Each customer has a single `region` field — but check if any customer placed an order with a delivery address in a different region. (Since delivery addresses aren't in orders, instead: find customers whose `address.state` doesn't match their registered `region` mapping.)

Simplified version: Find customers where number of distinct `tier` values in their profile doesn't make sense — OR — actually: find customers whose city/state is in a region inconsistent with their `region` field.

Use this simpler real version:
**Find customers who have more than 3 orders.**

**Constraints:**

- Filter customers where `orders.length > 3`
- Return `[{ customerId, name, region, tier, orderCount }]` sorted desc

**Expected output shape:**

```js
[
  { customerId: 'C001', name: 'Ankit Mehta', region: 'North', tier: 'premium', orderCount: 3 },
  ...
]
```

**Hint:** Simple filter + map

---

### Q28 — Total discount given per coupon code

**Difficulty:** 🟡 Medium
**Concepts:** Grouping by nullable field, discount amount calculation

**Task:**
Calculate the total discount rupee amount given per coupon code.

**Constraints:**

- Only include orders where `couponApplied` is not null
- Discount amount = `rawTotal × (discountPercent / 100)` per order
- Group by `couponApplied`
- Return `[{ coupon, totalDiscountGiven, timesUsed }]` sorted by totalDiscountGiven desc

**Expected output shape:**

```js
[
  { coupon: "SAVE10", totalDiscountGiven: 28400, timesUsed: 18 },
  { coupon: "FLAT200", totalDiscountGiven: 19800, timesUsed: 12 },
];
```

**Hint:** Filter where `o.couponApplied !== null`, then reduce by coupon code

---

## 🔴 Hard (Q29–Q40)

---

### Q29 — Month-wise revenue trend (last 6 months)

**Difficulty:** 🔴 Hard
**Concepts:** Date extraction, dynamic month filtering, chronological sort

**Task:**
Build a month-by-month revenue breakdown for the last 6 calendar months.

**Constraints:**

- Only include `delivered` orders
- Extract month + year from `order.placedAt`
- Apply discount before summing revenue
- Return last 6 months only, sorted chronologically
- Return `[{ month: 'Jan 2025', revenue: 54300 }, ...]`

**Expected output shape:**

```js
[
  { month: "Nov 2024", revenue: 88400 },
  { month: "Dec 2024", revenue: 94100 },
  { month: "Jan 2025", revenue: 128400 },
  { month: "Feb 2025", revenue: 142600 },
  { month: "Mar 2025", revenue: 91200 },
  { month: "Apr 2025", revenue: 14300 },
];
```

**Hint:**

```js
const key = new Date(o.placedAt).toLocaleString("default", {
  month: "short",
  year: "numeric",
});
// Then filter keys in last 6 months and sort by Date
```

---

### Q30 — Customers at churn risk

**Difficulty:** 🔴 Hard
**Concepts:** Finding max date, multi-condition logic, date math

**Task:**
A customer is "churn risk" if: no order placed in the last 60 days AND their last order status is not 'delivered'.

**Constraints:**

- Find each customer's most recent order by `placedAt`
- Check daysSinceLastOrder > 60
- AND `lastOrderStatus !== 'delivered'`
- Return `[{ customerId, name, tier, daysSinceLastOrder, lastOrderStatus }]`
- Sort by daysSinceLastOrder desc

**Expected output shape:**

```js
[
  { customerId: 'C019', name: 'Divya Menon',    tier: 'basic',   daysSinceLastOrder: 105, lastOrderStatus: 'pending'    },
  { customerId: 'C036', name: 'Hema Sundaram',  tier: 'basic',   daysSinceLastOrder: 39,  lastOrderStatus: 'pending'    },
  ...
]
```

**Hint:** Sort `c.orders` by placedAt desc, take `[0]`. Skip customers with no orders.

---

### Q31 — Coupon effectiveness report

**Difficulty:** 🔴 Hard
**Concepts:** Grouped aggregation, avgOrderValue, multi-field reduce

**Task:**
Analyze which coupons drove the most revenue and how often each was used.

**Constraints:**

- Only include orders where `couponApplied !== null`
- Per coupon: count usages, total revenue after discount, average order value
- Sort by totalRevenue desc
- Return `[{ coupon, usages, totalRevenue, avgOrderValue }]`

**Expected output shape:**

```js
[
  { coupon: "SAVE10", usages: 18, totalRevenue: 198400, avgOrderValue: 11022 },
  { coupon: "FLAT200", usages: 12, totalRevenue: 121800, avgOrderValue: 10150 },
];
```

**Hint:** Group orders by couponApplied, then for each group compute total and average

---

### Q32 — Late delivery rate per region

**Difficulty:** 🔴 Hard
**Concepts:** Multi-level grouping, percentage calculation, nested condition

**Task:**
For each region, find what % of delivered orders arrived late.

**Constraints:**

- Only consider `status === 'delivered'` orders
- Late = `delivery.actualDate > delivery.estimatedDate`
- Group by `customer.region`
- Return `{ North: { total, late, latePercent }, ... }`

**Expected output shape:**

```js
{
  North: { total: 12, late: 2, latePercent: '16.7%' },
  South: { total: 10, late: 2, latePercent: '20.0%' },
  East:  { total:  8, late: 3, latePercent: '37.5%' },
  West:  { total: 14, late: 3, latePercent: '21.4%' }
}
```

**Hint:** ISO date strings compare correctly with `>`. Group by region, count total and late per group.

---

### Q33 — Full customer 360 summary

**Difficulty:** 🔴 Hard
**Concepts:** Sub-function composition, all field types, nested traversal

**Task:**
For a given `customerId`, return a complete profile summary object.

**Constraints:**

- `totalOrders`, `totalSpent` (discount applied), `avgOrderValue`
- `favouriteCategory`: category they ordered most from (by quantity)
- `lastOrderDate` and `lastOrderStatus`
- `onTimeDeliveryRate`: % of delivered orders that arrived on time
- `reviewCount` and `avgRatingGiven`
- `daysSinceLastOrder`
- Return a single nested object

**Expected output shape:**

```js
{
  customerId: 'C001', name: 'Ankit Mehta', region: 'North', tier: 'premium',
  totalOrders: 3, totalSpent: 8118, avgOrderValue: 2706,
  favouriteCategory: 'Electronics',
  lastOrderDate: '2025-03-22', lastOrderStatus: 'pending',
  onTimeDeliveryRate: '50.0%',
  reviewCount: 2, avgRatingGiven: 4.5,
  daysSinceLastOrder: 27
}
```

**Hint:** Write sub-functions: `getSpend(c)`, `getFavCategory(c)`, `getDeliveryRate(c)`, `getReviewStats(c)`. Compose at the end.

---

### Q34 — Rank customers within each tier by spend

**Difficulty:** 🔴 Hard
**Concepts:** Grouping + sorting within groups, rank assignment

**Task:**
For each tier, rank customers by their total spend. Return rank 1 = highest spender.

**Constraints:**

- Apply discount per order when computing total spend
- Group by `customer.tier`
- Within each tier, sort desc and assign rank 1, 2, 3…
- Return `{ basic: [{ rank, customerId, name, totalSpent }], premium: [...], enterprise: [...] }`

**Expected output shape:**

```js
{
  enterprise: [
    { rank: 1, customerId: 'C034', name: 'Pallavi Jain',  totalSpent: 99400 },
    { rank: 2, customerId: 'C011', name: 'Kavitha Raman', totalSpent: 93800 },
    ...
  ],
  ...
}
```

**Hint:** Group into tier buckets, sort each bucket, then `.map((c, i) => ({ rank: i+1, ...c }))`

---

### Q35 — Products bought together most often

**Difficulty:** 🔴 Hard
**Concepts:** Pair generation, frequency map with composite key, sorting

**Task:**
Find which two products appear together in the same order most frequently.

**Constraints:**

- For each order with 2+ items, generate all pairs of productIds
- A pair is unordered: `(P-19, P-07)` and `(P-07, P-19)` are the same
- Count frequency of each pair across all orders
- Return top 5 pairs: `[{ pair: ['P-19', 'P-07'], pairNames, count }]`

**Expected output shape:**

```js
[
  { pair: ['P-19', 'P-07'], pairNames: ['Wireless Earbuds', 'USB-C Hub'], count: 4 },
  { pair: ['P-02', 'P-21'], pairNames: ['Standing Desk', 'Ergonomic Chair'], count: 4 },
  ...
]
```

**Hint:**

```js
// Generate pairs from an items array:
for (let i = 0; i < items.length; i++)
  for (let j = i + 1; j < items.length; j++)
    key = [items[i].productId, items[j].productId].sort().join("|");
```

---

### Q36 — Customer lifetime value (CLV) prediction score

**Difficulty:** 🔴 Hard
**Concepts:** Weighted scoring, multi-factor formula, normalization

**Task:**
Assign each customer a simple CLV score based on: total spend, order frequency, recency, and avg rating given.

**Formula:**

```
score = (totalSpent / 1000) * 0.4
      + (orderCount * 10)   * 0.3
      + (recencyScore)      * 0.2    // recencyScore = 100 - daysSinceLastOrder (min 0)
      + (avgRating * 20)    * 0.1
```

**Constraints:**

- Customers with no orders get score 0
- Round score to 2 decimal places
- Return `[{ customerId, name, tier, score }]` sorted desc by score
- Return top 10

**Expected output shape:**

```js
[
  { customerId: 'C034', name: 'Pallavi Jain',  tier: 'enterprise', score: 48.32 },
  { customerId: 'C017', name: 'Tanvi Desai',   tier: 'enterprise', score: 44.18 },
  ...
]
```

**Hint:** Write a `getScore(customer)` function applying the formula. Use `Math.max(0, 100 - daysSince)` for recency.

---

### Q37 — Orders where all items are delivered but order status is not

**Difficulty:** 🔴 Hard
**Concepts:** Nested `every()`, status mismatch detection

**Task:**
Find orders where every single item has `itemStatus === 'delivered'` but the parent `order.status` is NOT 'delivered'. These are sync errors.

**Constraints:**

- Check `order.items.every(i => i.itemStatus === 'delivered')`
- AND `order.status !== 'delivered'`
- Return `[{ orderId, customerId, customerName, orderStatus, allItemsDelivered: true }]`

**Expected output shape:**

```js
// May return empty [] if data is clean, or find mismatches:
[
  {
    orderId: "ORD-XXXX",
    customerId: "CXX",
    customerName: "...",
    orderStatus: "processing",
    allItemsDelivered: true,
  },
];
```

**Hint:** `order.items.every(i => i.itemStatus === 'delivered') && order.status !== 'delivered'`

---

### Q38 — Weekly order volume for the last 8 weeks

**Difficulty:** 🔴 Hard
**Concepts:** ISO week calculation, date bucketing, chronological sort

**Task:**
Build a week-by-week order count for the last 8 weeks.

**Constraints:**

- Get the ISO week number and year from `order.placedAt`
- Only include orders from the last 8 weeks relative to today
- Count orders per week
- Return `[{ week: 'Week 12, 2025', orderCount: 14 }, ...]` sorted chronologically

**Expected output shape:**

```js
[
  { week: 'W08 2025', orderCount: 8  },
  { week: 'W09 2025', orderCount: 11 },
  { week: 'W10 2025', orderCount: 14 },
  ...
]
```

**Hint:**

```js
function getISOWeek(date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + 4 - (d.getDay() || 7));
  const yearStart = new Date(d.getFullYear(), 0, 1);
  return Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
}
```

---

### Q39 — Regional performance dashboard object

**Difficulty:** 🔴 Hard
**Concepts:** Full aggregation pipeline, composition, multi-metric output

**Task:**
Build a complete regional summary report. This is the final boss for grouping.

**Constraints (per region return):**

- `totalCustomers`, `totalOrders`, `totalRevenue` (discount applied)
- `avgOrderValue`
- `topProduct`: productName with highest total qty in that region
- `pendingOrderCount`: orders with status === 'pending'
- `lateDeliveryCount`: delivered orders where actualDate > estimatedDate
- `topTier`: which tier has most customers in this region

Sort regions by totalRevenue descending.

**Expected output shape:**

```js
[
  {
    region: 'West', totalCustomers: 14, totalOrders: 18, totalRevenue: 285400,
    avgOrderValue: 15855, topProduct: 'Ergonomic Chair', pendingOrderCount: 1,
    lateDeliveryCount: 3, topTier: 'enterprise'
  },
  ...
]
```

**Hint:** Break into sub-functions per metric. Compose them region by region using `Object.groupBy` or a manual group reduce.

---

### Q40 — Detect VIP customers (multi-criteria)

**Difficulty:** 🔴 Hard
**Concepts:** Multi-condition boolean logic, combining all dataset dimensions

**Task:**
A customer qualifies as VIP if they meet ALL of the following:

1. `tier === 'enterprise'` OR `totalSpent >= 20000`
2. At least 2 delivered orders
3. Average rating given >= 4.0 (if they have any reviews)
4. No cancelled orders

**Constraints:**

- Apply discount when computing totalSpent
- Customers with no reviews pass condition 3 automatically
- Return `[{ customerId, name, tier, totalSpent, deliveredOrders, avgRating, isVIP: true }]`
- Sort by totalSpent desc

**Expected output shape:**

```js
[
  { customerId: 'C034', name: 'Pallavi Jain',  tier: 'enterprise', totalSpent: 99400, deliveredOrders: 1, avgRating: 5.0, isVIP: true },
  { customerId: 'C017', name: 'Tanvi Desai',   tier: 'enterprise', totalSpent: 87200, deliveredOrders: 2, avgRating: 4.5, isVIP: true },
  ...
]
```

**Hint:** Write each condition as a separate boolean check. AND them all together. The multi-criteria filter is the hardest part — don't combine conditions prematurely.

---

## Practice Tips

1. **Solve without hints first.** Check the hint only if stuck for 10+ minutes.
2. **Test edge cases:** C041 (no orders), ORD-1044 (mixed item statuses), ORD-1078 (failed payment, not cancelled).
3. **Build helper functions:** `getOrderTotal(order)`, `daysSince(dateStr)`, `getRevenue(orders)` — reuse them across questions.
4. **Q33, Q36, Q39, Q40** are the interview finishers. If you can solve all 4, you're ready.
5. **For React round:** Practice rendering this data as a dashboard — filterable table, region chart, customer detail view.

---

_Dataset file: `customers-dataset.js`_
_50 customers · ~55 orders · 4 regions · 3 tiers · 5 categories_
