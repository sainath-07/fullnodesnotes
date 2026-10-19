import React, { useState } from "react";
import useNewToaster from "./useNewToaster";

const BG_COLORS = {
  success: "#84eb5b",
  info: "#ecece9",
  warning: "#f5ec99",
  error: "#d13232",
};

const ToastContainer = ({ toasts, removeToast }) => {
  console.log({ toasts });
  return (
    <div
      style={{
        position: "fixed",
        top: "1rem",
        right: "1rem",
        zIndex: 9999,
        minWidth: "10vw",
      }}
    >
      {/* toast message display */}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "end",
          width: "100%",
        }}
      >
        {toasts.map((toast) => (
          <p
            style={{
              background: BG_COLORS[toast.type],
              padding: "0.2rem 0.6rem",
              borderRadius: "8px",
              color: "#222",
            }}
            key={toast.id}
          >
            {toast.message}

            <button className="btn" onClick={() => removeToast(toast.id)}>
              X
            </button>
          </p>
        ))}
      </div>
    </div>
  );
};

const MainToasterContainer = () => {
  const { toast, addToast, removeToast } = useNewToaster();

  //   console.log({ toast });
  return (
    <div>
      <h2>Toaster</h2>
      <div
        style={{
          display: "flex",
          gap: "6px",
          margin: "8px",
        }}
      >
        <button
          className="btn btn-success"
          onClick={() => addToast("success toast", "success")}
        >
          Success
        </button>
        <button
          className="btn btn-warning"
          onClick={() => addToast("Warning toast", "warning")}
        >
          Warning
        </button>
        <button
          className="btn btn-primary"
          onClick={() => addToast("Info toast", "info")}
        >
          Info
        </button>
        <button
          className="btn btn-error"
          onClick={() => addToast("Error toast", "error")}
        >
          Error
        </button>
      </div>
      <ToastContainer toasts={toast} removeToast={removeToast} />
    </div>
  );
};

export default MainToasterContainer;


// useNewToaster.jsx code
import React, { useState } from "react";

const useNewToaster = () => {
  const [toast, setToast] = useState([]);

  const addToast = (message, type = "info") => {
    const id = Date.now();

    setToast((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToast((prev) => prev.filter((p) => p.id !== id));
    }, 2000);
  };

  const removeToast = (id) => {
    setToast((prev) => prev.filter((p) => p.id !== id));
  };

  return { toast, addToast, removeToast };
};

export default useNewToaster;