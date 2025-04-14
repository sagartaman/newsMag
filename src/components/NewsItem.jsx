import React from "react";

const NewsItem = ({ title, description, src, url }) => {
  const newsImage = "/src/assets/newsImage.jpg";

  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2 shadow-sm"
      style={{
        maxWidth: "410px",
        borderRadius: "12px",
        transition: "transform 0.2s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img
        src={src ? src : newsImage}
        style={{
          height: "180px",
          width: "100%",
          objectFit: "cover",
          borderRadius: "10px",
        }}
        className="card-img-top"
        alt="news"
      />
      <div className="card-body">
        <h5 className="card-title" style={{ fontWeight: "600", fontSize: "1.1rem" }}>
          {title?.length > 60 ? title.slice(0, 60) + "..." : title}
        </h5>
        <p className="card-text" style={{ fontSize: "0.95rem" }}>
          {description ? description.slice(0, 60) + "..." : "News"}
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-sm"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
