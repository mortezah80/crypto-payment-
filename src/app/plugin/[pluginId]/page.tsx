import WebsiteLayout from "@/components/layout/website";
import PluginLayout from "@/components/layout/plugin";
import { authServiceHandler } from "@/api/auth.service";
import PluginContent from "@/components/layout/plugin/PluginContent";

const SinglePluginPage = async ({
  params,
}: {
  params: { pluginId: string };
}) => {
  const data =
    params?.pluginId === "preview"
      ? null
      : (await authServiceHandler.getPlugin(params?.pluginId))?.data?.data;

  return (
    <WebsiteLayout>
      <PluginLayout>
        <PluginContent pluginData={data} />
      </PluginLayout>
    </WebsiteLayout>
  );
};

export default SinglePluginPage;
