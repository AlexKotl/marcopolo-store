import client from "./client";

export const getProducts = (): Promise<any> => {
  return client.get("/products");
};
