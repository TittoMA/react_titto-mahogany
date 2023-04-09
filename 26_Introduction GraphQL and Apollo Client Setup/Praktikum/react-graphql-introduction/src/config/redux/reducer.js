import { productReducer } from './product/productSlice';
import { userReducer } from './user/userSlice';

const reducer = {
  product: productReducer,
  user: userReducer,
};

export default reducer;
