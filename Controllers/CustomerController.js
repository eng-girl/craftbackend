const Customer = require('../Models/CustomerSchema');

// Create customer profile

// Get customer details

exports.getCustomerByUserId = async (req, res) => {
  try {
    const { userId } = req.params; // Get userId from request parameters

    // Find the customer by user ID
    const customer = await Customer.findOne({ user: userId })
      .populate('user') // Optional: populate the user details if needed
      .populate('cart.productId') // Optional: populate product details in the cart
      .populate('orders'); // Optional: populate order details

    if (!customer) {
      return res.status(404).json({
        status: 'fail',
        message: 'Customer not found',
      });
    }

    res.status(200).json({
      status: 'success',
      data: {
        customer,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


//customer by it id 

exports.getCustomerById = async (req, res) => {
  try {
    const { customerId } = req.params;

    const customer = await Customer.findById(customerId)
      .populate('user') // Optional: populate user details
      .populate('cart.productId') // Optional: populate product details in the cart
      .populate('orders'); // Optional: populate order details

    if (!customer) {
      return res.status(404).json({
        status: 'fail',
        message: 'Customer not found',
      });
    }

    res.status(200).json({
      status: 'success',
      data: {
        customer,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

