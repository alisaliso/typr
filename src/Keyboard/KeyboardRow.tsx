import type { KeyProp } from "."
import { useTypeStore } from "../store/typing"
import Key from "./Key"

const KeyboardRow = ({ row }: { row: KeyProp[] }) => {
  const { lastTypedKey } = useTypeStore()

  return (
    <div className="flex gap-1">
      {row.map((key) => {
        return (
          <Key
            isPressed={key.key.toLowerCase() === lastTypedKey?.toLowerCase()}
            key={key.key}
            keyItem={key}
          />
        )
      })}
    </div>
  )
}

export default KeyboardRow
