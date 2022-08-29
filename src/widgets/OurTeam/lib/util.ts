const getCardStyle = (index: number) => ({
  display: 'flex',
  flexDirection: { sm: 'column', md: index % 2 ? 'row-reverse' : 'row' },
});

export { getCardStyle };
