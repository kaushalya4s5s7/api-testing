const express = require("express");
const app = express();
const port = 3000;

app.get("/payment-status/:paymentRef", (req, res) => {
  const { paymentRef } = req.params;

  // Simulate payment status based on payment reference
  if (paymentRef === "success") {
    res.json({ status: "SUCCESS" });
  } else if (paymentRef === "fail") {
    res.json({ status: "FAILED" });
  } else {
    res.status(404).json({ error: "Payment reference not found" });
  }
});

app.listen(port, () => {
  console.log(`Mock API server running at http://localhost:${port}`);
});
