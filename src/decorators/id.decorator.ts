import { SetMetadata } from "@nestjs/common";
import { IdGuard } from "src/authentication/guards/id.guard";

export const IS_VALID_ID = 'isValidId';
export const IsValidId = () => SetMetadata(IS_VALID_ID, IdGuard);