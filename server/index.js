const express = require("express");
const mongoose = require("mongoose");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const QuestionModel = require("./models/Question");
mongoose.connect(
  "mongodb+srv://gigauchaneishvili:password123456@cluster0.uf17y.mongodb.net/fastyslim-questions?retryWrites=true&w=majority",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }
);

const swaggerOption = {
  swagger: "2.0",
  swaggerDefinition: {
    info: {
      title: "Fastyslim API",
      description: "Questions API information",
      contact: {
        name: "Giga Uchaneishvili",
      },
      servers: ["http://localhost:3001"],
    },
  },

  // ['.routes/*js]
  apis: ["index.js"],
};
const swaggerDocs = swaggerJsDoc(swaggerOption);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /read:
 *  get:
 *    summary: Get all questions.
 *    responses:
 *      '200':
 *        description: A successfull response
 *
 */
app.get("/read", async (req, res) => {
  //Read
  try {
    const querySearch = {};

    let query = QuestionModel.find(querySearch).sort({ priority: 1 });

    const result = await query;

    res.status(200).json({
      status: "Success",
      data: result,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      status: "Failed",
      message: "Server Error",
    });
  }
});

/**
 *  @swagger
 *
 * paths:
 *   /insert:
 *     post:
 *       summary: Update a new question.
 *       consumes:
 *         - application/json
 *       parameters:
 *         - in: body
 *           name: Question
 *           description: Update a  question.
 *           schema:
 *             type: object
 *             properties:
 *               question:
 *                 type: string
 *               priority:
 *                 type: int
 *               optionOne:
 *                 type: string
 *               optionTwo:
 *                 type: string
 *               optionThree:
 *                 type: string
 *               optionFour:
 *                 type: string
 *       responses:
 *         200:
 *           description: Created
 */
app.post("/insert", async (req, res) => {
  //Create
  const { question, optionOne, optionTwo, optionThree, optionFour, priority } =
    req.body;

  const questionData = new QuestionModel({
    question: question,
    optionOne: optionOne,
    optionTwo: optionTwo,
    optionThree: optionThree,
    optionFour: optionFour,
    priority: priority,
  });

  try {
    await questionData.save();

    res.status(200).json({
      status: "Success",
      message: "Inserted Data",
    });
  } catch (error) {
    console.log(error);
    res.send(error);

    res.status(500).json({
      status: "Failed",
      message: "Server Error",
    });
  }
});

/**
 *  @swagger
 *
 * paths:
 *   /update:
 *     put:
 *       summary: Update a new question.
 *       consumes:
 *         - application/json
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *           type: string
 *           required: true
 *           description: id of question
 *         - in: body
 *           name: Question
 *           description: Update a  question.
 *           schema:
 *             type: object
 *             properties:
 *               question:
 *                 type: string
 *               priority:
 *                 type: int
 *               optionOne:
 *                 type: string
 *               optionTwo:
 *                 type: string
 *               optionThree:
 *                 type: string
 *               optionFour:
 *                 type: string
 *       responses:
 *         200:
 *           description: Created
 */
app.put("/update", async (req, res) => {
  const { _id } = req.body;
  const data = req.body;

  try {
    const updatedQuestion = await QuestionModel.findByIdAndUpdate(
      _id,
      {
        $set: data,
      },
      {
        new: true,
      }
    );

    res.status(200).json({
      status: "Success",
      data: data,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      status: "Failed",
      message: "Server Error",
    });
  }
});

/**
 *  @swagger
 *
 * paths:
 *   /delete/{id}:
 *     delete:
 *       summary: Delete an question.
 *       consumes:
 *         - application/json
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *           type: string
 *           required: true
 *           description: id of question
 *       responses:
 *         201:
 *           description: OK
 */

app.delete("/delete/:id", async (req, res) => {
  // Delete
  const id = req.params.id;

  try {
    await QuestionModel.findByIdAndRemove(id).exec();

    res.status(200).json({
      status: "Success",
      message: "Deleted",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      status: "Failed",
      message: "Server Error",
    });
  }
});

/**
 *  @swagger
 *
 * paths:
 *   /read/{id}:
 *     get:
 *       summary: Get specific info for question.
 *       consumes:
 *         - application/json
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *           type: string
 *           required: true
 *           description: id of question
 *       responses:
 *         201:
 *           description: OK
 */
app.get("/read/:id", async (req, res) => {
  //Read Details
  const id = req.params.id;

  QuestionModel.findById(id, (err, result) => {
    if (err) {
      res.send(err);

      res.status(500).json({
        status: "Failed",
        message: "Server Error",
      });
    }

    res.status(200).json({
      status: "Success",
      data: result,
    });
  });
});

app.listen(3001, () => {
  console.log("Server running on port 3001...");
});
