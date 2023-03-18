import { FileUpload } from './file-upload.model';

export interface User {
  id: string;
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar: FileUpload;
}
