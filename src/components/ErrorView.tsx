const ErrorView = () => {
  return (
    <div className="alert alert-danger" role="alert" id="error-view">
      Service currently not available, please{" "}
      <a href="/" className="alert-link">
        Try again
      </a>
      .
    </div>
  );
};

export default ErrorView;
