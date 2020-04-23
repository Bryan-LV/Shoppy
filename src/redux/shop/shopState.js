import db from '../../db';
const shopState = {
  shop: [...db],
  visibleShop:[...db],
  itemsInCart:[]
}
export default shopState;