import React, {Fragment} from 'react';

import Modal from '../../components/UI/Modal/Modal';

import useHttpErrorHandler from '../../hooks/http-error-handler';

const withErrorHandler = (WrappedComponent, axios) => {

  const [error, cleanError] = useHttpErrorHandler(axios);

  return (props) => {

    return (
      <Fragment>
        <Modal
          show={error}
          modalClosed={cleanError}>
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </Fragment>
    );
  }
};

export default withErrorHandler;