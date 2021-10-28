import React, { useEffect } from "react";
import {
  PageHeader,
  Layout,
  Modal,
  Button,
  Form,
  InputNumber,
  Row,
  Col,
  Input,
  DatePicker,
  Tabs,
} from "antd";
import Axios from "axios";

function CreateModal(props) {
  const [form] = Form.useForm();

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 14 },
  };

  const addOrUpdateQuestion = async () => {
    await form.validateFields();
    if (props.questionEdit && props.questionEdit._id) {
      await Axios.put("http://localhost:3001/update", {
        _id: props.questionEdit._id,
        question: props.questionEdit.question,
        priority: props.questionEdit.priority,
        optionOne: props.questionEdit.optionOne,
        optionTwo: props.questionEdit.optionTwo,
        optionThree: props.questionEdit.optionThree,
        optionFour: props.questionEdit.optionFour,
      });
    } else {
      await Axios.post("http://localhost:3001/insert", {
        question: props.questionEdit.question,
        priority: props.questionEdit.priority,
        optionOne: props.questionEdit.optionOne,
        optionTwo: props.questionEdit.optionTwo,
        optionThree: props.questionEdit.optionThree,
        optionFour: props.questionEdit.optionFour,
      });
    }

    props.setIsOpen(false);
  };

  useEffect(() => {
    form.resetFields();
  }, [props.isOpen]);

  const onClose = () => {
    props.setIsOpen(false);
  };

  const questionFunction = (event) => {
    props.setQuestionEdit({
      ...props.questionEdit,
      question: event.target.value,
    });
  };

  const optionOneFunction = (event) => {
    props.setQuestionEdit({
      ...props.questionEdit,
      optionOne: event.target.value,
    });
  };

  const optionTwoFunction = (event) => {
    props.setQuestionEdit({
      ...props.questionEdit,
      optionTwo: event.target.value,
    });
  };

  const optionThreeFunction = (event) => {
    props.setQuestionEdit({
      ...props.questionEdit,
      optionThree: event.target.value,
    });
  };

  const optionFourFunction = (event) => {
    props.setQuestionEdit({
      ...props.questionEdit,
      optionFour: event.target.value,
    });
  };

  const priorityFunction = (event) => {
    props.setQuestionEdit({
      ...props.questionEdit,
      priority: event,
    });
  };

  return (
    <>
      <Modal
        visible={props.isOpen}
        onCancel={onClose}
        title="Create Question"
        onOk={addOrUpdateQuestion}
      >
        <Form form={form} {...layout} style={{ marginTop: 50 }}>
          <Col>
            <Form.Item
              name="question"
              label="Question"
              onChange={(event) => form.setFieldsValue(event.target.value)}
              initialValue={
                props.questionEdit ? props.questionEdit.question : ""
              }
              rules={[
                {
                  required: true,
                  message: "Please fill out this field",
                },
              ]}
            >
              <Input
                onChange={(event) => questionFunction(event)}
                defaultValue=""
              />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              name="priority"
              label="Priority"
              initialValue={
                props.questionEdit ? props.questionEdit.priority : ""
              }
              rules={[
                {
                  required: true,
                  message: "Please fill out this field",
                },
              ]}
            >
              <InputNumber onChange={(event) => priorityFunction(event)} />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              name="optionOne"
              label="First Option"
              initialValue={
                props.questionEdit ? props.questionEdit.optionOne : ""
              }
              rules={[
                {
                  required: true,
                  message: "Please fill out this field",
                },
              ]}
            >
              <Input onChange={(event) => optionOneFunction(event)} />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              name="optionTwo"
              label="Second Option"
              initialValue={
                props.questionEdit ? props.questionEdit.optionTwo : ""
              }
              rules={[
                {
                  required: true,
                  message: "Please fill out this field",
                },
              ]}
            >
              <Input onChange={(event) => optionTwoFunction(event)} />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              name="optionThree"
              label="Third Option"
              initialValue={
                props.questionEdit ? props.questionEdit.optionThree : ""
              }
            >
              <Input onChange={(event) => optionThreeFunction(event)} />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              name="optionFour"
              label="Fourth Option"
              initialValue={
                props.questionEdit ? props.questionEdit.optionFour : ""
              }
            >
              <Input onChange={(event) => optionFourFunction(event)} />
            </Form.Item>
          </Col>
        </Form>
      </Modal>
    </>
  );
}

export default CreateModal;
