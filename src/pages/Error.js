import React from "react";
import {Link } from 'react-router-dom'
export default function Error() {
  return (
    <section className="error-pagge section">
        <div className="error-container">
            <h1>oops! it is dead end</h1>
            <Link to="/">Back Home</Link>
        </div>
    </section>
  );
}
