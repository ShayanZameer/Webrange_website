export const handleCopy = (code, setCopied) => {
  navigator.clipboard
    .writeText(code)
    .then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
};
