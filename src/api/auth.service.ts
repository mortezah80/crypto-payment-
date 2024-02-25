import { AxiosResponse } from "axios";
import { BaseService } from "./base.service";
import { ApiResponse } from "@/models/api-response.model";

class AuthService extends BaseService {
  publishBlog(data: File, blog: any): Promise<AxiosResponse<ApiResponse<any>>> {
    const bodyFormData = new FormData();
    bodyFormData.append("blog", JSON.stringify(blog));
    bodyFormData.append("file", data);
    return this.axiosInstanceWithToken.post(`/blog/`, bodyFormData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  login(data: { identity: string; password: String }): Promise<
    AxiosResponse<
      ApiResponse<{
        access_token: string;
        email: string;
        id: string;
        type: string;
        username: string;
      }>
    >
  > {
    return this.axiosInstanceWithoutToken.post(`/auth/login`, data);
  }

  register(data: any): Promise<AxiosResponse<ApiResponse<any>>> {
    return this.axiosInstanceWithoutToken.post(`/auth/signup`, data);
  }

  addAdmin(data: any): Promise<AxiosResponse<ApiResponse<any>>> {
    return this.axiosInstanceWithToken.post(`/admin/`, data);
  }

  editAdmin(id: any, data: any): Promise<AxiosResponse<ApiResponse<any>>> {
    return this.axiosInstanceWithToken.patch(`/admin/${id}`, data);
  }

  removeAdmin(id: any): Promise<AxiosResponse<ApiResponse<any>>> {
    return this.axiosInstanceWithToken.delete(`/admin/${id}`);
  }

  blogCategory(data: any): Promise<AxiosResponse<ApiResponse<any>>> {
    return this.axiosInstanceWithoutToken.get(`/blog-category/`, data);
  }

  addBlogCategory(
    category: any,
    file: File
  ): Promise<AxiosResponse<ApiResponse<any>>> {
    const bodyFormData = new FormData();
    bodyFormData.append("category", JSON.stringify(category));
    bodyFormData.append("file", file);
    return this.axiosInstanceWithToken.post(`/blog-category/`, bodyFormData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  editBlogCategory(
    categoryId: string,
    req: any,
    file?: File
  ): Promise<AxiosResponse<ApiResponse<any>>> {
    const bodyFormData = new FormData();
    bodyFormData.append("req", JSON.stringify(req));
    file && bodyFormData.append("file", file);
    return this.axiosInstanceWithToken.patch(
      `/blog-category/${categoryId}`,
      bodyFormData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  }

  deleteBlogCategory(
    categoryId: string
  ): Promise<AxiosResponse<ApiResponse<any>>> {
    return this.axiosInstanceWithToken.delete(`/blog-category/${categoryId}`);
  }

  getBlogCategoryCover(
    image_addr: string
  ): Promise<AxiosResponse<ApiResponse<any>>> {
    return this.axiosInstanceWithToken(`/blog-category/cover/${image_addr}`);
  }

  blogs(data: any): Promise<AxiosResponse<ApiResponse<any>>> {
    return this.axiosInstanceWithoutToken.get(`/blog/`, { params: data });
  }

  blogPost(data: any): Promise<AxiosResponse<ApiResponse<any>>> {
    return this.axiosInstanceWithoutToken.get(`/blog/${data}`);
  }

  editBlog(
    blogId: string,
    req: any,
    file?: any
  ): Promise<AxiosResponse<ApiResponse<any>>> {
    const bodyFormData = new FormData();
    bodyFormData.append("req", JSON.stringify(req));
    file && bodyFormData.append("file", file);
    return this.axiosInstanceWithToken.patch(`/blog/${blogId}`, bodyFormData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  deleteBlog(data: any): Promise<AxiosResponse<ApiResponse<any>>> {
    return this.axiosInstanceWithToken.delete(`/blog/${data}`);
  }

  blogChart(data: any): Promise<AxiosResponse<ApiResponse<any>>> {
    return this.axiosInstanceWithToken.get(`/blog/view-chart/`, {
      params: data,
    });
  }

  users(data: any): Promise<AxiosResponse<ApiResponse<any>>> {
    return this.axiosInstanceWithToken.get(`/user/`, { params: data });
  }

  usersCount(): Promise<AxiosResponse<ApiResponse<any>>> {
    return this.axiosInstanceWithToken.get(`/user/count/`);
  }

  loginChart(data: any): Promise<AxiosResponse<ApiResponse<any>>> {
    return this.axiosInstanceWithToken.get(`/user/login-chart/`, {
      params: data,
    });
  }

  registrationChart(data: any): Promise<AxiosResponse<ApiResponse<any>>> {
    return this.axiosInstanceWithToken.get(`/user/registration-chart/`, {
      params: data,
    });
  }

  adminCount(): Promise<AxiosResponse<ApiResponse<any>>> {
    return this.axiosInstanceWithToken.get(`/admin/count/`);
  }

  admins(data: any): Promise<AxiosResponse<ApiResponse<any>>> {
    return this.axiosInstanceWithToken.get(`/admin/`, { params: data });
  }

  getTicketChart(data: any): Promise<AxiosResponse<ApiResponse<any>>> {
    return this.axiosInstanceWithToken.get(`/ticket/ticket-chart/`, data);
  }

  getTickets(data: any): Promise<AxiosResponse<ApiResponse<any>>> {
    return this.axiosInstanceWithToken.get(`/ticket/`, { params: data });
  }

  getTicket(data: any): Promise<AxiosResponse<ApiResponse<any>>> {
    return this.axiosInstanceWithToken.get(`/ticket/${data}`);
  }

  closeTicket(data: any): Promise<AxiosResponse<ApiResponse<any>>> {
    return this.axiosInstanceWithToken.get(`/ticket/close/${data}`);
  }

  createTicket(data: any): Promise<AxiosResponse<ApiResponse<any>>> {
    return this.axiosInstanceWithToken.post(`/ticket/`, data);
  }

  replyTicket(data: any): Promise<AxiosResponse<ApiResponse<any>>> {
    return this.axiosInstanceWithToken.post(`/ticket/reply/`, null, {
      params: data,
    });
  }

  editUser(userId: any, data: any): Promise<AxiosResponse<ApiResponse<any>>> {
    return this.axiosInstanceWithToken.patch(`/user/${userId}`, data);
  }

  deleteUser(data: any): Promise<AxiosResponse<ApiResponse<any>>> {
    return this.axiosInstanceWithToken.delete(
      `/user/registration-chart/${data.id}`
    );
  }

  getPlugins(data: any): Promise<AxiosResponse<ApiResponse<any>>> {
    return this.axiosInstanceWithoutToken.get(`/plugin/`, { params: data });
  }

  getPlugin(data: any): Promise<AxiosResponse<ApiResponse<any>>> {
    return this.axiosInstanceWithoutToken.get(`/plugin/${data}`);
  }

  getPluginCategories(data: any): Promise<AxiosResponse<ApiResponse<any>>> {
    return this.axiosInstanceWithoutToken.get(`/plugin-category/`, {
      params: data,
    });
  }

  addPlugin(
    plugin: any,
    logo: File,
    file: File
  ): Promise<AxiosResponse<ApiResponse<any>>> {
    const bodyFormData = new FormData();
    bodyFormData.append("plugin", JSON.stringify(plugin));
    bodyFormData.append("logo", logo);
    bodyFormData.append("file", file);
    return this.axiosInstanceWithToken.post(`/plugin/`, bodyFormData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  editPlugin(
    pluginId: string,
    req: any,
    logo?: any,
    file?: any
  ): Promise<AxiosResponse<ApiResponse<any>>> {
    const bodyFormData = new FormData();
    bodyFormData.append("req", JSON.stringify(req));
    logo && bodyFormData.append("logo", logo);
    file && bodyFormData.append("file", file);
    return this.axiosInstanceWithToken.patch(
      `/plugin/${pluginId}`,
      bodyFormData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  }

  deletePlugin(pluginId: string): Promise<AxiosResponse<ApiResponse<any>>> {
    return this.axiosInstanceWithToken.delete(`/plugin/${pluginId}`);
  }

  getMerchants(data: any): Promise<AxiosResponse<ApiResponse<any>>> {
    return this.axiosInstanceWithToken.get(`/merchant/`, { params: data });
  }

  getMerchant(data: any): Promise<AxiosResponse<ApiResponse<any>>> {
    return this.axiosInstanceWithToken.get(`/merchant/${data}`);
  }

  deleteMerchant(merchantId: string): Promise<AxiosResponse<ApiResponse<any>>> {
    return this.axiosInstanceWithToken.delete(`/merchant/${merchantId}`);
  }

  createMerchant(data: any): Promise<AxiosResponse<ApiResponse<any>>> {
    return this.axiosInstanceWithToken.post(`/merchant/`, data);
  }

  getMerchantWallet(data: any): Promise<AxiosResponse<ApiResponse<any>>> {
    return this.axiosInstanceWithToken.get(`/merchant-wallet/${data}`);
  }

  getMerchantTransaction(data: any): Promise<AxiosResponse<ApiResponse<any>>> {
    return this.axiosInstanceWithToken.get(`/merchant-transaction/${data}`);
  }

  getMerchantTransactions(data: any): Promise<AxiosResponse<ApiResponse<any>>> {
    return this.axiosInstanceWithToken.get(`/merchant-transaction/`, {
      params: data,
    });
  }
  createPaymentLink(
    params: any,
    data: any
  ): Promise<AxiosResponse<ApiResponse<any>>> {
    return this.axiosInstanceWithToken.post(`/merchant/payment-link/`, data, {
      params,
    });
  }
}

export const authServiceHandler = new AuthService();
