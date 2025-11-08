import { create } from "zustand"

type TypeState = {
  typedKeys: string[]
  lastTypedKey?: string
  addTypedKey: (key: string) => void
  removeLastTypedKey: () => void
  removeAllTypedKeys: () => void
  updateTypedKeys: (newTypedKeys: string[]) => void
  getLastTypedKey: () => string | undefined
  setLastTypedKey: (key: string) => void
}

export const useTypeStore = create<TypeState>((set, get) => ({
  typedKeys: [],
  addTypedKey: (key) =>
    set((state) => ({ typedKeys: [...state.typedKeys, key] })),
  removeLastTypedKey: () =>
    set((state) => ({ typedKeys: state.typedKeys.slice(0, -1) })),
  removeAllTypedKeys: () => set({ typedKeys: [] }),
  updateTypedKeys: (newTypedKeys) => set({ typedKeys: newTypedKeys }),
  getLastTypedKey: () => get().typedKeys.slice(-1)[0],
  setLastTypedKey: (key) => set({ lastTypedKey: key }),
}))
