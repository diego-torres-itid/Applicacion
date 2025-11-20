import "@/global.css";
import * as React from "react";

// HOME
import HomeFillBlack from "../../../assets/icons/home/home-fill-black.svg";
import HomeFillWhite from "../../../assets/icons/home/home-fill-white.svg";
import HomeOutlineBlack from "../../../assets/icons/home/home-outline-black.svg";
import HomeOutlineWhite from "../../../assets/icons/home/home-outline-white.svg";
// CHAT
import ChatFillBlack from "../../../assets/icons/chat/chat-fill-black.svg";
import ChatFillWhite from "../../../assets/icons/chat/chat-fill-white.svg";
import ChatOutlineBlack from "../../../assets/icons/chat/chat-outilne-black.svg";
import ChatOutlineWhite from "../../../assets/icons/chat/chat-outilne-white.svg";
// CLOCK
import ClockFillBlack from "../../../assets/icons/clock/clock-fill-black.svg";
import ClockFillWhite from "../../../assets/icons/clock/clock-fill-white.svg";
import ClockOutlineBlack from "../../../assets/icons/clock/clock-outline-black.svg";
import ClockOutlineWhite from "../../../assets/icons/clock/clock-outline-white.svg";
// BOOK
import BookFillBlack from "../../../assets/icons/book/book-fill-black.svg";
import BookFillWhite from "../../../assets/icons/book/book-fill-white.svg";
import BookOutlineBlack from "../../../assets/icons/book/book-outline-black.svg";
import BookOutlineWhite from "../../../assets/icons/book/book-outline-white.svg";
// USER
import UserFillBlack from "../../../assets/icons/user/user-fill-black.svg";
import UserFillWhite from "../../../assets/icons/user/user-fill-white.svg";
import UserOutlineBlack from "../../../assets/icons/user/user-outline-black.svg";
import UserOutlineWhite from "../../../assets/icons/user/user-outline-white.svg";
// USEFUL
import BackBlack from "../../../assets/icons/back-black.svg";
import BackGray from "../../../assets/icons/back-gray.svg";
import CalendarGray from "../../../assets/icons/calendar-gray.svg";
import CloseBlack from "../../../assets/icons/close-black.svg";
import CloseGray from "../../../assets/icons/close-gray.svg";
import EyeCloseGray from "../../../assets/icons/eye-close-gray.svg";
import EyeOpenGray from "../../../assets/icons/eye-open-gray.svg";
import MailGray from "../../../assets/icons/mail-gray.svg";
import NextBlack from "../../../assets/icons/next-black.svg";
import NextGray from "../../../assets/icons/next-gray.svg";
import SecureGray from "../../../assets/icons/secure-gray.svg";
import UserGray from "../../../assets/icons/user-gray.svg";

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