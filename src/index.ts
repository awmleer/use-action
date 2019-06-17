import {useEffect, useRef} from 'react'

export function useAction(action: () => void | Function, deps: any[]) {
  const {current: data} = useRef({
    deps: undefined,
    cleanUp: undefined,
  })
  
  const execute = shouldExecute(data.deps, deps)
  if (execute) {
    if (data.cleanUp) data.cleanUp()
    data.deps = deps
    data.cleanUp = action()
  }
  
  useEffect(() => {
    if (data.cleanUp) data.cleanUp()
  }, [])
}

function shouldExecute(oldDeps: any[], deps: any[]): boolean {
  if (oldDeps === undefined || deps === undefined) return true
  for (let i of deps) {
    if (deps[i] !== oldDeps[i]) return true
  }
  return false
}
