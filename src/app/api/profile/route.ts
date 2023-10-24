import { NextRequest, NextResponse } from "next/server"
import { PrismaClient } from '@prisma/client'
import { apiResponse, searchParams } from "@/utils"
import type { ApiType, TMessageCode, TSearchParams } from "@/utils"
import type { Profiles, TProfile } from "@/types"
import { NextApiRequest, NextApiResponse } from "next"
import { Validator } from "@/utils/validator"

const prisma = new PrismaClient()

export async function GET(req: NextRequest) {
  const statusCode = 200
  let code: TMessageCode = "IFA05"
  let status: string = "success"
  let message: string = "Success retrive data!"

  try {
    const params = searchParams(req.nextUrl.searchParams as unknown as TSearchParams)

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
    const { code, data, status, message } = error as ApiType<null>
    return NextResponse.json(apiResponse({ code, data, status, message }))
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
  const statusCode = 200
  let code: TMessageCode = "IFA05"
  let status: string = "success"
  let message: string = "Success retrive data!"

  try {
    const body = await req.json()

    const validator = new Validator(body)
    const schema: Record<keyof Profiles, ((key: string) => void)[]> = {
      first_name: [validator.required],
      about_subtitle: [validator.required],
      default_cv_id: [validator.required],
      last_name: [validator.required],
      middle_name: [validator.required],
      my_about: [validator.required],
      subtitle: [validator.required],
      title: [validator.required],
      welcome_message: [validator.required]
    }

    validator.validateFields(schema)

    // console.log(validator.schema({ nama: validator.required().min(100) }))

    return NextResponse.json(
      apiResponse({
        code,
        status,
        message,
        data: {
          id: '',
        },
      }),
      { status: statusCode },
    )
  } catch (error) {
    const { code, data, status, message } = error as ApiType<null>
    return NextResponse.json(apiResponse({ code, data, status, message }), { status: 500 })
  }
}
