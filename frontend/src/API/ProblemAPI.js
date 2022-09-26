import axios from "axios";
// student na personal peoject added
export const AddProblemAPI = async (body) => {
    console.log("inside problem api",body)
    try {
        console.log('hello')
      const url = `/api/problem/addproblem`;
      
      const response = await axios.post(url, {
        problem_title: body.problem_title,
        problem_desc: body.problem_desc,
        tags: body.tags,
        image: body.image
      });
      
      const data = response.data;
      console.log('data is ',data)
      console.log('body img',body.image)
      return data;
    } catch (err) {
      console.log({ ...err.response } , "hey ");
      console.log("Error is: " , err.response);
    }
  };

// agency problem table ma add thase  -> multiple problem
export const AddAgencyProblemAPI = async ({ problem_id, token }) => {
  console.log("addAgency", problem_id, token);
  try {
    const url = `/api/problem/agencyproblem`;
    const response = await axios.post(
      url,
      {
        problem_id,
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

export const GetProblemAPI = async ({ problem_id }) => {
  try {
    const url = `/api/problem/displayProblem`;
    const response = await axios.post(url, {
      problem_id,
    });
    const data = response.data;
    console.log("datA = ",data);
    return data;
  } catch (err) {
    console.log({ ...err.response });
    console.log("Error is: " + err.response);
  }
};