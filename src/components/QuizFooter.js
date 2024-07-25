import React from "react";
import { Link } from "react-router-dom";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import RedditIcon from "@mui/icons-material/Reddit";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function QuizFooter() {
  return (
    <div className="" style={{ display: "flex", justifyContent: "center" }}>
      <footer>
        <div>
          <div className="" style={{ marginBottom: "20px" }}>
            <h4 style={{ fontWeight: "bold" }}>Quiz-Mern</h4>
          </div>
          <div>
            <Link to="/" className="linkFooter">
              HOME
            </Link>
            <Link className="linkFooter">ABOUT</Link>
            <Link className="linkFooter">CONTACT</Link>
            <Link className="linkFooter">BLOG</Link>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <div className="iconDiv">
              <XIcon />
            </div>
            <div className="iconDiv">
              <InstagramIcon />
            </div>
            <div className="iconDiv">
              <RedditIcon />
            </div>
            <div className="iconDiv">
              <FacebookIcon />
            </div>
          </div>
          <div className="mt-3" style={{ fontSize: "18px" }}>
            <p>
              Copyright ©2024 All rights reserved | This quiz is made with ♥ by
              QuizGK...com
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
