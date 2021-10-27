import React, { useState, useEffect } from "react";
import { Layout, Breadcrumb } from "antd";
import { HomeOutlined, DeleteOutlined } from "@ant-design/icons";
import axios from "axios";
import { Table, Input, Button } from "antd";

function Questionnaire() {
  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
    },
    {
      title: "Question",
      dataIndex: "question",
    },

    {
      title: "Action",
      dataIndex: "_id",
      fixed: "right",
      render: (id) => (
        <div>
          <Button
            className="delete-button"
            // onClick={() => deleteAdvertisement(id)}
          >
            <DeleteOutlined />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div>
        <div className="breadcrumbs-container">
          <div className="breadCrumb">
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item href="/">
                <HomeOutlined />
              </Breadcrumb.Item>
              <Breadcrumb.Item>Home List</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
        <div>
          <Table
            columns={columns}
            scroll={{ x: 1300 }}
            style={{ marginTop: 20 }}
            //   dataSource={homeData}
            rowKey={(home) => home._id}
            //   pagination={{ current: current, pageSize: 24, total: total }}
            //   onChange={handleTableChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Questionnaire;
