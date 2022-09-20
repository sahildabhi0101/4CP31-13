import axios from "axios";
// student na personal peoject added
export const AddProjectAPI = async (body) => {
  try {
    console.log('inside project api', body)
    const url = `/api/project/addproject`;
    const response = await axios.post(url, {
      project_title: body.project_title,
      project_desc: body.project_desc,
      tags: body.tags,
      image: body.image
    });
    const data = response.data;
    console.log('body img', body.image)
    return data;
  } catch (err) {
    console.log({ ...err.response });
    console.log("Error is: " + err.response);
  }
};

// student project table ma add thase student -> multiple project
export const AddStudentProjectAPI = async ({ project_id, token }) => {
  console.log("addstudent", project_id, token);
  try {
    const url = `/api/project/studentproject`;
    const response = await axios.post(
      url,
      {
        project_id,
      },
      {
        headers: {
          "auth-token": token,
        },
      }
    );
    const data = response.data;
    return data;
  } catch (err) {
    console.log({ ...err.response });
    console.log("Error is: " + err.response);
  }
};

export const GetProjectAPI = async ({ project_id }) => {
  try {
    const url = `/api/project/displayProject`;
    const response = await axios.post(url, {
      project_id,
    });
    const data = response.data;
    return data;
  } catch (err) {
    console.log({ ...err.response });
    console.log("Error is: " + err.response);
  }
};