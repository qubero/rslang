import { Container } from '@mui/material';
import WrapperBackground from './WrapperBackground';

const Wrapper = (props: { children: JSX.Element; fullHeight?: boolean }) => {
  const { children, fullHeight = false } = props;

  return (
    <>
      {!fullHeight && <WrapperBackground />}
      <Container maxWidth="xl" sx={{ marginY: 3, height: fullHeight ? '100%' : 'auto' }}>
        {children}
      </Container>
    </>
  );
};

export default Wrapper;
