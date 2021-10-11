const sendResponse = (res, code, data, cacheData) => {
    res.status(code).send({
      data: data,
      message: 'TEST',
      status: code,
      cacheData,
    });
};
export default async (req, res, next) => {
    sendResponse(res, 200, 'TEST ROUTES', { responseCached: false });
}