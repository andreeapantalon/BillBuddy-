import React, { useState } from 'react';

function Dashboard() {
  const [bills, setBills] = useState([
    { id: 1, name: 'Electricity', amount: '$60', due: '2025-04-20' },
    { id: 2, name: 'Internet', amount: '$45', due: '2025-04-18' },
    { id: 3, name: 'Netflix', amount: '$15', due: '2025-04-25' },
  ]);

  const [newBill, setNewBill] = useState({
    name: '',
    amount: '',
    due: '',
  });

  // Delete bill
  const deleteBill = (id) => {
    const updatedBills = bills.filter(bill => bill.id !== id);
    setBills(updatedBills);
  };

  // Add new bill
  const addBill = (e) => {
    e.preventDefault();
    if (!newBill.name || !newBill.amount || !newBill.due) return;

    const newEntry = {
      id: bills.length + 1,
      ...newBill,
    };

    setBills([...bills, newEntry]);
    setNewBill({ name: '', amount: '', due: '' }); // reset form
  };

  // Update form state
  const handleChange = (e) => {
    setNewBill({ ...newBill, [e.target.name]: e.target.value });
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Your Dashboard</h1>

      {/* Bill Cards */}
      <div className="row">
        {bills.map((bill) => (
          <div className="col-md-4 mb-3" key={bill.id}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{bill.name}</h5>
                <p className="card-text">Amount: {bill.amount}</p>
                <p className="card-text">Due: {bill.due}</p>
                <button 
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteBill(bill.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Bill Form */}
      <h3 className="mt-5">Add a New Bill</h3>
      <form onSubmit={addBill} className="row g-3 mt-2">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Bill Name"
            value={newBill.name}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            name="amount"
            placeholder="Amount (e.g. $50)"
            value={newBill.amount}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-3">
          <input
            type="date"
            className="form-control"
            name="due"
            value={newBill.due}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-2">
          <button type="submit" className="btn btn-primary w-100">Add</button>
        </div>
      </form>
    </div>
  );
}

export default Dashboard;
