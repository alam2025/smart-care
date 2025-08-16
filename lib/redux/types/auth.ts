export type BaseRegisterFields = {
  firstName: string;
  lastName: string;
  email: string;
  phoneCode: string; // e.g. "+880"
  phoneNumber: string; // e.g. "01711111111"
  password: string;
};

export type UserRegisterRequest = BaseRegisterFields & {
  role?: "USER";
};

export type DoctorRegisterRequest = BaseRegisterFields & {
  role: "DOCTOR";
  bmdcNumber: string;
};

export type RegisterUserRequest = UserRegisterRequest | DoctorRegisterRequest;

export type UserEntity = {
  id: number;
  uuid: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  phoneCode: string;
  email: string;
  role: number;
  roleName: "USER" | "DOCTOR";
  isVerified: boolean;
  isDoctorVerified: boolean;
  createdAt: string;
  updatedAt: string;
};

export type RegisterUserResponse = {
  message?: string;
  user?: UserEntity;
  token?: string;
};

// login
export type LoginRequest = {
  email: string; // or username if your backend supports both
  password: string;
};

export type LoginResponse = {
  message?: string;
  user?: UserEntity;
  token?: string;
};
