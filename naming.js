function calculationTotalAmount(customerPurchases) {
    let totalAmount = 0;
    customerPurchases.forEach(num => {
      totalAmount += num;
    });
    return totalAmount;
  }
  
  let customerBestPurchases = [10000, 20000, 30000];
  console.log(calculationTotalAmount(customerBestPurchases));