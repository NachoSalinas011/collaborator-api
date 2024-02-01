import 'dotenv/config';

const jwtToken: string = process.env.JWT_SECRET;
const jwtTokenDuration: string = process.env.JWT_TOKEN_DURATION;
const jwtRefreshToken: string = process.env.JWT_REFRESH_SECRET;
const jwtRefreshTokenDuration: string = process.env.JWT_REFRESH_TOKEN_DURATION;
export { jwtToken, jwtTokenDuration, jwtRefreshToken, jwtRefreshTokenDuration };

