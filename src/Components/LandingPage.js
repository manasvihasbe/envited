import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";
import PushPinIcon from "@mui/icons-material/PushPin";
import LinkIcon from "@mui/icons-material/Link";
import "./Landing.css";

function LandingPage() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <div className="landcontainer">
      <div className="landText">
        <h2 className="landingContainer landTop" style={{ color: "#240D57" }}>
          Imagine if
        </h2>
        
          <h3 className="landingContainer">Snapchat</h3>
        
        <h3 className="landingContainer" style={{ color: "#240D57" }}>
          had events
        </h3>
        <p className="landingContainer" style={{ color: "#4F4F4F" }}>
          Easily host and share events with your friends <br /> across any
          social media.
        </p>
      </div>

      <div className="landCard" style={{ paddingLeft: "37%" }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjAO9ja4s15vVnjHRVd6y_VMKN85m4bEVI5g&usqp=CAU"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Movie Night
            </Typography>
            <p style={{ color: "grey" }}>Hosted by Elysia </p>

            <Stack direction="row" spacing={2}>
              <Item>
                14 responses • <span style={{ color: "blue" }}>see guest</span>{" "}
                <Button>invite</Button>
              </Item>
            </Stack>
            <br />
            <div>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  {" "}
                  <FaCalendar />
                  <Typography>
                    <p>18 August 6:00PM</p>
                    <p style={{ color: "grey" }}>
                      {" "}
                      to <span>19 August 1:00PM</span> UTC +10
                    </p>
                  </Typography>
                </AccordionSummary>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  {" "}
                  <PushPinIcon />
                  <Typography>
                    <p>Street name</p>
                    <p style={{ color: "grey" }}>301 Rowes Lane, WA, 7183</p>
                  </Typography>
                </AccordionSummary>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  {" "}
                  <LinkIcon />
                  <Typography>
                    <p>Link</p>
                    <p style={{ color: "grey" }}>netflix.com</p>
                  </Typography>
                </AccordionSummary>
              </Accordion>
            </div>
          </CardContent>
        </Card>
        <br />
        <Button
          className="btnContainer"
          variant="contained"
          style={{ width: "345px" }}
        >
          <Link to="/Create" style={{ textDecoration: "none" }}>
            Create
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default LandingPage;
