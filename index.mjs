import { jsx } from "react/jsx-runtime";
const plugin = ({ React, ui, icons, sdk }) => {
  const { useState, useEffect } = React;
  const { Sun, Moon } = icons;
  const KEY = "ph-theme";
  function ThemeToggle() {
    const [dark, setDark] = useState(() => localStorage.getItem(KEY) !== "light");
    useEffect(() => {
      const theme = dark ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem(KEY, theme);
    }, [dark]);
    return /* @__PURE__ */ jsx(ui.Cell, { onClick: () => setDark((d) => !d), children: dark ? /* @__PURE__ */ jsx(Sun, { size: 16 }) : /* @__PURE__ */ jsx(Moon, { size: 16 }) });
  }
  sdk.registerAction("darkmode.toggle", { node: /* @__PURE__ */ jsx(ThemeToggle, {}) });
  return { id: "plugin-darkmode", label: "Dark mode", version: "0.2.0" };
};
export {
  plugin as default
};
