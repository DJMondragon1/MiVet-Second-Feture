import React from "react";
import PropTypes from "prop-types";

const LicensePage = (props) => {
  const { license } = props;
  return (
    <div className="row-md-3 m-1">
      <div className="card">
        <div className="card-body">
          <h5>
            {license.createdBy.firstName} {license.createdBy.lastName}
            {license.licenseState.code}
          </h5>
        </div>
      </div>
    </div>
  );
};

LicensePage.propTypes = {
  license: PropTypes.shape({
    createdBy: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
    }),
    licenseState: PropTypes.shape({
      code: PropTypes.string,
    }),
  }),
};

export default LicensePage;
