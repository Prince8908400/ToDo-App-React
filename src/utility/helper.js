export const makeShortText = (text) => {
  if (text.length > 85) {
    return text.substring(0, 85) + "...";
  }
  return text;
};

export const formattedDate = (dateString) => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
};
