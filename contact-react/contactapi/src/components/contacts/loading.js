import React from "react";

function Loading(Component) {
  return function LoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <p style={{ fontSize: "25px" }}>
        Please log in to see contacts.
      </p>
      
    );
  };
}

export default Loading;
