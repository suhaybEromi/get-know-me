export default function Loading() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <div
          className="spinner-border text-primary"
          role="status"
          style={{ width: "4rem", height: "4rem" }}
        ></div>
        <h5 className="mt-3 text-secondary fw-semibold">Please wait...</h5>
      </div>
    </div>
  );
}
