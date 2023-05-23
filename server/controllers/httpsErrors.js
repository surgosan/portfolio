const httpErrors = {
    badRequest: (message) => {
      return {
        status: 400,
        message: message || 'Bad Request',
      };
    },
    
    unauthorized: (message) => {
      return {
        status: 401,
        message: message || 'Unauthorized',
      };
    },
    
    notFound: (message) => {
      return {
        status: 404,
        message: message || 'Not Found',
      };
    },
    
    internalServerError: (message) => {
      return {
        status: 500,
        message: message || 'Internal Server Error',
      };
    },
  };
  
  module.exports = httpErrors;
  