import React from "react";

interface LoadingDisplayProps {
  message?: string;
}

export const LoadingDisplay: React.FC<LoadingDisplayProps> = ({
  message = "Loading...",
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div>{message}</div>
    </div>
  );
};
