export type TProfile = {
  id: string
  first_name: string
  middle_name?: string
  last_name: string
  full_name: string
  title: string
  subtitle?: string
  welcome_message?: string
  my_about?: string
  default_cv_id?: string
  tech_stack?: TStack
  about_subtitle?: string
  createdAt?: string
  updatedAt?: string
  cVId?: string
}

export type TStack = {
  id: string
  stack_name: string
  stack_icon: string
  Profile: TProfile
  profileId: string
  createdAt?: string
  updatedAt?: string
}

export type TPortofolio = {
  id: string
  name: string
  type: string
  icon: string
  description?: string
  images: string
  createdAt?: string
  updatedAt?: string
}

export type TCV = {
  id: string
  cv_name: string
  version?: string
  cv_data: string
  Profile: TProfile
  createdAt?: string
  updatedAt?: string
}

export type TContact = {
  id: string
  contact_name: string
  contact_icon: string
  contact_type: string
  contact_url?: string
  createdAt?: string
  updatedAt?: string
}
