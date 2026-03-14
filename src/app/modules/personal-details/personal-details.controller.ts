import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import pick from "../../utils/PickFunction";
import sendResponse from "../../utils/sendResponse";
import { paginationFields } from "../Recipe/Recipe.constant";
import { personalDetailsService } from "./personal-details.service";

const createPersonalDetails = catchAsync(async (req,res)=>{
    const result = await personalDetailsService.createPersonalDetails(req.body)
    sendResponse(res,{
        success:true,
        statusCode:httpStatus.OK,
        message:"send personal details successfully",
        data:result 
    })
})

const getAllPersonalDetails = catchAsync(async (req, res) => {
  const options = pick(req.query, paginationFields);
  const result = await personalDetailsService.getAllPersonalDetails(options);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "get all personal details successfully",
    data: result.data,
    meta: result.meta,
  });
});

const deletePersonalDetails = catchAsync(async(req,res)=>{
    const params = req.params?.id as string
    const result = await personalDetailsService.deletePersonalDetails(params)
    sendResponse(res,{
        success:true,
        statusCode:httpStatus.OK,
        message:"get all personal details successfully",
        data:result 
    })
})



export const personalDetailsController = {
    createPersonalDetails,
    getAllPersonalDetails,
    deletePersonalDetails
}