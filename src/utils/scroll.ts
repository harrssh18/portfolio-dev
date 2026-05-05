export const scrollToHash = (hash: string) => {
  const target = document.querySelector(hash);
  target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
