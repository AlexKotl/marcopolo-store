import type { IProduct } from "@/types/products";
import client from "./client";

export const getProducts = (): Promise<any> => {
  return client.get("/products");
};

export const getFilteredProducts = async (page = 0, group = "41") => {
  const { data } = await getProducts();

  // helping array to track duplicated ids
  const ids: string[] = [];
  const products = data.products.reduce((prev: any, current: any): Array<IProduct> => {
    if (current.productGroup === group && ids.indexOf(current.id) === -1) {
      prev.push({
        id: current.id,
        title: current.articleDescription,
        quality: current.qualityName,
        // TEMP fix: as server returns incorrect images urls with 404 - set empty string to fallback to default image
        // image: p.image,
        image: "",
      } as IProduct);
      ids.push(current.id);
    }
    return prev;
  }, [] as Array<IProduct>);

  return products;
};

// this method not used, just to show different approach
export const getFilteredProductsLong = async (page = 0, group = "41") => {
  const { data } = await getProducts();

  // filter by group
  let products = data.products.filter((p: any) => p.productGroup === group);

  // remove duplicates with same id
  const ids: string[] = [];
  products = products.filter((p: any) => {
    if (ids.indexOf(p.id) !== -1) {
      return false;
    }
    ids.push(p.id);
    return true;
  });

  return products.map(
    (p: any): IProduct => ({
      id: p.id,
      title: p.articleDescription,
      quality: p.qualityName,
      // TEMP fix: as server returns incorrect images urls with 404 - set empty string to fallback to default image
      // image: p.image,
      image: "",
    }),
  );
};
