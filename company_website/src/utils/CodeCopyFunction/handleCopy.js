// export const handleCopy = (code, setCopied) => {
//   navigator.clipboard
//     .writeText(code)
//     .then(() => {
//       setCopied(true);
//       setTimeout(() => {
//         setCopied(false);
//       }, 2000);
//     })
//     .catch((err) => {
//       console.error("Failed to copy text: ", err);
//     });
// };

export const handleCopy = (code, setCopied, index) => {
  navigator.clipboard
    .writeText(code)
    .then(() => {
      setCopied((prev) => ({ ...prev, [index]: true }));
      setTimeout(() => {
        setCopied((prev) => ({ ...prev, [index]: false }));
      }, 2000);
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
};
