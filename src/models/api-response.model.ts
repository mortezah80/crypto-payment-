export interface ApiResponse<DataModel> {
  data: DataModel;
  message?: string;
  detail?: any;
  status_code: number;
}
