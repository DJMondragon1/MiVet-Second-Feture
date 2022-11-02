import React, { Fragment, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import licenseService from "services/licenseService";
import toastr from "toastr";
import "../../toastr/build/toastr.css";
import debug from "sabio-debug";

const LicenseAddForm = () => {
  const _logger = debug.extend("LicenseAddForm");

  const [licenseData] = useState({
    LicenseStateId: "test",
    LicenseNumber: "",
    DateExpires: 0,
    CreatedBy: 1,
  });

  const onSubmitClick = (values) => {
    _logger("Values,", values);
    licenseService
      .addLicense(values)
      .then(onLicenseAddSuccess)
      .catch(onLicenseAddError);
  };

  const onLicenseAddSuccess = (response) => {
    _logger(response);
    toastr.success("License added");
  };

  const onLicenseAddError = (err) => {
    _logger(err);
    toastr.error("Add error");
  };

  return (
    <Fragment>
      <section className="gradient-custom">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h4 className="text-center mb-4 pb-2">Licenses</h4>
                  <div className="row">
                    <div className="col">
                      <Formik
                        enableReinitialize={true}
                        initialValues={licenseData}
                        onSubmit={onSubmitClick}
                      >
                        <Form noValidate name="chat-form" id="comment-form">
                          <div className="row">
                            <div className="col mb-2 mb-sm-0">
                              <Field
                                type="text"
                                name="text"
                                className="form-control textarea"
                                placeholder="Add a license"
                              />
                              <ErrorMessage name="text" component="div" />
                            </div>
                            <div className="col-sm-auto">
                              <div className="btn-group">
                                <button
                                  className="btn btn-primary license-add btn-block"
                                  key="license"
                                >
                                  Add
                                </button>
                              </div>
                            </div>
                          </div>
                        </Form>
                      </Formik>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default LicenseAddForm;
