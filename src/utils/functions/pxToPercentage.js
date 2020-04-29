import { Dimensions } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const w = Dimensions.get('screen').width;

function scale(px) {
  const pxDivided = px / 2;
  const conversion = (pxDivided / w) * 100;

  const size = hp(conversion);

  return size + 'px';
}

export default scale;
