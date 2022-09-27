import React from 'react';
import { FaCalendar } from 'react-icons/fa';
import Card from '@mui/material/Card';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import PushPinIcon from '@mui/icons-material/PushPin';

function Events({field}) {
  
  return (
    <div className='eventContainer'>
    <Card sx={{ maxWidth: 345 }}>
    <img style={{height:'345px'}} src={field.img}/>
    <h1 style={{color:'#240D57',paddingLeft:'2%'}}>{field.eventName}</h1>
    <h4 style={{color:'grey',paddingLeft:'3%'}}>{field.hostName}</h4>

    <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >  <FaCalendar />
    <Typography>
    <p>{field.date&&field.date[0].toUTCString()}</p>
  <p style={{color:'grey'}}> to <span >{field.date&&field.date[1].toUTCString()}</span></p>
      </Typography>
    </AccordionSummary>
  </Accordion>

  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >  <PushPinIcon />
    <Typography>
    {field.location} </Typography>
    </AccordionSummary>
  </Accordion>

  </Card>
    </div>
  )
}

export default Events