import { Container } from '@mui/material';

const Wrapper = (props: { children: JSX.Element; fullHeight?: boolean }) => {
  const { children, fullHeight = false } = props;

  return (
    <Container maxWidth="xl" sx={{ marginY: 3, height: fullHeight ? '100%' : 'auto' }}>
      {children}
    </Container>
  );
};

export default Wrapper;
