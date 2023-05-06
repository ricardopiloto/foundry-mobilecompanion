export interface Worlds {
    title: string
    description: string
    version: string
    system: string
    background: string
    coreVersion: string
    resetKeys: boolean
    safeMode: boolean
    systemVersion: string
    id: string
    compatibility: Compatibility
  }
  
  export interface Compatibility {
    verified: string
    minimum: string
  }
  