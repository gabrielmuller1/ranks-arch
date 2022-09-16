import { Express } from "express";
import { readdirSync } from "fs";

export const setupRoutes = (app: Express): void => {
  readdirSync(`${__dirname}/../routes`).map(async (filename) => {
    await import(`../routes/${filename}`);
  });
};
