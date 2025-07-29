import { jsxs as e, jsx as o } from "react/jsx-runtime";
import { GoogleLogin as n } from "@react-oauth/google";
const p = ({ onSuccess: r, onError: i }) => /* @__PURE__ */ e("div", { style: {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "#fff",
  border: "1px solid #ccc",
  borderRadius: 8,
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  padding: 32,
  zIndex: 1e3,
  minWidth: 300,
  textAlign: "center"
}, children: [
  /* @__PURE__ */ o("h2", { children: "Sign in" }),
  /* @__PURE__ */ o(n, { onSuccess: r, onError: i })
] });
export {
  p as default
};
