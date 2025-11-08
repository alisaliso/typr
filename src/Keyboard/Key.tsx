import type { KeyProp } from "."

const keySize: Record<KeyProp["key"], string> = {
  CapsLock: "flex-[1.75]",
  ShiftLeft: "flex-[1.35]",
  ShiftRight: "flex-[2.35]",
  Enter: "flex-[2.25]",
  Space: "flex-[6]",
  Backspace: "flex-[1]",
  Tab: "flex-[1.5]",
  MetaLeft: "flex-[1.25]",
  MetaRight: "flex-[1.25]",
}

const Key = ({
  keyItem,
  isPressed,
}: {
  keyItem: KeyProp
  isPressed: boolean
}) => {
  const hasNub = ["F", "J"].includes(keyItem.key)

  return (
    <div
      className={`bg-gray-300 flex-1 flex justify-center items-center h-12 relative ${
        keySize[keyItem.key] || "flex-1"
      } ${
        isPressed
          ? "border-4 animate-fadeUp"
          : "border-l-4 border-l-white border-t-4 border-t-white border-b-4 border-b-gray-900 border-r-4 border-r-gray-900 transition-all duration-1000"
      }`}
    >
      {keyItem.label}
      {hasNub && (
        <div className="w-4 h-1 bg-gray-400 rounded-full absolute top-[80%] left-1/2 -translate-x-1/2"></div>
      )}
    </div>
  )
}

export default Key
