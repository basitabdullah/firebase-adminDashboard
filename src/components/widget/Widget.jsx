import React from 'react'
import "./widget.scss"
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import { FaWallet } from "react-icons/fa";

const Widget = ({type}) => {
let data;
let amount = 100
let diff = 20
switch(type){
  case "user" :
    data = {
      title : "USERS",
      isMoney: false,
      link : "See all users",
      icon : (
        <PeopleAltIcon className='icon'/>
      )
    }
    break;

    case "order" :
      data = {
        title : "ORDERS",
        isMoney: false,
        link : "View All Orders",
        icon : (
          <DeliveryDiningIcon className='icon'/>
        )
      }
      break;

      case "earning" :
        data = {
          title : "EARNINGS",
          isMoney: true,
          link : "View Net Earning",
          icon : (
            <QueryStatsIcon className='icon'/>
          )
        }
        break;

        case "balance" :
          data = {
            title : "BALANCE",
            isMoney: true,
            link : "See Balance",
            icon : (
              <FaWallet className='icon'/>
            )
          }
          break;
        
      
    default : 
    break;
}

  return (
    <div className='widget'>
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "$"}{amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
          <div className="percentage positive">
            <ArrowDropUpIcon/>
            {diff}%</div>
            {data.icon}
        </div>

    </div>
  )
}

export default Widget