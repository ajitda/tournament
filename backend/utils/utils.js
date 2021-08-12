const sendResponse = (res, data) =>{
    res.status(201).json({
        success: true,
        status: "success",
        data: data
      });
}

const sendError = (res, data) =>{
    res.status(401).json({
        success: false,
        status: "fail",
        data: data
    })
}

module.exports = {sendResponse, sendError};