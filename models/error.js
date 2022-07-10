// import logger from "logger"
const logger=require('logger')
const errorCode={
    UNAUTHORIZED_ACTION :'UNAUTHORIZED_ACTION',
    USER_EXISTS_ERROR :'   USER_EXISTS_ERROR'
}
 function genericError(error,res,req){
logger.error(`Generic error occurred:${error.message}`);
res.body={ok:false,meassage:error.message}
res.status=500;
}
 function missingFieldError(field,res,req){
    logger.warn(`missing field:${field}`);
    res.body={ok:false,meassage:`missing field:${field}`}
    res.status=400;
    }
      function missingparameterError(parameter,res,req){
        logger.warn(`missing field:${parameter}`);
        res.body={ok:false,meassage:`missing field:${parameter}`}
        res.status=400;
        }

  function unauthorizedActionError(action,res){
    const message=`User is not authorized to perform action ${action}`;
    logger.warn(message);
    res.body={
        ok:false,
        message,
        code:errorCode.UNAUTHORIZED_ACTION

    };
    res.status=401

  }      
   function missingTargetError(action,res){
    const message=`User is not authorized to perform action ${action}`;
    logger.warn(message);
    res.body={
        ok:false,
        message,
        code:errorCode.UNAUTHORIZED_ACTION

    };
    res.status=401

  }   
   function customError(message,res,status){
    if (status>499) logger.error(`custome error has occured ${message}`)
    if (status<500) logger.warn(`custome error has occured ${message}`)

    res.body={
        ok:false,
        message,

    };
    res.status=status

  }         

  module.exports = {
    genericError,
    missingFieldError,
    missingparameterError,
    customError,
    missingTargetError,
    unauthorizedActionError
    };
  