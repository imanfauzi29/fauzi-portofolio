const MessageCode = {
  /** Bad request */
  IFA01: "Bad Request",
  IFA02: "Service Unavailable",
  IFA03: "Gateway Timeout",
  IFA04: "HTTP Authentication Required",
  IFA05: "success",
  IFA06: "Internal Server Error",
  IFA99: "You are not allowed to access this",
}

export type TMessageCode = keyof typeof MessageCode
export default MessageCode
