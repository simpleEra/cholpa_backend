import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { SubscribeService } from "./subscribe.service";

const addedNewSubscribe = catchAsync(async(req,res)=>{
    const reuslt = await SubscribeService.addedNewSubscribe(req.body)
    sendResponse(res,{
        success:true,
        statusCode:httpStatus.OK,
        message:"successfully subscribe this email",
        data:reuslt
    })
})
const getAllSubscribe = catchAsync(async(req,res)=>{
    const reuslt = await SubscribeService.getAllSubscribe()
    sendResponse(res,{
        success:true,
        statusCode:httpStatus.OK,
        message:"showen all subscription email",
        data:reuslt
    })
})


export const SubscribeController = {
    addedNewSubscribe,
    getAllSubscribe
}


