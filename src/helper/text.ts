export const truncateText = (text: string, length: number = 20) => {
  const substringText = text.substring(0, length);
  return text.length > length ? `${substringText}...` : text;
};
