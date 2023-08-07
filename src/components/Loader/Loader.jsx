import { Circles } from 'react-loader-spinner';
import css from './Loader.module.css';

export function Loader() {
  return (
    <Circles
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="circles_loading"
      wrapperStyle={{}}
      visible={true}
      wrapperClass={css.loader}
    />
  );
}
