export interface UserModel {
  access_token: string;
  email: string;
  id: string;
  type: string;
  username: string;
}

export interface PluginModel {
  id: string;
  name: string;
  description: string;
  content: string;
  category_id: string;
  version: string;
  tags: string[];
  related_content: {
    title: string;
    link: string;
  }[];
  logo_addr: string;
  file: string;
  created_at: string;
  updated_at: string;
  downloads: number;
  creator_id: string;
  creator_user: string;
  creator_email: string;
  category_title: string;
}

export interface ZustandStore {
  user: UserModel;
  setUser: (data: UserModel) => void;
  plugin: PluginModel;
  setPlugin: (data: PluginModel) => void;
}
