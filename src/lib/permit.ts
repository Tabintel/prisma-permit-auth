import { Permit } from "permitio";

export const permit = new Permit({
  token: process.env.PERMIT_SDK_KEY,
  pdp: "https://cloudpdp.api.permit.io",
  // Adding debug mode to see detailed logs
  //debug: true
});
