import { jsxs as r, jsx as e } from "react/jsx-runtime";
import { GoogleLogin as a } from "@react-oauth/google";
const d = ({ onSuccess: o, onError: i, mode: n = "light" }) => {
  const t = n === "dark";
  return /* @__PURE__ */ r("div", { style: {
    background: t ? "#232946" : "#f8fafc",
    borderRadius: 16,
    boxShadow: t ? "0 8px 32px rgba(0,0,0,0.38)" : "0 8px 32px rgba(0,0,0,0.18)",
    padding: "20px 32px 32px 32px",
    minWidth: 320,
    maxWidth: 360,
    width: "100%",
    textAlign: "center",
    border: "none",
    position: "relative",
    margin: "40px auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: t ? "#f4f4f4" : "#22223b"
  }, children: [
    /* @__PURE__ */ e("h2", { style: {
      marginBottom: 30,
      fontWeight: 700,
      fontSize: 28,
      color: t ? "#f4f4f4" : "#22223b",
      letterSpacing: "0.02em",
      fontFamily: "Montserrat, Segoe UI, Arial, sans-serif",
      textShadow: t ? "0 2px 8px rgba(0,0,0,0.28)" : "0 2px 8px rgba(0,0,0,0.08)"
    }, children: "Sign In" }),
    /* @__PURE__ */ e(a, { onSuccess: o, onError: i, text: "continue_with" })
  ] });
};
export {
  d as default
};
