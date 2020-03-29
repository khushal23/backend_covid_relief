class ResponseService {


    success (data = {})
    {

        return {
            success: true,
            code: 200,
            data: data
        };
    }

    failure (e) 
    {
        // Console error 
        return {
            success: false,
            singleStringMessage: e.message ? e.message.replace(/\s+$/g, '.') : e.message,
            error: e.error || e
        };
    }
}

module.exports = new ResponseService();
