"use client";
import Pagination from "@/components/common/Pagination";
import CustomSelect from "@/components/common/SelectFilter";
import { useEffect, useState } from "react";
import UserTableItem from "@/components/pages/Admin/users/TableRow";
import Switch from "@/components/common/switch";
import ReactECharts from "echarts-for-react";
import { authServiceHandler } from "@/api/auth.service";
import { USER_SORT_BY_OPTIONS } from "@/configs/filter-options";
import ProfileModal from "@/components/pages/Admin/users/Profile/Modal";
import Loading from "@/components/common/Loading";

const Users = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [barChartActiveTimeLimit, setBarChartActiveTimeLimit] =
    useState("weekly");
  const [users, setUsers] = useState<any>([]);
  const [usersLoading, setUsersLoading] = useState(false);
  const [usersCount, setUsersCount] = useState<any>([]);
  const [usersCountLoading, setUsersCountLoading] = useState(false);
  const [loginChart, setLoginChart] = useState<any>([]);
  const [loginChartLoading, setLoginChartLoading] = useState(false);
  const [registerChart, setRegisterChart] = useState<any>([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [selectedSortBy, setSelectedSortBy] = useState("created_at");
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [editUser, setEditUser] = useState<any>();

  /** @type EChartsOption */
  const option = {
    grid: {
      left: "5%",
      right: "5%",
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: loginChart?.chart?.labels,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: loginChart?.chart?.data,
        type: "line",
        lineStyle: {
          color: "#1093FF",
          width: 4,
        },
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "rgba(16, 147, 255, 0.60)", // color at 0%
              },
              {
                offset: 1,
                color: "rgba(16, 147, 255, 0.00)", // color at 100%
              },
            ],
            global: false, // default is false
          },
        },
      },
    ],
  };

  /** @type EChartsOption */
  const optionRegister = {
    grid: {
      left: "5%",
      right: "5%",
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: registerChart?.chart?.labels,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: registerChart?.chart?.data,
        type: "line",
        lineStyle: {
          color: "#1093FF",
          width: 4,
        },
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "rgba(16, 147, 255, 0.60)", // color at 0%
              },
              {
                offset: 1,
                color: "rgba(16, 147, 255, 0.00)", // color at 100%
              },
            ],
            global: false, // default is false
          },
        },
      },
    ],
  };

  const handleGetUsers = async () => {
    try {
      interface IParameters {
        page: number;
        limit?: number;
        sort_by?: string;
        sort_type?: number;
        deleted?: boolean;
        username?: string;
        email?: string;
      }
      const parameters: IParameters = {
        page: currentPage,
        sort_by: selectedSortBy,
        username: username,
        email: email,
      };
      if (!selectedSortBy) delete parameters.sort_by;
      if (!username) delete parameters.username;
      if (!email) delete parameters.email;
      setUsersLoading(true);
      const res = await authServiceHandler.users(parameters);
      setUsers(res.data?.data);
    } catch (error) {
    } finally {
      setUsersLoading(false);
    }
  };

  const handleGetUsersCount = async () => {
    setUsersCountLoading(true);
    const res = await authServiceHandler.usersCount();
    setUsersCount(res.data?.data);
    setUsersCountLoading(false);
  };

  const handleGetLoginChart = async () => {
    setLoginChartLoading(true);
    const res = await authServiceHandler.loginChart({
      time_frame: barChartActiveTimeLimit,
    });
    setLoginChart(res.data?.data);
    setLoginChartLoading(false);
  };

  const handleGetRegisterChart = async () => {
    const res = await authServiceHandler.registrationChart({
      time_frame: barChartActiveTimeLimit,
    });
    setRegisterChart(res.data?.data);
  };

  useEffect(() => {
    handleGetUsers();
    handleGetUsersCount();
  }, [currentPage, selectedSortBy, username, email]);

  useEffect(() => {
    handleGetLoginChart();
    handleGetRegisterChart();
  }, [barChartActiveTimeLimit]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedSortBy, username, email]);

  return (
    <div>
      <div className="flex bg-card text-[14px] font-bold text-grayText shadow-[0px_15px_20px_1px_#0000000d] mt-[25px] rounded-[12px] py-[34px] px-[46px] items-center justify-between">
        <div className="flex items-center space-x-[48px]">
          <h1 className="text-primary text-[32px]">Total Users:</h1>
          {usersCountLoading ? (
            <Loading size={20} />
          ) : (
            <h2 className="text-text text-[42px]">
              {usersCount?.total_users}
              <span className="text-[14px] text-grayText pl-2">User</span>
            </h2>
          )}
        </div>
        <div className="flex space-x-10">
          <div className="flex flex-col items-center text-center">
            <span>Daily Login Of Users</span>
            {usersCountLoading ? (
              <Loading size={20} />
            ) : (
              <h3 className="text-text text-[42px]">
                {usersCount?.today_login}
              </h3>
            )}
          </div>
          <div className="flex flex-col items-center text-center">
            <span>Daily Registration of Users</span>
            {usersCountLoading ? (
              <Loading size={20} />
            ) : (
              <h3 className="text-text text-[42px]">
                {usersCount?.today_registration}
              </h3>
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between space-x-4">
        <div className="flex bg-card text-[14px] font-bold flex-1 text-grayText shadow-[0px_15px_20px_1px_#0000000d] mt-[25px] rounded-[12px] py-[34px] px-[46px] items-center justify-between">
          {loginChartLoading ? (
            <div className="w-full h-full flex justify-center items-center my-5">
              <Loading size={80} />
            </div>
          ) : (
            <>
              <div className="flex flex-col items-start space-y-2">
                <h4 className="text-primary font-bold">Login of Users</h4>
                <h1 className="font-bold text-[45px] text-text">
                  {loginChart?.total_login}
                </h1>
                <span className="font-normal text-text text-sm">
                  The number of enteries
                </span>
                <Switch
                  first="weekly"
                  seconde="monthly"
                  active={barChartActiveTimeLimit}
                  setActive={setBarChartActiveTimeLimit}
                />
              </div>
              <div className="w-8/12">
                <ReactECharts style={{ height: 250 }} option={option} />
              </div>
            </>
          )}
        </div>

        <div className="flex bg-card text-[14px] font-bold flex-1 text-grayText shadow-[0px_15px_20px_1px_#0000000d] mt-[25px] rounded-[12px] py-[34px] px-[46px] items-center justify-between">
          {loginChartLoading ? (
            <div className="w-full h-full flex justify-center items-center my-5">
              <Loading size={80} />
            </div>
          ) : (
            <>
              <div className="flex flex-col items-start space-y-2">
                <h4 className="text-primary font-bold">User Registration</h4>
                <h1 className="font-bold text-[45px] text-text">
                  {registerChart?.total_login}
                </h1>
                <span className="font-normal text-text text-sm">
                  Registration Number
                </span>
                <Switch
                  first="weekly"
                  seconde="monthly"
                  active={barChartActiveTimeLimit}
                  setActive={setBarChartActiveTimeLimit}
                />
              </div>
              <div className="w-8/12">
                <ReactECharts style={{ height: 250 }} option={optionRegister} />
              </div>
            </>
          )}
        </div>
      </div>
      <div className="font-bold bg-card shadow-[0px_15px_20px_1px_#0000000d] mt-[21px] px-[50px] py-[41px] rounded-[12px]">
        <h4 className="text-primary text-[18px] ">List of Users</h4>
        <div className="flex justify-between text-grayText text-[14px] items-center mt-[10px] mb-[26px]">
          <div className="flex items-center space-x-[35px]">
            <div className="flex items-center space-x-2">
              <span>UserName:</span>
              <div className="bg-grayLight px-[14px] py-[7px] rounded-[12px] w-[214px]">
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="font-normal focus:outline-none active:outline-none focus:border-none bg-transparent w-10/12"
                  placeholder="Enter a name..."
                />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span>Email Address:</span>
              <div className="bg-grayLight px-[14px] py-[7px] rounded-[12px] w-[214px]">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="font-normal focus:outline-none active:outline-none focus:border-none bg-transparent w-10/12"
                  placeholder="Enter a Email Find..."
                />
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-[4px]">
            <span className="">Sort by:</span>
            <div className="w-[165px]">
              <CustomSelect
                options={USER_SORT_BY_OPTIONS}
                select={selectedSortBy}
                setSelect={setSelectedSortBy}
              />
            </div>
          </div>
        </div>
        {usersLoading ? (
          <div className="w-full h-full flex justify-center items-center my-10">
            <Loading size={80} />
          </div>
        ) : (
          <table className="w-full mt-[31px]">
            <thead>
              <tr className="text-[12px] text-grayText font-bold text-center">
                <th className="w-[70px] text-left"></th>
                <th className="w-[229px] pl-12 text-left">UserName</th>
                <th className="w-[146px] text-center px-[20px]">
                  Register Date
                </th>
                <th className="w-[89px]">Merchant</th>
                <th className="w-[158px] px-[30px]">Total revenue</th>
                <th className="w-[89px]">Wallets</th>
                <th className="w-[158px] px-[30px]">Total Balance</th>
                <th className="w-[113px] text-left px-[30px]"></th>
                <th className="w-[182px] pl-[18px]"></th>
              </tr>
            </thead>
            <tbody>
              {users?.map((value: any, index: any) => {
                return (
                  <UserTableItem
                    user={value}
                    refreshList={handleGetUsers}
                    index={index}
                    key={value.id}
                    editUser={(user: any) => {
                      setEditUser(user);
                      setIsProfileModalOpen(true);
                    }}
                  />
                );
              })}
            </tbody>
          </table>
        )}
        <Pagination
          totalPage={10}
          containerClass="mx-auto mt-6"
          currentPage={currentPage}
          onPageChange={(d) => setCurrentPage(d)}
        />
        <ProfileModal
          open={isProfileModalOpen}
          onClose={() => {
            setIsProfileModalOpen(false);
            setEditUser(null);
          }}
          onReload={() => {
            handleGetUsers();
          }}
          editUser={editUser}
        />
      </div>
    </div>
  );
};

export default Users;
