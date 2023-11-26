import React from 'react'
import "./single.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Chart from "../../components/chart/Chart"
import List from "../../components/table/Table"
const Single = () => {
  return (
    <div className='single'>
      <Sidebar />
      <div className="singleContainer">
      <Navbar/>
      <div className="top">
        <div className="left">
          <div className="editButton">Edit</div>
          <h1 className="title">Information</h1>
          <div className="item">
            <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="ava" className="itemImg" />
            <div className="details">
              <h1 className="itemTitle">Fahim</h1>
              <div className="detailItem">
                <span className="itemKey">Email:</span>
                <span className="itemValue">basitabdullah3312@gmail.com</span>
              </div>

              <div className="detailItem">
                <span className="itemKey">Phone:</span>
                <span className="itemValue">+91-3311211</span>
              </div>

              <div className="detailItem">
                <span className="itemKey">Address:</span>
                <span className="itemValue">Batamalo America USA</span>
              </div>

              <div className="detailItem">
                <span className="itemKey">Country:</span>
                <span className="itemValue">USA</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <Chart aspect={3/1} title="User Spending (Last 6 months)"/>
        </div>
      </div>
      <div className="bottom">
        <h1 className="title">Last Transactions</h1>
        <List/>
      </div>
    </div>
    </div>
  )
}

export default Single