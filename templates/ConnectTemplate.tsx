"use client";
import { useEffect } from "react";

export const ConnectTemplate = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <section>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/kenny-krosky/quick-sync?hide_gdpr_banner=1"
        style={{ minWidth: "320px", height: "700px" }}
      ></div>
    </section>
  );
};
