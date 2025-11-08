import KeyboardRow from "./KeyboardRow"
import tab from "../assets/keys/tab.svg"
import deleteSvg from "../assets/keys/delete.svg"
import capslock from "../assets/keys/capslock.svg"
import enter from "../assets/keys/enter.svg"
import shift from "../assets/keys/shift.svg"
import cmd from "../assets/keys/cmd.svg"
import alt from "../assets/keys/alt.svg"
import ctrl from "../assets/keys/ctrl.svg"

const Icon = ({
  icon,
  alt,
  className,
}: {
  icon: string
  alt: string
  className?: string
}) => <img src={icon} alt={alt} className={`w-4 object-contain ${className}`} />

const TabIcon = () => <Icon icon={tab} alt="Tab" />
const DeleteIcon = () => <Icon icon={deleteSvg} alt="Delete" />
const CapsLockIcon = () => <Icon icon={capslock} alt="CapsLock" />
const EnterIcon = () => <Icon icon={enter} alt="Enter" />
const ShiftIcon = () => <Icon icon={shift} alt="Shift" />
const CmdIcon = () => <Icon icon={cmd} alt="Command" />
const AltIcon = () => <Icon className="w-1" icon={alt} alt="Alt" />
const CtrlIcon = () => <Icon className="w-1" icon={ctrl} alt="Control" />

const layout: KeyProp[][] = [
  [
    { key: "Tab", label: <TabIcon /> },
    { key: "Q", label: "Q" },
    { key: "W", label: "W" },
    { key: "E", label: "E" },
    { key: "R", label: "R" },
    { key: "T", label: "T" },
    { key: "Y", label: "Y" },
    { key: "U", label: "U" },
    { key: "I", label: "I" },
    { key: "O", label: "O" },
    { key: "P", label: "P" },
    { key: "[", label: "[" },
    { key: "]", label: "]" },
    { key: "Backspace", label: <DeleteIcon /> },
  ],
  [
    { key: "CapsLock", label: <CapsLockIcon /> },
    { key: "A", label: "A" },
    { key: "S", label: "S" },
    { key: "D", label: "D" },
    { key: "F", label: "F" },
    { key: "G", label: "G" },
    { key: "H", label: "H" },
    { key: "J", label: "J" },
    { key: "K", label: "K" },
    { key: "L", label: "L" },
    { key: ";", label: ";" },
    { key: "'", label: "'" },
    { key: "Slash", label: "\\" },
    { key: "Enter", label: <EnterIcon /> },
  ],
  [
    { key: "ShiftLeft", label: <ShiftIcon /> },
    { key: "Backquote", label: "`" },
    { key: "Z", label: "Z" },
    { key: "X", label: "X" },
    { key: "C", label: "C" },
    { key: "V", label: "V" },
    { key: "B", label: "B" },
    { key: "N", label: "N" },
    { key: "M", label: "M" },
    { key: ",", label: "," },
    { key: ".", label: "." },
    { key: "/", label: "/" },
    { key: "ShiftRight", label: <ShiftIcon /> },
  ],
  [
    { key: "Fn", label: "Fn" },
    { key: "ControlLeft", label: <CtrlIcon /> },
    { key: "AltLeft", label: <AltIcon /> },
    { key: "MetaLeft", label: <CmdIcon /> },
    { key: "Space", label: "" },
    { key: "MetaRight", label: <CmdIcon /> },
    { key: "AltRight", label: <AltIcon /> },
    { key: "ControlRight", label: <CtrlIcon /> },
  ],
]

export type KeyProp = {
  key: string
  label: string | React.ReactNode
}

const Keyboard = () => {
  return (
    <div className="p-3 w-full gap-2 flex flex-col bg-gray-100">
      {layout.map((row, rowIndex) => {
        return <KeyboardRow key={rowIndex} row={row} />
      })}
    </div>
  )
}

export default Keyboard
