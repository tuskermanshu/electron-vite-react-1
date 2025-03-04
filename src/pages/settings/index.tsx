// 主设置页面
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { DevelopmentSettings } from './tabs/DevelopmentSettings'
import { FriendsSettings } from './tabs/FriendsSettings'
import { GlobalSettings } from './tabs/GlobalSettings'
import { HearthstoneSettings } from './tabs/HearthstoneSettings'
import { OptimizationSettings } from './tabs/OptimizationSettings'
import { PackSettings } from './tabs/PackSettings'
import { SkinSettings } from './tabs/SkinSettings'

export function Settings() {
  return (
    <div className="h-full w-full overflow-y-auto">
      <div className="p-6 space-y-6 max-w-[1200px] mt-2">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">配置管理</h2>
        </div>

        <Tabs defaultValue="global" className="flex flex-col flex-1">
          <div className="border-b bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <TabsList className="flex w-full h-12 overflow-x-auto space-x-2 p-1 [&::-webkit-scrollbar]:hidden justify-start">
              <TabsTrigger
                value="global"
                className="flex-shrink-0 px-8 py-3 data-[state=active]:bg-background"
              >
                基础
              </TabsTrigger>
              <TabsTrigger
                value="development"
                className="flex-shrink-0 px-8 py-3 data-[state=active]:bg-background"
              >
                开发
              </TabsTrigger>
              <TabsTrigger
                value="friends"
                className="flex-shrink-0 px-8 py-3 data-[state=active]:bg-background"
              >
                好友
              </TabsTrigger>
              <TabsTrigger
                value="hearthstone"
                className="flex-shrink-0 px-8 py-3 data-[state=active]:bg-background"
              >
                炉石
              </TabsTrigger>
              <TabsTrigger
                value="optimization"
                className="flex-shrink-0 px-8 py-3 data-[state=active]:bg-background"
              >
                优化
              </TabsTrigger>
              <TabsTrigger
                value="pack"
                className="flex-shrink-0 px-8 py-3 data-[state=active]:bg-background"
              >
                开包
              </TabsTrigger>
              <TabsTrigger
                value="skin"
                className="flex-shrink-0 px-8 py-3 data-[state=active]:bg-background"
              >
                皮肤
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="flex-1 w-full mt-4">
            <TabsContent value="global" className="mt-0">
              <GlobalSettings />
            </TabsContent>
            <TabsContent value="development" className="mt-0">
              <DevelopmentSettings />
            </TabsContent>
            <TabsContent value="friends" className="mt-0">
              <FriendsSettings />
            </TabsContent>
            <TabsContent value="hearthstone" className="mt-0">
              <HearthstoneSettings />
            </TabsContent>
            <TabsContent value="optimization" className="mt-0">
              <OptimizationSettings />
            </TabsContent>
            <TabsContent value="pack" className="mt-0">
              <PackSettings />
            </TabsContent>
            <TabsContent value="skin" className="mt-0">
              <SkinSettings />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  )
}
