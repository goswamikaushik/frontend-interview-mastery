const customers = require("./data");

const data = structuredClone(customers);

function answer(data) {
  // Q1 — Count total customers per region
  const countTotalPerRegion = data.reduce((acc, cu) => {
    const region = cu.region;
    if (!region) return acc;

    acc[region] = (acc[region] || 0) + 1;
    return acc;
  }, {});

  // Q2 — List all unique product categories
  // A1
  //   const listOfUniqueProductsCategories = Array.from(
  //     data.reduce((acc, cu, currentIndex) => {
  //       const orders = cu.orders;
  //       const items = orders.flatMap((order) => order.items);
  //       items.forEach((item) => acc.add(item.category));
  //       return acc;
  //     }, new Set()),
  //   );

  // A2
  const listOfUniqueProductsCategories = [
    ...new Set(
      data.flatMap((c) =>
        c.orders.flatMap((o) => o.items.map((i) => i.category)),
      ),
    ),
  ].sort();

  // Q3 — Count orders by status
  // A1
  //   const countOrdersByStatus = data.reduce((acc, customer) => {
  //     if (!Array.isArray(customer.orders)) return acc;

  //     for (const order of customer.orders) {
  //       if (!order?.status) continue;
  //       acc[order.status] = (acc[order.status] || 0) + 1;
  //     }

  //     return acc;
  //   }, {});

  // A2
  const countOrdersByStatus = data
    .flatMap((c) => c.orders)
    .reduce((acc, o) => {
      acc[o.status] = (acc[o.status] || 0) + 1;
      return acc;
    }, {});

  // Q4 — Find customers with no orders
  const customerWithNoOrders = data.filter((c) => !(c.orders || []).length);

  // Q5 — Total number of items ever ordered
  const totalNumbersOfItemsOrdered = data.flatMap((c) =>
    c.orders.flatMap((o) => o.items.flatMap((i) => i)),
  ).length;

  // Q6 -  List all customers in a specific tier
  const getByTier = (tier) => data.filter((c) => c.tier === tier);

  // Q7 — Find all cancelled orders
  const AllCancelledOrders = data.flatMap((c) =>
    c.orders.filter((o) => o.status === "cancelled"),
  );

  // Q8 — Count reviews per product
  const countReviewsPerProduct = data
    .flatMap((c) => c.reviews)
    .reduce((acc, curr) => {
      const productId = curr.productId;
      if (!productId) return acc;

      acc[productId] = (acc[productId] ?? 0) + 1;

      return acc;
    }, {});

  // Q9 — All orders placed in a specific month
  const getOrdersByMonth = (year, month) => {
    return data.flatMap((c) =>
      c.orders.filter((o) => {
        const d = new Date(o.placedAt);
        return d.getFullYear() === year && d.getMonth() + 1 === month;
      }),
    );
  };

  // Q10 — List payment methods used and how many times
  const paymentMethodCounts = data
    .flatMap((c) => c.orders)
    .reduce((acc, o) => {
      const method = o.payment.method;
      if (!method) return acc;

      acc[method] = (acc[method] ?? 0) + 1;

      return acc;
    }, {});

  // Q11 — Average number of items per order
  const totalOrders = data.flatMap((c) => c.orders);
  const totalItems = totalOrders
    .flatMap((o) => o.items || [])
    .reduce((acc, i) => acc + (i.quantity || 0), 0);

  const averageNumberOfItemsPerOrder =
    totalOrders.length === 0 ? 0 : totalItems / totalOrders.length;

  // Q12 — Customers who left at least one review
  const customerListWithAtLeastOneReview = data.filter(
    ({ reviews }) => Array.isArray(reviews) && reviews.length > 0,
  );

  // Q13 — Total revenue per region (with discount applied)
  const getTotalRevenuePerRegion = () => {
    const totalRevenuePerRegion = data.reduce((acc, curr) => {
      const region = curr.region;

      for (const order of curr.orders) {
        if (order.status !== "delivered") continue;
        if (order.payment?.status !== "paid") continue;

        const orderTotal = order.items.reduce(
          (sum, item) => sum + item.quantity * item.unitPrice,
          0,
        );

        const discountedTotal =
          orderTotal * (1 - (order.discountPercent || 0) / 100);

        acc[region] = (acc[region] || 0) + discountedTotal;
      }
      return acc;
    }, {});

    Object.keys(totalRevenuePerRegion).forEach((k) => {
      totalRevenuePerRegion[k] = Math.round(totalRevenuePerRegion[k]);
    });

    return totalRevenuePerRegion;
  };

  // Q14 — Top 5 customers by total spend
  const getTop5CustomerByTotalSpend = () => {
    const customersTop = data.map((c) => {
      let discountedTotal = 0;
      for (const order of c.orders) {
        const orderTotal = order.items.reduce(
          (sum, item) => sum + item.quantity * item.unitPrice,
          0,
        );

        discountedTotal +=
          orderTotal * (1 - (order.discountPercent || 0) / 100);
      }
      return {
        customerId: c.customerId,
        name: c.name,
        region: c.region,
        tier: c.tier,
        totalSpent: discountedTotal,
      };
    });
    return customersTop.sort((a, b) => b.totalSpent - a.totalSpent).slice(0, 5);
  };

  // Q16 — Orders with payment failed but not cancelled
  const getOrdersWithPaymentFailedButNotCancelled = () => {
    return data.flatMap((c) =>
      c.orders
        .filter(
          (o) => o.payment?.status === "failed" && o.status !== "cancelled",
        )
        .map((o) => ({
          orderId: o.orderId,
          customerId: c.customerId,
          customerName: c.name,
          orderStatus: o.status,
          paymentStatus: o.payment?.status,
        })),
    );
  };

  // Q17 — Average rating per product (min 2 reviews)
  const getAverageRatingPerProduct = () => {
    productReviews = data.flatMap((c) => c.reviews);

    const grouped = Object.groupBy(
      productReviews,
      ({ productId }) => productId,
    );

    return Object.entries(grouped)
      .map(([productId, reviews]) => {
        const total = reviews.reduce((sum, r) => sum + r.rating, 0);
        const count = reviews.length;

        return {
          productId,
          avgRating: Math.round(total / count),
          reviewCount: count,
        };
      })
      .filter((i) => i.reviewCount >= 2);
  };

  return {
    // "Q17 — Average rating per product (min 2 reviews)": getAverageRatingPerProduct(),
    // "Q16 — Orders with payment failed but not cancelled": getOrdersWithPaymentFailedButNotCancelled(),
    // "Q14 — Top 5 customers by total spend": getTop5CustomerByTotalSpend(),
    // "Q13 — Total revenue per region (with discount)": getTotalRevenuePerRegion(),
    // "Q12 — Customers who left at least one review": customerListWithAtLeastOneReview,
    // "Q11 — Average number of items per order": averageNumberOfItemsPerOrder,
    // "Q10 — List payment methods used and how many times": paymentMethodCounts,
    // "Q9 — All orders placed in a specific month": getOrdersByMonth(2025, 4),
    // "Q8 — Count reviews per product": countReviewsPerProduct,
    // "Q7 — Find all cancelled orders": AllCancelledOrders,
    // "Q6 —  List all customers in a specific tier": getByTier("enterprise"),
    // "Q5 — Total number of items ever ordered": totalNumbersOfItemsOrdered,
    // "Q4 — Find customers with no orders": customerWithNoOrders,
    // "Q3 — Count orders by status": countOrdersByStatus,
    // "Q2 — List all unique product categories": listOfUniqueProductsCategories,
    // "Q1 — Count total customers per region": countTotalPerRegion,
  };
}

console.dir(answer(data), { depth: null });
