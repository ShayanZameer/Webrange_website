// export const handleCopy = (code, setCopied, index) => {
//   navigator.clipboard
//     .writeText(code)
//     .then(() => {
//       setCopied((prev) => ({ ...prev, [index]: true }));
//       setTimeout(() => {
//         setCopied((prev) => ({ ...prev, [index]: false }));
//       }, 2000);
//     })
//     .catch((err) => {
//       console.error("Failed to copy text: ", err);
//     });
// };

// handleCopy.js
export const handleCopy = (code, setCopied, index) => {
  try {
    navigator.clipboard.writeText(code); // Copies the code to clipboard
    setCopied((prev) => ({
      ...prev,
      [index]: true, // Sets the copied state for the specific code block
    }));

    // Optionally, you can log or display a confirmation message.
    console.log("Code copied!");
  } catch (error) {
    console.error("Copy failed: ", error);
  }
};
