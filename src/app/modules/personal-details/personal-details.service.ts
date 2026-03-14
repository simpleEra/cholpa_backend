import { personalDetails, Prisma } from "@prisma/client"
import prisma from "../../utils/prisma"
import calculatePagination from "../../utils/pagination"

const createPersonalDetails = async (payload: personalDetails) => {
  const result = await prisma.personalDetails.create({
    data: payload,
  });

  return result;
};
const getAllPersonalDetails = async (options: any) => {
  const { limit, page, skip, sort, order } = calculatePagination(options);

  const result = await prisma.personalDetails.findMany({
    where: {},
    skip,
    take: limit,
  });

  const total = await prisma.personalDetails.count({
    where: {},
  });


  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};
const deletePersonalDetails = async (id:string) => {
    const reuslt = await prisma.personalDetails.delete(
        {
            where:{
                id:id 
            }
        }
    )
    return reuslt
}
export const personalDetailsService = {
    createPersonalDetails,
    getAllPersonalDetails,
    deletePersonalDetails
}