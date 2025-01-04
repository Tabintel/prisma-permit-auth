import { Permit } from "permitio";

export const permit = new Permit({
  token: process.env.PERMIT_SDK_KEY,
});
