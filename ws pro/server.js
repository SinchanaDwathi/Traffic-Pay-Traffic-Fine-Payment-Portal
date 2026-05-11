const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3000;

/* ===============================
   🔹 IN-MEMORY DATA
================================*/
let fines = [
  {
    id: "F001",
    vehicle: "KA01AB1234",
    vehicleType: "Bike",
    violation: "No Helmet",
    amount: 500,
    status: "UNPAID",
    date: "2026-04-20",
    location: "Mysore"
  },
  {
    id: "F002",
    vehicle: "KA01AB1234",
    vehicleType: "Bike",
    violation: "Signal Jump",
    amount: 1000,
    status: "UNPAID",
    date: "2026-04-21",
    location: "Bangalore"
  },
  {
    id: "F003",
    vehicle: "KA05XY9999",
    vehicleType: "Car",
    violation: "Over Speed",
    amount: 1500,
    status: "UNPAID",
    date: "2026-04-18",
    location: "Highway"
  }
];

/* ===============================
   🚗 GET FINES (MATCHES FRONTEND)
================================*/
app.get("/getFines/:vehicle", (req, res) => {
  const vehicle = req.params.vehicle.toUpperCase();

  const result = fines.filter(f => f.vehicle === vehicle);

  if (result.length === 0) {
    return res.json({
      success: false,
      message: "No fines found for this vehicle"
    });
  }

  res.json({
    success: true,
    fines: result
  });
});

/* ===============================
   💳 MOCK PAYMENT SERVICE
================================*/
function processPayment(amount) {
  return {
    status: "SUCCESS",
    transactionId: "TXN" + Date.now()
  };
}

/* ===============================
   💳 PAY FINE (MATCHES FRONTEND)
================================*/
app.post("/payFine", (req, res) => {
  const { fineId } = req.body;

  // BUG FIX 1: Validate that fineId was actually provided in the request body
  if (!fineId) {
    return res.status(400).json({
      success: false,
      message: "fineId is required"
    });
  }

  const fine = fines.find(f => f.id === fineId);

  if (!fine) {
    return res.status(404).json({
      success: false,
      message: "Fine not found"
    });
  }

  if (fine.status === "PAID") {
    return res.json({
      success: false,
      message: "Fine already paid"
    });
  }

  // Step 1: Payment
  const payment = processPayment(fine.amount);

  if (payment.status === "SUCCESS") {
    // Step 2: Update fine
    fine.status = "PAID";
    fine.transactionId = payment.transactionId;
    fine.paidAt = new Date();

    // Step 3: Send receipt (IMPORTANT)
    return res.json({
      success: true,
      receipt: {
        vehicle: fine.vehicle,
        vehicleType: fine.vehicleType,
        violation: fine.violation,
        amount: fine.amount,
        // BUG FIX 2: Include location in receipt so frontend can display it
        location: fine.location,
        transactionId: fine.transactionId,
        paidAt: fine.paidAt
      }
    });
  }

  res.status(400).json({
    success: false,
    message: "Payment failed"
  });
});

/* ===============================
   🚀 START SERVER
================================*/
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});