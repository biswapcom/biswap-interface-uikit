const formatSpacingAmount = (x: string | number): string | null => {
  if (x) {
    const parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");

    return parts.join(".");
  }

  return null;
};

export default formatSpacingAmount;
