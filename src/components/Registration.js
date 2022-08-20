import React, { useState } from "react";
import "./Registration.css";
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

  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    initialValues,
    validateOnChange: true,
    validationSchema: signUpSchema,
    validateOnBlur: false,
    onSubmit: (values, action) => {
      action.resetForm();
      setData((prev) => [values, ...prev]);
      console.log(data);
    },
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="personal_details">
          <h2 className="title text-2xl font-semibold">Personal Details</h2>
          <div className="details_form">
            <div>
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
              />
            </div>

            <div>
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
                onBlur={handleBlur}
              />
            </div>

            <div>
              <label htmlFor="gender">
                Sex <span style={{ color: "red" }}>*</span>
              </label>
              <select
                id="gender"
                name="gender"
                value={values.gender}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option>Enter Sex</option>
                <option value={"male"}>Male</option>
                <option value={"female"}>Female</option>
                <option value={"others"}>Others</option>
              </select>
            </div>

            <div>
              <label htmlFor="mobile">Mobile </label>
              <input
                type="text"
                name="mobile"
                id="mobile"
                placeholder="Enter Mobile"
                value={values.mobile}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>

            <div className="govtIdType">
              <label htmlFor="govtIdType" className="">
                Govt Issued ID
              </label>
              <select
                id="govtIdType"
                name="govtIdType"
                value={values.govtIdType}
                onChange={handleChange}
                onBlur={handleBlur}
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
                className=""
              />
            </div>
          </div>
        </div>

        <div className="contact-details">
          <h2 className="title font-semibold">Contact Details</h2>
          <div className="contact">
            <div className="gaurdianDetail">
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
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>

            <div>
              <label htmlFor="contactNum ">Emergency Contact Number</label>
              <input
                type="text"
                name="contactNum"
                id="contactNum"
                placeholder="Enter Emergency No."
                value={values.contactNum}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </div>

          <div className="address_details">
            <h2 className="title font-semibold">Address Details</h2>
            <div className="address">
              <div>
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Enter Address"
                  value={values.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>

              <div>
                <label htmlFor="state">State</label>
                <select
                  id="state"
                  name="state"
                  value={values.state}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option>Enter State</option>
                  <option value={"delhi"}>Delhi</option>
                  <option value={"rajasthan"}>Rajasthan</option>
                  <option value={"maharashtra"}>Maharashtra</option>
                  <option value={"gujarat"}>Gujarat</option>
                </select>
              </div>

              <div>
                <label htmlFor="city">City</label>
                <select
                  id="city"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option>Enter City/Town/Village</option>
                  <option value={"mumbai"}>Mumbai</option>
                  <option value={"kolkata"}>Kolkata</option>
                  <option value={"pune"}>Pune</option>
                  <option value={"bhopal"}>Bhopal</option>
                  <option value={"new_delhi"}>New Delhi</option>
                </select>
              </div>
              <div>
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  defaultValue="India"
                  id="country"
                  name="country"
                  placeholder="Country"
                  value={values.country}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>

              <div>
                <label htmlFor="pincode">Pincode</label>
                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  palceholder="Enter Pincode"
                  value={values.pincode}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            </div>
          </div>

          <div className="other_details">
            <h2 className="title font-semibold">Other Details</h2>
            <div className="others">
              <div>
                <label htmlFor="occupation">Occupation</label>
                <input
                  type="text"
                  id="occupation"
                  name="occupation"
                  palceholder="Enter Occupation"
                  value={values.occupation}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div>
                <label htmlFor="religion">Religion</label>
                <select
                  id="religion"
                  name="religion"
                  value={values.religion}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option>
                    Enter Religion
                  </option>
                  <option value={"hindu"}>Hindu</option>
                  <option value={"muslim"}>Muslim</option>
                  <option value={"christian"}>Christian</option>
                  <option value={"punjabi"}>Punjabi</option>
                </select>
              </div>

              <div>
                <label htmlFor="martial_status">Martial Status</label>
                <select
                  id="martial_status"
                  name="martial_status"
                  value={values.martial_status}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option>Enter Martial Status</option>
                  <option value={"married"}>Married</option>
                  <option value={"unmarried"}>Unmarried</option>
                </select>
              </div>

              <div>
                <label htmlFor="blood_group">Blood group</label>
                <select
                  id="blood_group"
                  name="blood_group"
                  value={values.blood_group}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option>
                    Enter blood Group
                  </option>
                  <option value={"b+"}>B+</option>
                  <option value={"0-"}>0-</option>
                  <option value={"b-"}>B-</option>
                  <option value={"A+"}>A+</option>
                </select>
              </div>

              <div>
                <label htmlFor="nationality">Nationality</label>
                <input
                  type="text"
                  defaultValue="India"
                  id="nationality"
                  name="nationality"
                  placeholder="Nationality"
                  value={values.nationality}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-5">
          <button className="bg-red-600 px-4 py-2 rounded-md text-white ">
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

        <Table striped bordered hover responsive className="mt-10">
          <thead className="bg-white">
            <tr>
              <th>Name</th>
              <th className="w-48 text-center">DOB or Age</th>
              <th>Gender</th>
              <th>Mobile</th>
              <th className="w-48 text-center">Govt ID Type</th>
              <th className="w-48 text-center">Govt Type</th>
              <th>Gaurdian</th>
              <th className="w-48 text-center">Gaurdian Name</th>
              <th>Email</th>
              <th className="w-48 text-center">Contact Num</th>
              <th>Address</th>
              <th>State</th>
              <th>City</th>
              <th>Country</th>
              <th>Pincode</th>
              <th>Occupation</th>
              <th>Religion</th>
              <th className="w-48 text-center">Martial Status</th>
              <th className="w-48 text-center">Blood Group</th>
              <th>Nationality</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item , id) => {
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
      </div>
  );
};

export default Registration;
