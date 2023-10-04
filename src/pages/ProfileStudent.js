import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProfileStudent.css"; // Đảm bảo bạn đã import CSS file

function ProfileStudent() {
  const [studentData, setStudentData] = useState({});
  const studentId = 1; // Thay thế bằng Student Id cần lấy từ URL hoặc từ nguồn dữ liệu khác

  useEffect(() => {
    // Gửi yêu cầu GET đến endpoint của backend để lấy thông tin sinh viên
    axios.get(`/api/students/${studentId}`) // Thay đổi đường dẫn API tới endpoint của bạn
      .then((response) => {
        // Khi dữ liệu được trả về từ backend
        const dataParts = response.data.split(",");
        const StudentID = dataParts[0].trim();
        const fullName = dataParts[1].trim();
        const email = dataParts[2].trim();

        // Lưu thông tin vào state
        setStudentData({ StudentID, fullName, email });
      })
      .catch((error) => {
        console.error("Lỗi khi lấy dữ liệu từ backend: ", error);
      });
  }, [studentId]);
  return (
    <div className="profilestudent">
    <div className="profile3">
      <img className="shadow-02-icon1" alt="" src="/shadow-02.svg" />
      <b className="profile4">Profile</b>
      <div className="se173049-container">
        <div className="se1730491">{studentData.StudentID}</div>
      </div>
      <div className="tinddse173049fpteduvn-container">
        <div className="tinddse173049fpteduvn1">{studentData.email}</div>
      </div>
      <div className="on-nh-tn-container">
        <div className="on-nh-tn1">{studentData.fullName}</div>
      </div>
      <div className="email1">Email:</div>
      <div className="full-name1">Full Name:</div>
      <div className="student-id">Student ID:</div>
    </div>
      <div className="report2">
        <div className="report-item" />
        <div className="report3">Report</div>
        <div className="image-1-container">
          <img className="image-1-icon1" alt="" src="/image-1@2x.png" />
        </div>
      </div>
      <div className="left-side-menu1">
        <div className="user-profile1">
          <img
            className="profile-image-icon1"
            alt=""
            src="/profile-image1@2x.png"
          />
          <div className="name-group">
            <b className="name2">Tin Dinh</b>
            <div className="tittle1">Real Estate Builders</div>
          </div>
        </div>
        <div className="options1">
          <div className="exams-group">
            <button className="exams2">
              <div className="exams-child">
                <div className="icon-container">
                  <img className="icon2" alt="" src="/icon2.svg" />
                  <div className="exams3">Exams</div>
                </div>
              </div>
            </button>
            <button className="profile5">
              <div className="exams-child">
                <div className="template-group">
                  <img className="template-icon1" alt="" src="/template1.svg" />
                  <div className="profile6">Profile</div>
                  <div className="line-div" />
                </div>
              </div>
            </button>
            <button className="exams2">
              <div className="exams-child">
                <div className="icon-container">
                  <img className="icon2" alt="" src="/icon3.svg" />
                  <div className="reports1">Reports</div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <img className="logo-long-1-icon1" alt="" src="/logolong-1@2x.png" />
      <div className="header">
        <div className="header-child" />
        <div className="header-item" />
        <div className="frame-container">
          <div className="frame-container">
            <div className="lecturer-name1">
              <p className="lecturer1">Lecturer</p>
              <p className="lecturer1"> Name</p>
            </div>
            <img className="frame-child1" alt="" src="/ellipse-1@2x.png" />
            <div className="fpt-university1">FPT UNIVERSITY</div>
            <div className="exam-schedule1">
              Exam schedule management system
            </div>
            <div className="div2">▼</div>
          </div>
          <img className="notification-icon1" alt="" src="/notification1.svg" />
        </div>
      </div>
    </div>
  );
};

export default ProfileStudent;
