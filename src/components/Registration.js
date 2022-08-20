import React from "react";
import "./Registration.css";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas/schema";


const Registration = () => {
  
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
    blood_group : "",
    nationality : ""
  };
  
const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
  useFormik({
    initialValues,
    validateOnChange: true,
    validationSchema : signUpSchema,
    validateOnBlur: false,
    onSubmit: (values , action) => {
      action.resetForm()
    },
  });

  console.log(errors)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="personal_details">
          <h2>Personal Details</h2>
          <div className="details_form">
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
              <option>
                Enter Sex
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>

            <label htmlFor="mobile">Mobile </label>
            <input
              type="number"
              name="mobile"
              id="mobile"
              placeholder="Enter Mobile"
              value={values.mobile}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <label htmlFor="govtIdType">Govt Issued ID</label>
            <select
              id="govtIdType"
              name="govtIdType"
              value={values.govtIdType}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option disabled selected value>
                ID Type
              </option>
              <option value="aadhar_card">Aadhar Card</option>
              <option value="passport">Passport</option>
            </select>
            <input
              type="text"
              placeholder="Enter Govt ID"
              name="govtID"
              value={values.govtID}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
        </div>

        <div className="contact-details">
          <h2>Contact Details</h2>
          <div className="contact">
            <label htmlFor="gaurdian">Guardian Details</label>
            <select
              id="gaurdian"
              name="gaurdian"
              value={values.gaurdian}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option disabled selected value>
                Enter Label
              </option>
              <option value="parent">Parent</option>
              <option value="teacher">Teacher</option>
            </select>
            <input
              type="text"
              placeholder="Enter Guardian Name"
              name="gaurdianName"
              value={values.gaurdianName}
              onChange={handleChange}
              onBlur={handleBlur}
            />

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

            <label htmlFor="contactNum">Emergency Contact Number</label>
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

          <div className="address_details">
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

            <label htmlFor="state">State</label>
            <select
              id="state"
              name="state"
              value={values.state}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option disabled selected value>
                Enter State
              </option>
              <option value="delhi">Delhi</option>
              <option value="rajasthan">Rajasthan</option>
              <option value="maharashtra">Maharashtra</option>
              <option value="gujarat">Gujarat</option>
            </select>

            <label htmlFor="city">City</label>
            <select
              id="city"
              name="city"
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option disabled selected value>
                Enter City/Town/Village
              </option>
              <option value="mumbai">Mumbai</option>
              <option value="kolkata">Kolkata</option>
              <option value="pune">Pune</option>
              <option value="bhopal">Bhopal</option>
              <option value="new_delhi">New Delhi</option>
            </select>

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

          <div className="other_details">
            <h2>Other Details</h2>
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

            <label htmlFor="religion">Religion</label>
            <select
              id="religion"
              name="religion"
              value={values.religion}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option disabled selected value>
                Enter Religion
              </option>
              <option value="hindu">Hindu</option>
              <option value="muslim">Muslim</option>
              <option value="christian">Christian</option>
              <option value="punjabi">Punjabi</option>
            </select>

            <label htmlFor="martial_status">Martial Status</label>
            <select
              id="martial_status"
              name="martial_status"
              value={values.martial_status}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option disabled selected value>
                Enter Martial Status
              </option>
              <option value="married">Married</option>
              <option value="unmarried">Unmarried</option>
            </select>

            <label htmlFor="blood_group">Blood group</label>
            <select
              id="blood_group"
              name="blood_group"
              value={values.blood_group}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option disabled selected value>
                Enter blood Group
              </option>
              <option value="b+">B+</option>
              <option value="0-">0-</option>
              <option value="b-">B-</option>
              <option value="A+">A+</option>
            </select>

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

        <button>Cancel</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Registration;
