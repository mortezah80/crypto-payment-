"use client";
import Grid from "@mui/system/Unstable_Grid/Grid";
import { AiOutlinePlusCircle } from "react-icons/ai";
import PersonIcon from "$/public/icons/tickets/person.svg";
import { RiDeleteBin6Line } from "react-icons/ri";
import Pagination from "@/components/common/Pagination";
import AdminModal from "@/components/pages/Admin/users/AdminModal";
import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { authServiceHandler } from "@/api/auth.service";
import {
  ADMIN_SORT_BY_OPTIONS,
  USER_TYPE_OPTIONS,
} from "@/configs/filter-options";
import CustomSelect from "@/components/common/SelectFilter";
import Loading from "@/components/common/Loading";

const AdministrativeUsers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [adminCount, setAdminCount] = useState<any>();
  const [adminCountLoading, setAdminCountLoading] = useState(false);
  const [admins, setAdmins] = useState<any>();
  const [adminsLoading, setAdminsLoading] = useState(false);
  const [open, setOpen] = useState<any>(false);
  const [adminDataForEdit, setAdminDataForEdit] = useState<any>();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [selectedSortBy, setSelectedSortBy] = useState("created_at");
  const [selectedUserType, setSelectedUserType] = useState("");
  const [deleteLoading, setDeleteLoading] = useState(false);

  const getAdminCount = async () => {
    setAdminCountLoading(true);
    const res = await authServiceHandler.adminCount();
    setAdminCount(res.data.data);
    setAdminCountLoading(false);
  };

  const getAdmins = async () => {
    interface IParameters {
      page: number;
      limit?: number;
      sort_by?: string;
      sort_type?: number;
      deleted?: boolean;
      username?: string;
      email?: string;
      type?: string;
    }

    const parameters: IParameters = {
      page: currentPage,
      sort_by: selectedSortBy,
      username: username,
      email: email,
      type: selectedUserType,
    };
    if (!selectedSortBy) delete parameters.sort_by;
    if (!username) delete parameters.username;
    if (!email) delete parameters.email;
    if (!selectedUserType) delete parameters.type;
    setAdminsLoading(true);
    const res = await authServiceHandler.admins(parameters);
    setAdmins(res.data);
    setAdminsLoading(false);
  };

  const handleDeleteAdmin = async (id: string) => {
    setDeleteLoading(true);
    await authServiceHandler.removeAdmin(id);
    getAdmins();
    getAdminCount();
    setDeleteLoading(false);
  };

  const handleEditAdmin = async (data: any) => {
    setAdminDataForEdit(data);
    setOpen(true);
  };

  useEffect(() => {
    getAdminCount();
  }, []);

  useEffect(() => {
    getAdmins();
  }, [currentPage, selectedSortBy, selectedUserType, username, email]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedSortBy, username, email, selectedUserType]);

  return (
    <>
      <Grid container rowGap={2} className="py-6">
        <Grid container xs={12} className="p-10 bg-card shadow-3xl rounded-xl">
          <div className="w-full flex flex-wrap items-center gap-10 justify-between max-2xl:justify-center max-2xl:items-start max-lg:gap-5">
            <div className="w-full max-w-fit flex flex-col gap-1 max-xl:items-center max-md:flex-row max-md:justify-between max-md:max-w-none">
              <span className="text-primary font-bold text-3xl max-md:text-lg max-md:text-center">
                Total Users Admin
              </span>
              <div className="flex items-end gap-2">
                <span className="text-text font-bold text-3xl max-md:text-lg">
                  {adminCountLoading ? (
                    <Loading size={20} />
                  ) : (
                    adminCount?.total
                  )}
                </span>
                <span className="text-grayText">User</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-between items-center gap-16 max-lg:justify-center max-md:gap-2">
              <div className="flex items-center gap-2 text-sm text-grayText font-bold max-lg:flex-col max-md:flex-row max-md:justify-between max-md:w-full">
                <span>General Manager</span>
                <span className="text-text text-3xl">
                  {adminCountLoading ? (
                    <Loading size={20} />
                  ) : (
                    adminCount?.dev_admin
                  )}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-grayText font-bold max-lg:flex-col max-md:flex-row max-md:justify-between max-md:w-full">
                <span>User Manager</span>
                <span className="text-text text-3xl">
                  {adminCountLoading ? (
                    <Loading size={20} />
                  ) : (
                    adminCount?.user_admin
                  )}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-grayText font-bold max-lg:flex-col max-md:flex-row max-md:justify-between max-md:w-full">
                <span>Blogger</span>
                <span className="text-text text-3xl">
                  {adminCountLoading ? (
                    <Loading size={20} />
                  ) : (
                    adminCount?.blogger
                  )}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-grayText font-bold max-lg:flex-col max-md:flex-row max-md:justify-between max-md:w-full">
                <span>Ticket Operator</span>
                <span className="text-text text-3xl">
                  {adminCountLoading ? (
                    <Loading size={20} />
                  ) : (
                    adminCount?.operator
                  )}
                </span>
              </div>
            </div>
            <button
              onClick={() => setOpen(true)}
              className="text-sm text-white font-bold flex justify-center items-center gap-1 px-5 w-full max-w-[180px] h-10 rounded-xl bg-primary shadow-[0px_10px_20px_0px_#1093ff33] max-md:max-w-none"
            >
              <AiOutlinePlusCircle /> Add User Admin
            </button>
          </div>
        </Grid>
        <Grid
          container
          xs={12}
          className="p-10 bg-card shadow-3xl rounded-xl flex flex-col gap-3"
        >
          <div className="text-primary font-bold text-lg max-md:text-lg max-md:text-center">
            List of Users Admin
          </div>
          <div className="flex justify-between items-center gap-5 max-xl:flex-col max-xl:items-start max-xl:justify-start max-md:w-full">
            <div className="flex items-center gap-7 max-xl:justify-between max-xl:w-full max-md:flex-wrap">
              <div className="flex items-center gap-1 max-md:justify-between max-md:w-full">
                <label
                  className="text-grayText font-bold text-sm min-w-fit"
                  htmlFor=""
                >
                  UserName:
                </label>
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  placeholder="Enter a Username..."
                  className="bg-grayLight px-3 py-2 rounded-xl text-sm w-full max-w-[215px]"
                />
              </div>
              <div className="flex items-center gap-1 max-md:justify-between max-md:w-full">
                <label
                  className="text-grayText font-bold text-sm min-w-fit"
                  htmlFor=""
                >
                  Email Address:
                </label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter a Email Find.."
                  className="bg-grayLight px-3 py-2 rounded-xl text-sm w-full max-w-[215px]"
                />
              </div>
            </div>
            <div className="flex items-center gap-7 max-xl:justify-between max-xl:w-full max-md:flex-wrap">
              <div className="flex justify-between items-center gap-8 max-md:w-full">
                <div className="flex items-center gap-2 max-md:justify-between max-md:w-full">
                  <span className="text-sm font-bold text-grayText">
                    User Type:
                  </span>
                  <div className="min-w-[165px] max-md:ml-auto">
                    <CustomSelect
                      options={USER_TYPE_OPTIONS}
                      select={selectedUserType}
                      setSelect={setSelectedUserType}
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 max-md:justify-between max-md:w-full">
                <span className="text-sm font-bold text-grayText">
                  Sort by:
                </span>
                <div className="min-w-[165px]">
                  <CustomSelect
                    options={ADMIN_SORT_BY_OPTIONS}
                    select={selectedSortBy}
                    setSelect={setSelectedSortBy}
                  />
                </div>
              </div>
            </div>
          </div>
          <ul className="flex flex-col">
            {adminsLoading ? (
              <div className="w-full flex justify-center items-center my-5">
                <Loading size={80} />
              </div>
            ) : (
              admins?.data?.map((i: any, index: number) => (
                <li
                  key={i}
                  className="flex items-center flex-wrap w-full p-5 px-8 odd:bg-background rounded-2xl gap-1 hover:bg-[#F9F9F9] duration-200 max-sm:gap-2 max-sm:justify-between max-sm:p-5"
                >
                  <div className="flex items-center gap-10 flex-grow-[3] border-r-[1px] border-borderGray last:border-none px-2 max-sm:order-1 max-sm:border-none max-sm:px-0 max-sm:flex max-sm:justify-between max-sm:items-start">
                    <span className="text-grayText text-xs max-md:hidden">
                      {index + 1}
                    </span>
                    <div className="flex items-center gap-2">
                      <PersonIcon />
                      <div className="flex flex-col">
                        <h4 className="text-sm font-bold">{i?.username}</h4>
                        <p className="text-grayText">{i?.email}</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-center flex-grow-[3] border-r-[1px] border-borderGray last:border-none px-2 max-sm:order-3 max-sm:w-full max-sm:border-none max-sm:px-0 max-sm:flex max-sm:justify-between max-sm:items-start">
                    {i.created_at
                      ? new Date(i?.created_at)?.toDateString()
                      : ""}
                  </div>
                  <div className="flex-grow-[4] border-r-[1px] border-borderGray last:border-none text-center px-2 max-sm:order-4 max-sm:border-none max-sm:px-0 max-sm:flex max-sm:justify-between max-sm:items-start">
                    <span className="text-sm font-bold">{i?.type}</span>
                  </div>
                  <div className="flex items-center gap-10 flex-grow-[3] border-r-[1px] border-borderGray last:border-none justify-center px-2 max-sm:order-5 max-sm:border-none max-sm:px-0 max-sm:flex max-sm:justify-between max-sm:items-start">
                    <div className="flex items-center gap-2">
                      <PersonIcon />
                      <div className="flex flex-col">
                        <h4 className="text-sm font-bold">
                          {i?.creator_email}
                        </h4>
                        <p className="text-grayText">{i?.creator_user}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-3 flex-grow-[2] border-r-[1px] border-borderGray last:border-none px-2 max-sm:order-2 max-sm:border-none max-sm:max-w-fit max-sm:px-0 max-sm:flex max-sm:justify-between max-sm:items-start">
                    <CiEdit
                      color="#242424"
                      className="cursor-pointer"
                      onClick={() => handleEditAdmin(i)}
                    />
                    <RiDeleteBin6Line
                      color="#FF5252"
                      className={`${
                        deleteLoading ? "cursor-not-allowed" : "cursor-pointer"
                      }`}
                      onClick={() => handleDeleteAdmin(i?.id)}
                    />
                  </div>
                </li>
              ))
            )}
          </ul>
          <div className="w-full flex justify-center">
            <Pagination
              totalPage={admins?.total_page}
              containerClass="mx-auto mt-6"
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          </div>
        </Grid>
      </Grid>
      <AdminModal
        open={open}
        onClose={() => {
          setOpen(false);
          setAdminDataForEdit(undefined);
        }}
        onReload={() => {
          getAdmins();
          getAdminCount();
        }}
        editData={adminDataForEdit}
      />
    </>
  );
};

export default AdministrativeUsers;
