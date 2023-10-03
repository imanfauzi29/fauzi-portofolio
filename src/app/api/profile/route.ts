import { NextRequest, NextResponse } from "next/server"
import { PrismaClient } from '@prisma/client'
import { apiResponse, searchParams } from "@/utils"
import type { ApiType, TMessageCode, TSearchParams } from "@/utils"
import type { TProfile } from "@/types"
import { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient()

export async function GET(req: NextRequest) {
  const statusCode = 200
  let code: TMessageCode = "IFA05"
  let status: string = "success"
  let message: string = "Success retrive data!"

  try {
    const params = searchParams(req.nextUrl.searchParams as TSearchParams)
  
    const getProfileData = prisma.profile.findMany()
  
    return NextResponse.json(
      apiResponse({
        code,
        status,
        message,
        data: {
          profiles: getProfileData,
        },
      }),
      { status: statusCode },
    )
  } catch (error) {
    const {code, data, status,message} = error as ApiType<null>
    return NextResponse.json(apiResponse({code, data, status, message}))
  }
}
