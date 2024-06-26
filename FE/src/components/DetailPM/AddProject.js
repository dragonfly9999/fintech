import React, { useState } from "react";
import { DatePicker, Space, Switch, Rate } from "antd";
import { useFormik } from "formik";
// import "./addMovie.css";
import moment from "moment";
// import { quanLyPhimServ } from "../../services/quanLyPhimServ";
const AddProject = () => {
  const formik = useFormik({
    initialValues: {
      tenPhim: "",
      trailer: "",
      moTa: "",
      ngayKhoiChieu: "",
      dangChieu: true,
      sapChieu: "",
      hot: "",
      danhGia: "",
      hinhAnh: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      // convert dữ liệu ngày giờ

      const formData = new FormData();
      for (let key in values) {
        console.log(key);
        if (key == "hinhAnh") {
          formData.append("File", values[key]);
        } else if (key == "ngayKhoiChieu") {
          formData.append(key, moment(values[key]).format("DD-MM-YYYY"));
        } else {
          formData.append(key, values[key]);
        }
      }
      formData.append("maNhom", "GP02");
      //   quanLyPhimServ
      //     .addMovie(formData)
      //     .then((res) => {
      //       resetForm();
      //       setImage("");
      //       // thông báo
      //       // Chuyển hướng người dùng về lại trang quản lí phim
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //       // thông báo lí do chưa tạo được
      //     });
    },
  });

  const [image, setImage] = useState("");
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue,
    reset,
  } = formik;
  console.log(values.hinhAnh.name);
  return (
    <div>
      <h2 className="font-bold text-2xl mb-5">Add Project</h2>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="tenPhim"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Project Name
          </label>
          <input
            type="text"
            id="tenPhim"
            name="tenPhim"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Vui lòng nhập tài khoản"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.tenPhim}
          />
          {/* {errors.taiKhoan && touched.taiKhoan ? (
            <p className="text-red-500 text-xs mt-1">{errors.taiKhoan}</p>
          ) : null} */}
        </div>
        <div>
          <label
            htmlFor="trailer"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Trailer
          </label>
          <input
            type="text"
            id="trailer"
            name="trailer"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Vui lòng nhập tài khoản"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.trailer}
          />
          {/* {errors.taiKhoan && touched.taiKhoan ? (
            <p className="text-red-500 text-xs mt-1">{errors.taiKhoan}</p>
          ) : null} */}
        </div>
        <div>
          <label
            htmlFor="moTa"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Mô tả
          </label>
          <input
            type="text"
            id="moTa"
            name="moTa"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Vui lòng nhập tài khoản"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.moTa}
          />
          {/* {errors.taiKhoan && touched.taiKhoan ? (
            <p className="text-red-500 text-xs mt-1">{errors.taiKhoan}</p>
          ) : null} */}
        </div>
        <div>
          <label
            htmlFor="ngayKhoiChieu"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Ngày khởi chiếu
          </label>
          <DatePicker
            onChange={(date, dateString) => {
              console.log(date);
              setFieldValue("ngayKhoiChieu", date);
              // setFieldValue('ngayKhoiChieu', dateString);
            }}
            format={"DD-MM-YYYY"}
            // changeOnBlur={handleBlur}
            value={values.ngayKhoiChieu}
          />
          {/* {errors.taiKhoan && touched.taiKhoan ? (
            <p className="text-red-500 text-xs mt-1">{errors.taiKhoan}</p>
          ) : null} */}
        </div>
        <div>
          <label
            htmlFor="dangChieu"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Đang chiếu
          </label>
          <Switch
            onChange={(checked, event) => {
              setFieldValue("dangChieu", checked);
            }}
            value={values.dangChieu}
          />
          {/* {errors.taiKhoan && touched.taiKhoan ? (
            <p className="text-red-500 text-xs mt-1">{errors.taiKhoan}</p>
          ) : null} */}
        </div>
        <div>
          <label
            htmlFor="sapChieu"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Sắp chiếu
          </label>
          <Switch
            onChange={(checked, event) => {
              setFieldValue("sapChieu", checked);
            }}
            value={values.sapChieu}
          />
          {/* {errors.taiKhoan && touched.taiKhoan ? (
            <p className="text-red-500 text-xs mt-1">{errors.taiKhoan}</p>
          ) : null} */}
        </div>
        <div>
          <label
            htmlFor="hot"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Hot
          </label>
          <Switch
            onChange={(checked, event) => {
              setFieldValue("hot", checked);
            }}
            value={values.hot}
          />
          {/* {errors.taiKhoan && touched.taiKhoan ? (
            <p className="text-red-500 text-xs mt-1">{errors.taiKhoan}</p>
          ) : null} */}
        </div>
        <div>
          <label
            htmlFor="hot"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Hot
          </label>
          <Rate
            value={values.danhGia}
            onChange={(value) => {
              console.log(value);
              setFieldValue("danhGia", value);
            }}
          />
          {/* {errors.taiKhoan && touched.taiKhoan ? (
            <p className="text-red-500 text-xs mt-1">{errors.taiKhoan}</p>
          ) : null} */}
        </div>
        <div>
          <label
            htmlFor="hot"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Hình ảnh
          </label>
          <img className="w-1/2" src={image} alt="" />
          <input
            type="file"
            name="hinhAnh"
            onBlur={handleBlur}
            // Chỉ cho phép người dùng truyền lên dữ liệu là hình ảnh
            accept="image/*"
            onChange={(event) => {
              // lấy dữ liệu về file được gửi lên
              // console.log(event.target.files[0]);
              const img = event.target.files[0];
              // tạo đường dẫn cho tấm hình và lưu trữ vào state
              if (img) {
                const urlImg = URL.createObjectURL(img);
                console.log(urlImg);
                setImage(urlImg);
              }
              setFieldValue("hinhAnh", img);
            }}
          />
          {/* {errors.taiKhoan && touched.taiKhoan ? (
            <p className="text-red-500 text-xs mt-1">{errors.taiKhoan}</p>
          ) : null} */}
        </div>
        <div>
          <button
            type="submit"
            className="text-white bg-black py-2 px-5 rounded-md"
          >
            Thêm phim
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProject;

// import React from 'react'

// const AddProject = () => {
//   return (
//     <div>AddProject</div>
//   )
// }

// export default AddProject
