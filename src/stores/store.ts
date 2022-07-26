import { defineStore } from "pinia";
import type { IProduct } from "@/types/products";

// better to use multiple stores, but we will use only one for our purposes

export const useStore = defineStore({
  id: "store",
  state: () => ({
    wishlist: [] as Array<IProduct>,
    basket: [] as Array<IProduct>,
    searchQueryText: "",
    showBasket: false,
  }),
  getters: {
    wishlistCount: (state) => state.wishlist.length,
    basketCount: (state) => state.basket.length,
    getBasket: (state) => state.basket,
    searchQuery: (state) => state.searchQueryText,
    isShowBasket: (state) => state.showBasket,
  },
  actions: {
    addWishlist(product: IProduct) {
      this.wishlist.push(product);
    },
    addBasket(product: IProduct) {
      this.basket.push(product);
    },
    removeWishlist(product: IProduct) {
      this.wishlist = this.wishlist.filter((p: IProduct) => p.id !== product.id);
    },
    setSearchQuery(query: string) {
      this.searchQueryText = query;
    },
    setShowBasket(show: boolean) {
      this.showBasket = show;
    },
  },
});
