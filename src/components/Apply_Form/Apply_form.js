import React, { useState, useEffect } from "react";
import "./Apply_form.css";
import { Modal, ModalHeader } from "reactstrap";
import hire_talent_line from "../../images/hire_talent_line.png";
import { useForm } from "react-hook-form";

const Apply_form = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="popup">
      <main className="col-md-8 mx-auto mt-4">
        <header className="text-center">
          <h1 className="display-4 text-light hire-talent">Build Your Career</h1>
          <img className="hire_talent_line" src={hire_talent_line} alt="" />
          <h6 className="">Provide your details</h6>
        </header>
        <hr />
        <section>
          <form
            action=""
            method="get"
            className="font-weight-bold"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="form-group">
              <label htmlFor="fullName">Full Name*</label>
              <input
                type="text"
                className="form-control input-field"
                id="email"
                placeholder="Enter your name"
                style={{ color: "white" }}
                {...register("fullname", { required: true })}
                // onChange={(e) => setFullName(e.target.value)}
              />
              {errors.fullname && (
                <span className="validation">Name is required field</span>
              )}
            </div>

            <div className="row form-group">
              <div className="col-lg-6">
                <label htmlFor="mobile">Phone Number*</label>
                <input
                  type="text"
                  id="mobile"
                  style={{ color: "white" }}
                  placeholder="Enter your mobile number"
                  className="form-control"
                  // onChange={e=>setPhoneNumber(e.target.value)}
                  {...register("phonenumber", { required: true })}
                />
                {errors.fullname && (
                  <span className="validation">
                    PhoneNumber is required field
                  </span>
                )}
              </div>
              <div className="col-lg-6">
              <label htmlFor="email">Email*:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                style={{ color: "white" }}
                placeholder="Enter your business email"
                // onChange={(e) => setEmail(e.target.value)}
                {...register("fullname", { required: true })}
              />
              {errors.fullname && (
                <span className="validation">Email is required field</span>
              )}
              </div>
            </div>



            <div className="form-group">
              <label htmlFor="current-organization">Current organization</label>
              <input
                type="text"
                className="form-control"
                id="current-organization"
                style={{ color: "white" }}
                placeholder="Your organization name"
                // onChange={(e) => setEmail(e.target.value)}
                {...register("fullname", { required: true })}
              />
           </div>
           
           <div className="row form-group">
              <div className="col-lg-6">
                <label >Current Designation</label>
                <input
                  type="text"
                  
                  style={{ color: "white" }}
                  placeholder="Enter your mobile number"
                  className="form-control"
                  // onChange={e=>setPhoneNumber(e.target.value)}
                  
                />
              
              </div>
              <div className="col-lg-6">
              <label >Current CTC</label>
              <input
                type="text"
                className="form-control"
               
                style={{ color: "white" }}
                placeholder="Your current CTC in lakhs"
                // onChange={(e) => setEmail(e.target.value)}
                {...register("current_ctc")}
              />
             
              </div>
            </div>

            <div className="row form-group">
              <div className="col-lg-6">
                <label >Current Location</label>
                <input
                  type="text"
                  
                  style={{ color: "white" }}
                  placeholder="Where do you work now"
                  className="form-control"
                  // onChange={e=>setPhoneNumber(e.target.value)}
                  
                />
              
              </div>
              <div className="col-lg-6">
              <label >Preferred Location</label>
              <input
                type="text"
                className="form-control"
               
                style={{ color: "white" }}
                placeholder="Where do you want to work"
                // onChange={(e) => setEmail(e.target.value)}
                {...register("current_ctc")}
              />
             
              </div>
            </div>

          

           

            <div className="row form-group">
            <div className="col-lg-6">
                <label htmlFor="company-size">Total Work Experience:</label>
                <select
                  name=""
                  id=""
                  className="form-control"
                  placeholder
                  {...register("size")}
                >
                  <option
                    className="drop_down"
                    value=""
                    selected
                    style={{ color: "white" }}
                  >
                    You are working since
                  </option>
                  <option value="Fresher">Fresher</option>
                  <option value="1-2 Years">1-2 Years</option>
                  <option value="2-4 Years">2-4 Years</option>
                  <option value="4+ Years">4+ Years</option>
                </select>
              </div>
              <div className="col-lg-6">
                <label htmlFor="company-size">Preferred Job Role</label>
                <select
                  name=""
                  id=""
                  className="form-control"
                  placeholder
                  {...register("size")}
                >
                  <option
                    className="drop_down"
                    value=""
                    selected
                    style={{ color: "" }}
                  >
                    Select
                  </option>
                  <option value="Java Full Stack Developer">Java Full Stack Developer</option>
                  <option value="Data Specialist">Data Specialist</option>
                  <option value="Finace & Accounts">Finace & Accounts</option>
                </select>
              </div>
            </div>



            <div class="form-group purple-border">
              <label htmlFor="exampleFormControlTextarea4">
              Ask your quires and we will getback to you 
              </label>
              <textarea
                className="form-control text_area"
                id="exampleFormControlTextarea4"
                rows="3"
                style={{ color: "white" }}
                // onChange={(e) => setTechTalent(e.target.value)}
                {...register("quires")}
              ></textarea>
             
            </div>
            <div>
              <input
                type="submit"
                className="btn  col-lg-4 offset-lg-4 btn-block-button my-4 button"
                defaultValue="Register"
              />
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Apply_form;
