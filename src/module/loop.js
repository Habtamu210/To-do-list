import array from './array.js';
import display from './show.js';

const fass = () => {
  const master = document.querySelector('#list');
  const k = 100;
  for (let i = 1; i < k; i += 1) {
    array.map((ar) => (
      ar.index === i && display(ar, master)
    ));
  }
};
export default fass;
