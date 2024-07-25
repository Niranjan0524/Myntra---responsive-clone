import {configureStore, createSlice} from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import FetchStatusSlice from "./FetchStatusSlice";
import bagSlice from "./BagSlice";
import menItemSlice from "./menItemsSlice";
import womenItemsSlice from "./womenItemsSlice";
import kidsItemsSlice from "./kidsItemsSlice";
import homeAndLivingSlice from "./homeAndLiving";
import WishList from "../routes/WishList";
import WishListSlice from "./WishListSlice";




const myntraStore=configureStore({reducer:{
    items:itemSlice.reducer,
    fetchStatus:FetchStatusSlice.reducer,
    bag:bagSlice.reducer,
    mensItems:menItemSlice.reducer,
    womenItems:womenItemsSlice.reducer,
    kidsItems:kidsItemsSlice.reducer,
    homeAndLiving:homeAndLivingSlice.reducer,
    wishList:WishListSlice.reducer,

}

})

export default myntraStore;