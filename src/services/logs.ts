export const logsService = {
  // 获取 BepInEx 日志
  async getBepInExLog() {
    return window.electron.ipcRenderer.invoke('logs:getBepInEx')
  },

  // 获取最近的 BepInEx 日志
  async getRecentBepInExLog() {
    return window.electron.ipcRenderer.invoke('logs:getRecentBepInEx')
  },

  // 获取皮肤日志
  async getSkinsLog() {
    return window.electron.ipcRenderer.invoke('logs:getSkins')
  },

  // 获取对局日志
  async getMatchLog() {
    return window.electron.ipcRenderer.invoke('logs:getMatch')
  },

  // 获取佣兵日志
  async getMercenariesLog() {
    return window.electron.ipcRenderer.invoke('logs:getMercenaries')
  },
}
