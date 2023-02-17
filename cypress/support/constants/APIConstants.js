
class APIConstants {

    //footer-navigation
    MENUS = {
        MAIN_HEADER: "main-header-navigation",
        MAIN_FOOTER: "main-footer-navigation",
        FOOTER_BLOG_AND_LANGUAGE: "footer-navigation",
        FOOTER_BOTTOM: "footer-bottom-navigation"
    }

    RESPONSE={
        SUCCESS:200,
        NOT_FOUND:404,
        BAD_REQUEST:400
    }

    RESPONSE_MESSAGE={
        NOT_FOUND:"not_found",
        BAD_REQUEST:"Bad Request",
        NO_PARAMETER:"no_parameter",
        INVALID_REQUEST:"Invalid Request"
    }
}
export default new APIConstants();