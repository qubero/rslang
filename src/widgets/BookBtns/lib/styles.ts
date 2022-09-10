import { themeColor } from 'widgets/BookHeader/lib/styles';

const speedDialStyle = {
  transform: 'translateZ(0px)',
  flexGrow: 1,
  position: 'absolute',
  top: '0',
  right: '50px',
};
const dialIconStyle = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  display: 'flex',
  height: 'auto',
};
const soundBtnStyle = (group: string) => ({
  color: `#${themeColor[Number(group)]}`,
  p: '5px',
  width: '45px',
  height: '45px',
  backgroundColor: 'white',
});
export { speedDialStyle, dialIconStyle, soundBtnStyle };
