import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import moment from "moment";
import DateTimeRangePicker from "@wojtekmaj/react-datetimerange-picker";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Create({ field, setField }) {
  const [value, setValue] = useState([new Date(), new Date()]);

  const handleInputChange = (status) => {
    //console.log(status);
    setValue(status);
  };

  const closeCalender = () => {
    debugger;
    console.log(
      "StartDate:" +
        moment(value[0]).format("MMMM Do YYYY, hh:mm:ss A") +
        "           EndDate:" +
        moment(value[1]).format("MMMM Do YYYY, hh:mm:ss A")
    );
  };
  console.log("field", field);
  return (
    <div className="createContainer">
      <Box
        sx={{
          width: 360,
          maxWidth: "100%", marginTop:'2%'
        }}
      >
        <TextField
          fullWidth
          label="Event Name"
          id="eventName"
          onChange={(e) => setField({ ...field, eventName: e.target.value })}
        />
        <br />
        <br />
        <TextField
          fullWidth
          label=" Host Name"
          id="hostName"
          onChange={(e) => setField({ ...field, hostName: e.target.value })}
        />
        <br />
        <br />
        <div>
          <DateTimeRangePicker
            // onChange={handleInputChange}
            value={value}
            disableClock={true}
            disableCalendar={false}
            format={"d-MM-yyyy HH:mm"}
            minDate={new Date()}
            onCalendarClose={closeCalender}
            onChange={(val) => setField({ ...field, date: val })}
          />
        </div>
        <br />
        <TextField
          fullWidth
          label=" Location"
          id="location"
          onChange={(e) => setField({ ...field, location: e.target.value })}
        />
        <br />
        <br />
        <TextField
          type="file"
          fullWidth
          id="eventImg"
          onChange={(e) =>
            setField({ ...field, img: URL.createObjectURL(e.target.files[0]) })
          }
        />
        <br/>
        <br/>
        <Button  variant="contained" style={{width:'360px'}}>
        <Link to="/Events" style={{ textDecoration: 'none'}}>Events</Link>
      </Button>
      </Box>
    </div>
  );
}

export default Create;
