import "@/global.css";
import * as React from "react";

import TreePoint from "../../../assets/icons/3puntos.svg";
import Alergias from "../../../assets/icons/alergias.svg";
import BackBlack from "../../../assets/icons/back-black.svg";
import BackGray from "../../../assets/icons/back-gray.svg";
import BookFillBlack from "../../../assets/icons/book/book-fill-black.svg";
import BookFillWhite from "../../../assets/icons/book/book-fill-white.svg";
import BookOutlineBlack from "../../../assets/icons/book/book-outline-black.svg";
import BookOutlineWhite from "../../../assets/icons/book/book-outline-white.svg";
import CalendarBlue from "../../../assets/icons/calendar-blue.svg";
import CalendarGray from "../../../assets/icons/calendar-gray.svg";
import CalendarOutlineGray from "../../../assets/icons/calendar-outline-gray.svg";
import Cambiar from "../../../assets/icons/cambiar.svg";
import Caminar from "../../../assets/icons/caminar.svg";
import ChatFillBlack from "../../../assets/icons/chat/chat-fill-black.svg";
import ChatFillWhite from "../../../assets/icons/chat/chat-fill-white.svg";
import ChatOutlineBlack from "../../../assets/icons/chat/chat-outilne-black.svg";
import ChatOutlineWhite from "../../../assets/icons/chat/chat-outilne-white.svg";
import ClockFillBlack from "../../../assets/icons/clock/clock-fill-black.svg";
import ClockFillWhite from "../../../assets/icons/clock/clock-fill-white.svg";
import ClockOutlineBlack from "../../../assets/icons/clock/clock-outline-black.svg";
import ClockOutlineWhite from "../../../assets/icons/clock/clock-outline-white.svg";
import CloseBlack from "../../../assets/icons/close-black.svg";
import CloseGray from "../../../assets/icons/close-gray.svg";
import Comunidad from "../../../assets/icons/comunidad.svg";
import ConfigBlue from "../../../assets/icons/config-blue.svg";
import Config from "../../../assets/icons/config.svg";
import Contacts from "../../../assets/icons/contacts.svg";
import Coronavirus from "../../../assets/icons/coronavirus.svg";
import DeleteGray from "../../../assets/icons/delete-gray.svg";
import DeleteRed from "../../../assets/icons/delete-red.svg";
import DolorCabeza from "../../../assets/icons/dolorcabeza.svg";
import DolorCabezaNegro from "../../../assets/icons/dolorcabezanegro.svg";
import Check from "../../../assets/icons/done.svg";
import DownBlue from "../../../assets/icons/down-blue.svg";
import DownGray from "../../../assets/icons/down-gray.svg";
import EditUser from "../../../assets/icons/edit-user.svg";
import Estetoscopio from "../../../assets/icons/estetoscopio.svg";
import EyeCloseBlue from "../../../assets/icons/eye-close-blue.svg";
import EyeCloseGray from "../../../assets/icons/eye-close-gray.svg";
import EyeOpenBlue from "../../../assets/icons/eye-open-blue.svg";
import EyeOpenGray from "../../../assets/icons/eye-open-gray.svg";
import HearthRate from "../../../assets/icons/heartrate.svg";
import HomeFillBlack from "../../../assets/icons/home/home-fill-black.svg";
import HomeFillWhite from "../../../assets/icons/home/home-fill-white.svg";
import HomeOutlineBlack from "../../../assets/icons/home/home-outline-black.svg";
import HomeOutlineWhite from "../../../assets/icons/home/home-outline-white.svg";
import Icons8 from "../../../assets/icons/icons8.svg";
import Industria from "../../../assets/icons/industria.svg";
import IndustriaBlanca from "../../../assets/icons/industriablanca.svg";
import Info from "../../../assets/icons/info.svg";
import Jeringa from "../../../assets/icons/jeringa.svg";
import Like from "../../../assets/icons/like.svg";
import MailBlue from "../../../assets/icons/mail-blue.svg";
import MailGray from "../../../assets/icons/mail-gray.svg";
import Mancuerna from "../../../assets/icons/mancuerna.svg";
import Mas from "../../../assets/icons/mas.svg";
import Medicina from "../../../assets/icons/mediciine.svg";
import MicFillBlue from "../../../assets/icons/mic-fill-blue.svg";
import MicOutlineBlack from "../../../assets/icons/mic-outline-black.svg";
import MicOutlineBlue from "../../../assets/icons/mic-outline-blue.svg";
import MicOutlineGray from "../../../assets/icons/mic-outline-gray.svg";
import NextBlack from "../../../assets/icons/next-black.svg";
import NextGray from "../../../assets/icons/next-gray.svg";
import NotificationBlue from "../../../assets/icons/notification-blue.svg";
import Notification from "../../../assets/icons/notification.svg";
import Pastilla from "../../../assets/icons/pastilla.svg";
import PastillaBlanca from "../../../assets/icons/pastillablanca.svg";
import Plus from "../../../assets/icons/plus.svg";
import PlusBlanco from "../../../assets/icons/Pluswhite.svg";
import Pulmones from "../../../assets/icons/pulmones.svg";
import Qr from "../../../assets/icons/Qr.svg";
import Question from "../../../assets/icons/question.svg";
import RegistroMedico from "../../../assets/icons/registromedico.svg";
import Regla from "../../../assets/icons/regla.svg";
import SearchBlue from "../../../assets/icons/search-blue.svg";
import SearchGray from "../../../assets/icons/search-gray.svg";
import Search from "../../../assets/icons/search.svg";
import SecureBlue from "../../../assets/icons/secure-blue.svg";
import SecureGray from "../../../assets/icons/secure-gray.svg";
import SendBlue from "../../../assets/icons/send-blue.svg";
import Send from "../../../assets/icons/send.svg";
import Tos from "../../../assets/icons/tos.svg";
import UpBlue from "../../../assets/icons/up-blue.svg";
import UpGray from "../../../assets/icons/up-gray.svg";
import UserBlue from "../../../assets/icons/user-blue.svg";
import UserGray from "../../../assets/icons/user-gray.svg";
import UserFillBlack from "../../../assets/icons/user/user-fill-black.svg";
import UserFillWhite from "../../../assets/icons/user/user-fill-white.svg";
import UserOutlineBlack from "../../../assets/icons/user/user-outline-black.svg";
import UserOutlineWhite from "../../../assets/icons/user/user-outline-white.svg";
import Virus from "../../../assets/icons/virus.svg";
const iconMap = {
    Home: {
        Vacio: {
            Negro: HomeOutlineBlack,
            Blanco: HomeOutlineWhite,
        },
        Lleno: {
            Negro: HomeFillBlack,
            Blanco: HomeFillWhite,
        },
    },
    Chat: {
        Vacio: {
            Negro: ChatOutlineBlack,
            Blanco: ChatOutlineWhite,
        },
        Lleno: {
            Negro: ChatFillBlack,
            Blanco: ChatFillWhite,
        },
    },
    Clock: {
        Vacio: {
            Negro: ClockOutlineBlack,
            Blanco: ClockOutlineWhite,
        },
        Lleno: {
            Negro: ClockFillBlack,
            Blanco: ClockFillWhite,
        },
    },
    Book: {
        Vacio: {
            Negro: BookOutlineBlack,
            Blanco: BookOutlineWhite,
        },
        Lleno: {
            Negro: BookFillBlack,
            Blanco: BookFillWhite,
        },
    },
    User: {
        Vacio: {
            Negro: UserOutlineBlack,
            Blanco: UserOutlineWhite,
        },
        Lleno: {
            Negro: UserFillBlack,
            Blanco: UserFillWhite,
        },
    },

    // ÍCONOS SIMPLES (USEFUL)
    BackBlack,
    BackGray,
    CalendarGray,
    CloseBlack,
    CloseGray,
    EyeCloseGray,
    EyeOpenGray,
    MailGray,
    NextBlack,
    NextGray,
    SecureGray,
    UserGray,
    UserBlue,
    CalendarBlue,
    DownBlue,
    DownGray,
    EyeCloseBlue,
    Qr,
    EyeOpenBlue,
    MailBlue,
    SecureBlue,
    UpBlue,
    UpGray,
    Config,
    Notification,
    Search,
    HearthRate,
    Cambiar,
    Check,
    TreePoint,
    Alergias,
    Comunidad,
    ConfigBlue,
    Contacts,
    DeleteGray,
    DeleteRed,
    EditUser,
    Estetoscopio,
    Icons8,
    Industria,
    Info,
    Jeringa,
    Like,
    Mancuerna,
    Medicina,
    MicFillBlue,
    MicOutlineBlack,
    MicOutlineBlue,
    MicOutlineGray,
    NotificationBlue,
    Pastilla,
    Question,
    RegistroMedico,
    Regla,
    SearchBlue,
    SearchGray,
    Tos,
    Virus,
    CalendarOutlineGray,
    Plus,
    SendBlue,
    Send,
    DolorCabeza,
    Pulmones,
    Caminar,
    IndustriaBlanca,
    PastillaBlanca,
    Coronavirus,
    DolorCabezaNegro,
    Mas,
    PlusBlanco,
};

/**
 * @typedef {Object} IconProps
 * @property {string} tipo
 * @property {string} [relleno]
 * @property {string} [color]
 * @property {number} [size]
 */

/**
 * @param {IconProps} props
 */
export default function Icon({ tipo, relleno, color, size = 45 }) {
    const entry = iconMap[tipo];

    if (entry && typeof entry !== "object") {
        const Svg = entry;
        return <Svg width={size} height={size} />;
    }

    const Svg = entry?.[relleno]?.[color];
    if (!Svg) return null;

    return <Svg width={size} height={size} />;
}