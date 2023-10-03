import type { TMessageCode } from "@/utils"

export type ApiPagination = {
  page: number
  limit: number
  total: number
}

export type ApiType<T> = {
  status: string
  code: TMessageCode
  message?: string
  data: Record<string, T> | null
  pagination?: ApiPagination
}

export type TSearchParams = {
  q: string
  limit: number
  page: number
  total: number
}

export const searchParams = ({ limit = 10, page = 1, q = "", total = 0 }: TSearchParams) => ({ limit, page, q, total })

export const apiResponse = <T>({
  code = "IFA01",
  data = null,
  status = "Bad request",
  message = "message",
  pagination,
}: ApiType<T>): ApiType<T> => {
  let baseResponse = {
    code,
    data,
    status,
    message,
  }

  if (pagination) {
    return {
      code,
      data,
      status,
      message,
      pagination,
    }
  }

  return baseResponse
}
