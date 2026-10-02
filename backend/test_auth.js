const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { UserSchema } = require("./schemas/UserSchema");
const { UserModel } = require("./model/UserModel");

async function testAuth() {
  console.log("1. Testing UserSchema & UserModel export...");
  if (!UserModel || !UserSchema) {
    throw new Error("UserModel or UserSchema not exported properly");
  }
  console.log("   -> Schema & Model exported successfully.");

  console.log("2. Testing Password Hashing...");
  const rawPassword = "securePassword123";
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(rawPassword, salt);
  const isMatch = await bcrypt.compare(rawPassword, hashedPassword);
  const isFalseMatch = await bcrypt.compare("wrongPassword", hashedPassword);

  if (!isMatch || isFalseMatch) {
    throw new Error("Bcrypt comparison failed");
  }
  console.log("   -> Password hashing & comparison verified.");

  console.log("3. Testing JWT Token Sign & Verify...");
  const secret = "zerodha_secret_jwt_key_2026";
  const mockPayload = { id: "65e000000000000000000001", username: "abhinav", email: "abhinav@example.com" };
  const token = jwt.sign(mockPayload, secret, { expiresIn: "7d" });
  const decoded = jwt.verify(token, secret);

  if (decoded.username !== mockPayload.username || decoded.email !== mockPayload.email) {
    throw new Error("JWT payload mismatch");
  }
  console.log("   -> JWT creation and validation verified.");
  console.log("\nALL AUTH UNIT CHECKS PASSED SUCCESSFULLY!");
}

testAuth().catch((err) => {
  console.error("Auth test failed:", err);
  process.exit(1);
});
