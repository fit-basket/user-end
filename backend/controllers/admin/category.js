const categoryModal = require("../../models/admin/category");

const getCategory = async (req, res) => {
  try {
    const { businessId } = req.query;
    const categories = await categoryModal.find({ businessId });

    if (!categories || categories.length === 0) {
      return res.status(200).json({
        success: false,
        message: "Categories not found for the specified businessId.",
      });
    }

    res.status(200).json({ success: true, data: categories });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message || "Internal server error",
    });
  }
};

const addCategory = async (req, res) => {
  const category = req.body;
  const result = await categoryModal.create(category);

  res.status(200).json({
    success: true,
    data: result,
    message: "Category added successfully",
  });
};

module.exports = { getCategory, addCategory };
