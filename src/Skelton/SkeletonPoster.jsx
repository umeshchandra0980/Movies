import React from "react";
import "./SkeletonPoster.css";

export default function SkeletonPoster({ w = 180, h = 260 }) {
  return (
    <div className="skeleton-group">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="skeleton-poster"
          style={{ width: `${w}px`, height: `${h}px` }}
        />
      ))}
    </div>
  );
}
