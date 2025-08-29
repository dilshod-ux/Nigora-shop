let debts = JSON.parse(localStorage.getItem("debts")) || [];

function renderDebts() {
  const debtList = document.getElementById("debtList");
  debtList.innerHTML = "";
  let total = 0;

  debts.forEach((d, i) => {
    total += d.amount;

    let row = `
      <tr>
        <td>${d.fname}</td>
        <td>${d.lname}</td>
        <td>${d.phone}</td>
        <td>${d.amount} so'm</td>
        <td><button onclick="deleteDebt(${i})">❌</button></td>
      </tr>
    `;
    debtList.innerHTML += row;
  });

  document.getElementById("totalDebt").innerText = total.toLocaleString();
}

function deleteDebt(index) {
  debts.splice(index, 1);
  localStorage.setItem("debts", JSON.stringify(debts));
  renderDebts();
}

document.getElementById("debtForm").addEventListener("submit", (e) => {
  e.preventDefault();

  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let phone = document.getElementById("phone").value;
  let amount = parseFloat(document.getElementById("amount").value);

  debts.push({ fname, lname, phone, amount });
  localStorage.setItem("debts", JSON.stringify(debts));

  e.target.reset();
  renderDebts();
});

// dastlab sahifani yuklash
renderDebts();