const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	 const price = document.querySelectorAll('.price');
  let totalPrice = 0;
  price.forEach(price => {
    totalPrice += parseFloat(price.textContent);
  });
  const totalRow = document.createElement('tr');
  const totalCell = document.createElement('td');
  totalCell.colSpan = 2;
  totalCell.textContent = `Total: ${totalPrice}`;
  totalRow.appendChild(totalCell);
  document.querySelector('tbody').appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);

