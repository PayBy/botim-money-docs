/* eslint-disable max-len */
import CryptoJS from "crypto-js";

// SECURITY: Private key should be loaded from environment variables or secure key management service
// NEVER hardcode private keys in source code
const PrivateKey = process.env.PAYBY_PRIVATE_KEY || '';

if (!PrivateKey) {
  console.warn('WARNING: PAYBY_PRIVATE_KEY environment variable is not set');
}

export async function encrypt(data) {
  if (!PrivateKey) {
    throw new Error('Private key not configured. Please set PAYBY_PRIVATE_KEY environment variable.');
  }

  let RSA
  if (typeof window === "undefined") {
    const JSEncrypt = require("jsencrypt").default;
    RSA = new JSEncrypt();
    RSA.setPrivateKey(PrivateKey);
  } else {
    let jsEncryptModule = await import("jsencrypt");
    RSA = new jsEncryptModule.JSEncrypt();
    RSA.setPrivateKey(PrivateKey);

  }
  return RSA.sign(JSON.stringify(data), CryptoJS.SHA256, "sha256");
}