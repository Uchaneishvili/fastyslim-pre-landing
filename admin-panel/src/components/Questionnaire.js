import React, { useState, useEffect } from "react";
import { Layout, Breadcrumb } from "antd";
import {
  HomeOutlined,
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import Axios from "axios";
import { Table, Input, Button } from "antd";
import "./Questionnaire.css";
import CreateModal from "./Modal/CreateModal";

function Questionnaire() {
  const [questionList, setQuestionList] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [questionEdit, setQuestionEdit] = useState();
  const { Search } = Input;
  const { Header } = Layout;

  const columns = [
    {
      title: "Question",
      dataIndex: "question",
    },
    {
      title: "First Option",
      dataIndex: "optionOne",
    },
    {
      title: "Second Option",
      dataIndex: "optionTwo",
    },
    {
      title: "Third Option",
      dataIndex: "optionThree",
    },
    {
      title: "Fourth Option",
      dataIndex: "optionFour",
    },
    {
      title: "Priority",
      dataIndex: "priority",
    },

    {
      title: "Action",
      dataIndex: "_id",
      fixed: "right",
      render: (id, val) => (
        <>
          <Button className="edit-button" onClick={() => editClick(val)}>
            <EditOutlined />
          </Button>
          <Button className="delete-button" onClick={() => deleteQuestion(id)}>
            <DeleteOutlined />
          </Button>
        </>
      ),
    },
  ];

  const loadData = async () => {
    let url = `http://localhost:3001/read`;

    await Axios.get(url).then((response) => {
      setQuestionList(response.data.data);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  const addClick = () => {
    setQuestionEdit({});
    setIsOpen(true);
  };

  const editClick = (question) => {
    setQuestionEdit(question);
    setIsOpen(true);
  };

  const deleteQuestion = async (id) => {
    await Axios.delete(`http://localhost:3001/delete/${id}`);
    loadData();
  };

  const handleTableChange = () => {
    loadData();
  };
  return (
    <div>
      <div className="breadcrumbs-container">
        <div className="breadCrumb">
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item href="/">
              <HomeOutlined />
            </Breadcrumb.Item>
            <Breadcrumb.Item>Question List</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>

      <div
        className="site-layout-background"
        style={{ padding: 24, textAlign: "start", marginTop: 10 }}
      >
        <Header
          className="site-layout-background page-title"
          style={{ padding: 0 }}
        >
          Question List
        </Header>
        <div>
          <div className="create-button">
            <Button
              type="primary"
              size="large"
              onClick={() => addClick()}
              icon={<PlusOutlined />}
            >
              Add Question
            </Button>
          </div>
          <Table
            columns={columns}
            scroll={{ x: 1300 }}
            style={{ marginTop: 20 }}
            dataSource={questionList}
            rowKey={(question) => question._id}
            onChange={handleTableChange}
            pagination={false}
          />
        </div>
      </div>

      <CreateModal
        isOpen={isOpen}
        setIsOpen={() => setIsOpen(false)}
        questionList={questionList}
        setQuestionList={setQuestionList}
        questionEdit={questionEdit}
        setQuestionEdit={setQuestionEdit}
        loadData={() => loadData()}
      />
    </div>
  );
}

export default Questionnaire;
