import { LoginUser } from './login-user/login-user.usecase';
import { OnboardUser } from './onboard-user/onboard-user.usecase';
import { RegisterUser } from './register-user/register-user.usecase';
import { ResetPassword } from './reset-password/reset-password.usecase';
import { RequestForgotPassword } from './request-forgot-password/request-forgot-pasword.usecase';

import { LoginUserCommand } from './login-user/login-user.command';
import { OnboardUserCommand } from './onboard-user/onboard-user.command';
import { RegisterUserCommand } from './register-user/register-user.command';
import { ResetPasswordCommand } from './reset-password/reset-password.command';
import { RequestForgotPasswordCommand } from './request-forgot-password/request-forgot-pasword.command';
import { CreateProject } from 'app/project/usecases';
import { SaveSampleFile, UpdateImageColumns } from '@shared/usecases';
import { CreateEnvironment, GenerateUniqueApiKey } from 'app/environment/usecases';
import { CreateTemplate, UpdateCustomization, UpdateTemplateColumns } from 'app/template/usecases';

export const USE_CASES = [
  RegisterUser,
  LoginUser,
  OnboardUser,
  ResetPassword,
  CreateProject,
  SaveSampleFile,
  CreateTemplate,
  CreateEnvironment,
  UpdateImageColumns,
  UpdateCustomization,
  GenerateUniqueApiKey,
  UpdateTemplateColumns,
  RequestForgotPassword,
  //
];

export { RegisterUser, LoginUser, RequestForgotPassword, ResetPassword, OnboardUser };
export {
  LoginUserCommand,
  OnboardUserCommand,
  RegisterUserCommand,
  ResetPasswordCommand,
  RequestForgotPasswordCommand,
};
