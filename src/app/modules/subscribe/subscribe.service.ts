import { subscribe } from "@prisma/client"
import prisma from "../../utils/prisma"
import AppError from "../../errors/AppError"
import httpStatus from "http-status"

const addedNewSubscribe = async (payload: subscribe) => {
    console.log(payload,"payload")
  const exist = await prisma.subscribe.findUnique({
    where: { email: payload.email }
  });

  if (exist) {
    throw new AppError(httpStatus.BAD_REQUEST,"Email already subscribed");
  }

  return await prisma.subscribe.create({
    data: payload
  });
};

const getAllSubscribe = async()=>{
    const reuslt = await prisma.subscribe.findMany(
        {
            where:{}
        }
    )
    return reuslt
}
export const SubscribeService = {
    addedNewSubscribe,
    getAllSubscribe
}