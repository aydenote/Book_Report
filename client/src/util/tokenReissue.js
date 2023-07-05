import { handleTokenError } from './tokenError';
import { handleRenewToken } from '../apis/user';
import { setCookie } from '../cookie';

export const executeApiWithTokenReissue = async (apiFunction, navigate, ...args) => {
  try {
    const response = await apiFunction(...args);
    return response;
  } catch (error) {
    const errData = error.response.data;
    if (errData.type === 'expired') {
      try {
        const refreshResponse = await handleRenewToken();
        const newAccessToken = refreshResponse.newAccessToken;
        setCookie('accessToken', newAccessToken);

        const retryResponse = await apiFunction(...args);
        return retryResponse;
      } catch (error) {
        handleTokenError(error, navigate);
      }
    } else {
      handleTokenError(error, navigate);
    }
  }
};
