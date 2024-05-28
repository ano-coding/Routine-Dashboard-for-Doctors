import { useState } from "react";
import { Switch } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ToggleButton({ isActive }) {
  const [enabled, setEnabled] = useState(() => isActive || false);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={classNames(
        enabled ? "border-darkOliveGreen-dark" : "border-darkslategray-100",
        "relative flex h-[21px] w-[36px] flex-shrink-0 cursor-pointer items-center rounded-full border-[1.5px] border-solid px-0.5 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-0",
      )}
    >
      <span
        aria-hidden="true"
        className={classNames(
          enabled
            ? "translate-x-[0.85rem] bg-darkOliveGreen-dark"
            : "translate-x-0 bg-darkslategray-100",
          "pointer-events-none inline-block h-4 w-4 transform rounded-full shadow ring-0 transition duration-200 ease-in-out",
        )}
      />
    </Switch>
  );
}
