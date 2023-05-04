const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	 const prices = document.querySelectorAll('.price');
  let totalPrice = 0;
  prices.forEach(price => {
    totalPrice += parseFloat(price.textContent);
  });
  const totalRow = document.createElement('tr');
  const totalCell = document.createElement('td');
  totalCell.colSpan = 2;
  totalCell.textContent = `Total: ${totalPrice.toFixed(2)}`;
  totalRow.appendChild(totalCell);
  document.querySelector('tbody').appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);

