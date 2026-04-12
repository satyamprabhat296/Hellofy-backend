import Razorpay from "razorpay";

export const getRazorpayInstance = () => {
  if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
    throw new Error("Razorpay keys missing in environment variables");
  }

  return new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });
<<<<<<< HEAD
};
=======
};
>>>>>>> 5a2c20c31d8bae025e7bf64cf37fc1e9ddb302a4
