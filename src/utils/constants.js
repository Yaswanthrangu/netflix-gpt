export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR = "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";

export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`,
    },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/original"

export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const SUPPORTED_LANGUAGES = [
    { identifier: "english", name: "English" },
    { identifier: "hindi", name: "हिन्दी" },
    { identifier: "telugu", name: "తెలుగు" },
    { identifier: "kannada", name: "ಕನ್ನಡ" },
    { identifier: "tamil", name: "தமிழ்" },
    { identifier: "malayalam", name: "മലയാളം" },
    { identifier: "bengali", name: "বাংলা" },
    { identifier: "marathi", name: "मराठी" },
];

export const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

export const QWENAI_API_KEY = import.meta.env.VITE_QWENAI_API_KEY;