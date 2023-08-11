
class APIConstants {

    //footer-navigation
    MENUS = {
        MAIN_HEADER: "main-header-navigation",
        MAIN_FOOTER: "footer-navigation",
        FOOTER_BLOG_AND_LANGUAGE: "footer-navigation",
        FOOTER_BOTTOM: "footer-bottom-navigation"
    }

    PAGE = {
        SERVICE_PAGE: "service",
        HOME_PAGE: "home",
        /* Code added by AMAR*/
        ALL_NEWS:"news",
        NEWS_CATEGORY:"news-by-category",
        NEWS_BY_SUBJECT:"news-by-subject",
        NEWS_BY_LANGUAGE:"news-by-language",
        NEWS_WITH_MULTIMEDIA:"news-with-multimedia",
        NEWS_DETAILS:"news-details",
        PUBLIC_RELATION:"public-relations",
        INVESTOR_RELATION:"investor-relations",
        DISTRIBUTION_ANALYTICS:"distribution-analytics",
        MEDIA_JOURNALIST_TOOL:"media-journalist-tools",
        SERVICE_DETAILS:"category-detail",
        CONTACT_US:"contact",
        OFFICE_LOCATION:"office-locations",
        MEDIA_PARTNERSHIP_CONTACTS:"media-partnership-contracts",
    }

    SETTING={GLOBAL_SETTING:"globalsettings"}

    TESTIMONIALS={
        TESTIMONIAL:"testimonials"
    }

    GLOBAL_COMPONENTS={
        CONTACT_US:"contact_us",
        DEMO:"demo",
        NEWSLETTER:"newsletter",
        SIGN_UP:"sign_up",
        RIGHT:"right",
        WHO_WE_ARE:"who_we_are",
        VIDEO_COMPONENT:"video_component",
        /* Code added by AMAR*/
        MEDIA_BANNER:"media-banner",
        TWITTER:"twitter",
        TESTIMONIALS:"testimonials",
        POPULAR:"popular_news"
      

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