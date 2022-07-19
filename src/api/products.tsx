import type { IProduct } from "@/types/products";
import client from "./client";

export const getProducts = (): Promise<any> => {
  return client.get("/products");
};

export const getFilteredProducts = async (page = 0, group = "41") => {
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

  return products;
};
