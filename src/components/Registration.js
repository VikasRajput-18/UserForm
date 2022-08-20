import React, { useState } from "react";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas/schema";
import { Table } from "react-bootstrap";

const Registration = () => {
  const [data, setData] = useState([]);


  const initialValues = {
    name: "",
    dob: "",
    gender: "",
    mobile: "",
    govtIdType: "",
    govtID: "",
    gaurdian: "",
    gaurdianName: "",
    email: "",
    contactNum: "",
    address: "",
    state: "",
    city: "",
    country: "",
    pincode: "",
    occupation: "",
    religion: "",
    martial_status: "",
    blood_group: "",
    nationality: "",
  };
  const Formik = useFormik({
    initialValues,
    validateOnChange: true,
    validationSchema: signUpSchema,
    validateOnBlur: false,
    onSubmit: (values, action) => {
      action.resetForm();
      setData((prev) => [values, ...prev]);
    },
  });


  const { values, handleBlur, handleChange, handleSubmit, errors , handleReset } = useFormik({
    initialValues,
    validateOnChange: true,
    validationSchema: signUpSchema,
    validateOnBlur: false,
    onSubmit: (values, action) => {
      action.resetForm();
      setData((prev) => [values, ...prev]);
    },
  });

  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="personal_details">
          <h2 className="title text-2xl font-semibold underline">
            Personal Details
          </h2>
          <div className="details_form gap-10 my-10 flex flex-wrap">
            <div className="flex align-center gap-5 ">
              <label htmlFor="name">
                Name <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className="border border-sky-500 px-3 py-1 rounded-sm"
              />
            </div>

            <div className="flex align-center gap-5 ">
              <label htmlFor="dob">
                Date of Birth or Age <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                placeholder="DD/MM/YYYY or Age in Years"
                id="dob"
                name="dob"
                value={values.dob}
                onChange={handleChange}
                className="border border-sky-500 px-3 py-1 rounded-sm"
                onBlur={handleBlur}
              />
            </div>

            <div className="flex align-center gap-5 ">
              <label htmlFor="gender">
                Sex <span style={{ color: "red" }}>*</span>
              </label>
              <select
                id="gender"
                name="gender"
                value={values.gender}
                onChange={handleChange}
                onBlur={handleBlur}
                className="border border-sky-500 px-3 py-1 rounded-sm"
              >
                <option>Enter Sex</option>
                <option value={"male"}>Male</option>
                <option value={"female"}>Female</option>
                <option value={"others"}>Others</option>
              </select>
            </div>

            <div className="flex align-center gap-5 ">
              <label htmlFor="mobile">Mobile </label>
              <input
                type="text"
                name="mobile"
                id="mobile"
                placeholder="Enter Mobile"
                value={values.mobile}
                onChange={handleChange}
                onBlur={handleBlur}
                className="border border-sky-500 px-3 py-1 rounded-sm"
              />
            </div>

            <div className="flex align-center gap-5 flex-wrap">
              <label htmlFor="govtIdType">Govt Issued ID</label>
              <select
                id="govtIdType"
                name="govtIdType"
                value={values.govtIdType}
                onChange={handleChange}
                onBlur={handleBlur}
                className="border border-sky-500 px-3 py-1 rounded-sm"
              >
                <option>ID Type</option>
                <option value={"aadhar_card"}>Aadhar Card</option>
                <option value={"passport"}>Passport</option>
              </select>
              <input
                type="text"
                placeholder="Enter Govt ID"
                name="govtID"
                value={values.govtID}
                onChange={handleChange}
                onBlur={handleBlur}
                className="border border-sky-500 px-3 py-1 rounded-sm w-80"
              />
            </div>
          </div>
        </div>

        <div className="contact-details">
          <h2 className="title font-semibold underline text-2xl">
            Contact Details
          </h2>
          <div className="contact gap-10 my-10 flex flex-wrap">
            <div className="gaurdianDetail flex align-center gap-5 ">
              <label htmlFor="gaurdian">Guardian Details</label>
              <select
                id="gaurdian"
                name="gaurdian"
                value={values.gaurdian}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option>Enter Label</option>
                <option value={"parent"}>Parent</option>
                <option value={"teacher"}>Teacher</option>
              </select>
              <input
                type="text"
                placeholder="Enter Guardian Name"
                name="gaurdianName"
                value={values.gaurdianName}
                onChange={handleChange}
                onBlur={handleBlur}
                className="border border-sky-500 px-3 py-1 rounded-sm"
              />
            </div>
            <div className="flex align-center gap-5 ">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="border border-sky-500 px-3 py-1 rounded-sm"
              />
            </div>

            <div className="flex align-center gap-5 ">
              <label htmlFor="contactNum ">Emergency Contact Number</label>
              <input
                type="text"
                name="contactNum"
                id="contactNum"
                placeholder="Enter Emergency No."
                value={values.contactNum}
                onChange={handleChange}
                onBlur={handleBlur}
                className="border border-sky-500 px-3 py-1 rounded-sm"
              />
            </div>
          </div>

          <div className="address_details">
            <h2 className="title text-2xl font-semibold underline">
              Address Details
            </h2>
            <div className="address gap-10 my-10 flex flex-wrap">
              <div className="flex align-center gap-5 ">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Enter Address"
                  value={values.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="border border-sky-500 px-3 py-1 rounded-sm"
                />
              </div>

              <div className="flex align-center gap-5 ">
                <label htmlFor="state">State</label>
                <select
                  id="state"
                  name="state"
                  value={values.state}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="border border-sky-500 px-3 py-1 rounded-sm"
                >
                  <option>Enter State</option>
                  <option value={"delhi"}>Delhi</option>
                  <option value={"rajasthan"}>Rajasthan</option>
                  <option value={"maharashtra"}>Maharashtra</option>
                  <option value={"gujarat"}>Gujarat</option>
                </select>
              </div>

              <div className="flex align-center gap-5 ">
                <label htmlFor="city">City</label>
                <select
                  id="city"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="border border-sky-500 px-3 py-1 rounded-sm"
                >
                  <option>Enter City/Town/Village</option>
                  <option value={"mumbai"}>Mumbai</option>
                  <option value={"kolkata"}>Kolkata</option>
                  <option value={"pune"}>Pune</option>
                  <option value={"bhopal"}>Bhopal</option>
                  <option value={"new_delhi"}>New Delhi</option>
                </select>
              </div>
              <div className="flex align-center gap-5">
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  placeholder="Country"
                  value={values.country}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="border border-sky-500 px-3 py-1 rounded-sm"
                />
              </div>

              <div className="flex align-center gap-5 ">
                <label htmlFor="pincode">Pincode</label>
                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  value={values.pincode}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="border border-sky-500 px-3 py-1 rounded-sm"
                  placeholder="Enter Pincode"
                />
              </div>
            </div>
          </div>

          <div className="other_details ">
            <h2 className="title font-semibold text-2xl underline">
              Other Details
            </h2>
            <div className="others gap-10 my-10 flex flex-wrap">
              <div className="flex align-center gap-5 ">
                <label htmlFor="occupation">Occupation</label>
                <input
                  type="text"
                  id="occupation"
                  name="occupation"
                  palceholder="Enter Occupation"
                  value={values.occupation}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="border border-sky-500 px-3 py-1 rounded-sm"
                />
              </div>
              <div className="flex align-center gap-5 ">
                <label htmlFor="religion">Religion</label>
                <select
                  id="religion"
                  name="religion"
                  value={values.religion}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="border border-sky-500 px-3 py-1 rounded-sm"
                >
                  <option>Enter Religion</option>
                  <option value={"hindu"}>Hindu</option>
                  <option value={"muslim"}>Muslim</option>
                  <option value={"christian"}>Christian</option>
                  <option value={"punjabi"}>Punjabi</option>
                </select>
              </div>

              <div className="flex align-center gap-5 ">
                <label htmlFor="martial_status">Martial Status</label>
                <select
                  id="martial_status"
                  name="martial_status"
                  value={values.martial_status}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="border border-sky-500 px-3 py-1 rounded-sm"
                >
                  <option>Enter Martial Status</option>
                  <option value={"married"}>Married</option>
                  <option value={"unmarried"}>Unmarried</option>
                </select>
              </div>

              <div className="flex align-center gap-5 ">
                <label htmlFor="blood_group">Blood group</label>
                <select
                  id="blood_group"
                  name="blood_group"
                  value={values.blood_group}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="border border-sky-500 px-3 py-1 rounded-sm"
                >
                  <option>Group</option>
                  <option value={"b+"}>B+</option>
                  <option value={"0-"}>0-</option>
                  <option value={"b-"}>B-</option>
                  <option value={"A+"}>A+</option>
                </select>
              </div>

              <div className="flex align-center gap-5 ">
                <label htmlFor="nationality">Nationality</label>
                <input
                  type="text"
                  id="nationality"
                  name="nationality"
                  placeholder="Nationality"
                  value={values.nationality}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="border border-sky-500 px-3 py-1 rounded-sm"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-5">
          <button
            className="bg-red-600 px-4 py-2 rounded-md text-white "
            type="button" onClick={handleReset}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-green-600 px-4 py-2 rounded-md text-white"
          >
            Submit
          </button>
        </div>
      </form>
      {data.length > 0 && (
        <Table striped bordered hover responsive className="mt-10">
          <thead className="bg-white">
            <tr>
              <th className="text-sm font-medium">Name</th>
              <th className="text-sm font-medium">DOB or Age</th>
              <th className="text-sm font-medium">Gender</th>
              <th className="text-sm font-medium">Mobile</th>
              <th className="text-sm font-medium">Govt ID Type</th>
              <th className="text-sm font-medium">Govt Type</th>
              <th className="text-sm font-medium">Gaurdian</th>
              <th className="text-sm font-medium">Gaurdian Name</th>
              <th className="text-sm font-medium">Email</th>
              <th className="text-sm font-medium">Contact Num</th>
              <th className="text-sm font-medium">Address</th>
              <th className="text-sm font-medium">State</th>
              <th className="text-sm font-medium">City</th>
              <th className="text-sm font-medium">Country</th>
              <th className="text-sm font-medium">Pincode</th>
              <th className="text-sm font-medium">Occupation</th>
              <th className="text-sm font-medium">Religion</th>
              <th className="text-sm font-medium">Martial Status</th>
              <th className="text-sm font-medium">Blood Group</th>
              <th className="text-sm font-medium">Nationality</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, id) => {
              return (
                <tr className="bg-white" key={id}>
                  <td>{item.name}</td>
                  <td>{item.dob}</td>
                  <td>{item.gender}</td>
                  <td>{item.mobile}</td>
                  <td>{item.govtIdType}</td>
                  <td>{item.govtID}</td>
                  <td>{item.gaurdian}</td>
                  <td>{item.gaurdianName}</td>
                  <td>{item.email}</td>
                  <td>{item.contactNum}</td>
                  <td>{item.address}</td>
                  <td>{item.state}</td>
                  <td>{item.city}</td>
                  <td>{item.country}</td>
                  <td>{item.pincode}</td>
                  <td>{item.occupation}</td>
                  <td>{item.religion}</td>
                  <td>{item.martial_status}</td>
                  <td>{item.blood_group}</td>
                  <td>{item.nationality}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default Registration;
