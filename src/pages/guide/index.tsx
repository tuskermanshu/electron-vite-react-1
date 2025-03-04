import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AlertCircle } from 'lucide-react'

interface HelpDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function HelpDialog({ open, onOpenChange }: HelpDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[680px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>帮助文档</DialogTitle>
          <DialogDescription>
            安装指南和使用说明
          </DialogDescription>
        </DialogHeader>

        <InstallGuide />
      </DialogContent>
    </Dialog>
  )
}

function InstallGuide() {
  return (
    <div className="space-y-4">
      <Tabs defaultValue="windows" className="space-y-4">
        <TabsList className="w-full flex">
          <TabsTrigger value="windows" className="flex-1 px-3 py-1.5">Windows</TabsTrigger>
          <TabsTrigger value="mac" className="flex-1 px-3 py-1.5">macOS</TabsTrigger>
        </TabsList>

        <TabsContent value="windows" className="space-y-4 max-w-[600px]">
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">1. 安装 BepInEx</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>
                  从
                  <a href="https://github.com/BepInEx/BepInEx/releases/download/v5.4.23.2/BepInEx_linux_x64_5.4.23.2.zip" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">BepInEx Releases</a>
                  {' '}
                  下载 BepInEx_x86_5.4.23.2.zip 并解压到炉石传说根目录 (Hearthstone\)
                </li>
              </ul>
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>注意</AlertTitle>
                <AlertDescription>
                  请下载 5.4.23.2 版本，不要下载 6.0.0 预览版，因为 6.0.0 版本与现有插件不兼容
                </AlertDescription>
              </Alert>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">2. 配置依赖库</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>创建目录 Hearthstone\BepInEx\unstripped_corlib\</li>
                <li>将项目目录 HsMod/UnstrippedCorlib 下的所有 dll 复制到 unstripped_corlib 目录</li>
                <li>修改 Hearthstone\doorstop_config.ini，将 dllSearchPathOverride= 替换为 dllSearchPathOverride=BepInEx\unstripped_corlib</li>
              </ul>
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>注意</AlertTitle>
                <AlertDescription>
                  在 BepInEx 5.4.23.2 中，修改 Hearthstone\doorstop_config.ini，将 dll_search_path_override = 替换为 dll_search_path_override = BepInEx\unstripped_corlib corlib
                </AlertDescription>
              </Alert>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">3. 安装 HsMod</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>编译 HsMod 或从 Releases 下载 HsMod.dll</li>
                <li>将 HsMod.dll 存放在 Hearthstone\BepInEx\plugins 目录下</li>
              </ul>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="mac" className="space-y-4 max-w-[600px]">
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">1. 安装 BepInEx</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>
                  从
                  <a href="https://github.com/BepInEx/BepInEx/releases/download/v5.4.23.2/BepInEx_macos_x64_5.4.23.2.zip" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">BepInEx Releases</a>
                  {' '}
                  下载 BepInEx_macos_x64_5.4.23.2.zip 并解压到炉石传说根目录 (Hearthstone\)
                </li>
              </ul>
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>注意</AlertTitle>
                <AlertDescription>
                  请下载 5.4.23.2 版本，不要下载 6.0.0 预览版，因为 6.0.0 版本与现有插件不兼容
                </AlertDescription>
              </Alert>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">2. 配置依赖库</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>下载原始的 Mono 和 Unity 库并解压到 Hearthstone/BepInEx/unstripped_corlib</li>
                <li>编辑 run_bepinex.sh 文件：</li>
                <li className="ml-4">将 dll_search_path_override="" 替换为 dll_search_path_override="BepInEx/unstripped_corlib"</li>
                <li className="ml-4">将 executable_name="" 替换为 executable_name="Hearthstone.app"</li>
                <li>运行命令：chmod u+x run_bepinex.sh</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">3. 安装 HsMod</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>下载 HsMod Releases 并解压到 Hearthstone/BepInEx/plugins</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">4. 获取 Token</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>从登录 URL 中获取 Token（位于 http://localhost:0/?ST= 之后，&accountId= 之前）</li>
              </ul>
              <div className="mt-2 space-y-1 text-sm">
                <p className="font-medium">登录地址：</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li><a href="https://account.battlenet.com.cn/login/zh-cn/?app=wtcg" target="_blank" rel="noopener noreferrer" className="hover:underline">国服 - https://account.battlenet.com.cn/login/zh-cn/?app=wtcg</a></li>
                  <li><a href="https://us.battle.net/login/en/?app=wtcg" target="_blank" rel="noopener noreferrer" className="hover:underline">美服 - https://us.battle.net/login/en/?app=wtcg</a></li>
                  <li><a href="https://tw.battle.net/login/zh/?app=wtcg" target="_blank" rel="noopener noreferrer" className="hover:underline">台服 - https://tw.battle.net/login/zh/?app=wtcg</a></li>
                  <li><a href="https://kr.battle.net/login/zh/?app=wtcg" target="_blank" rel="noopener noreferrer" className="hover:underline">韩服 - https://kr.battle.net/login/zh/?app=wtcg</a></li>
                  <li><a href="https://eu.battle.net/login/zh/?app=wtcg" target="_blank" rel="noopener noreferrer" className="hover:underline">欧服 - https://eu.battle.net/login/zh/?app=wtcg</a></li>
                </ul>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">5. 配置客户端（可选）</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>创建 client.config 文件，内容如下：</li>
                <pre className="mt-2 p-2 bg-muted rounded-md text-xs">
                  {`[Config]
Version = 3
[Aurora]
VerifyWebCredentials = "TOKEN"
ClientCheck = 0
Env.Override = 1
Env = us.actual.battle.net`}
                </pre>
                <li className="mt-2">注意：Env 值格式为 xx.actual.battle.net（中国区为 cn.actual.battlenet.com.cn）；xx 与 token 前两个字符相同</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">6. 启动游戏</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>使用以下命令启动：</li>
                <li className="ml-4">带 Token：./run_bepinex.sh TOKEN</li>
                <li className="ml-4">使用配置文件：./run_bepinex.sh（需要 client.config）</li>
              </ul>
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>提示</AlertTitle>
                <AlertDescription>
                  如果 token 过期导致游戏无法打开，只需要在 client.config 中更新 token 即可
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
