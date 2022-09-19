import axios from "axios";

export const AddProjectAPI = async (body) => {
  try {
    console.log('inside project api', body)
    const url = `/api/project/add`;
    const response = await axios.post(url, {
      project_title: body.project_title,
      project_desc: body.project_desc,
      tags: body.tags,
      image: body.image
      // success_Story_id: body.
      // student_ids: body.
      // investor_ids: body.
    });
    const data = response.data;
    console.log('body img', body.image)
    return data;
  } catch (err) {
    console.log({ ...err.response });
    console.log("Error is: " + err.response);
  }
};

export const AddStudentProjectAPI = async ({ project_id, token }) => {
  console.log("addstudent", project_id, token);
  try {
    const url = `/api/project/addstudent`;
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