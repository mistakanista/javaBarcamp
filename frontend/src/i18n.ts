import i18n from "i18next";
import { register } from "module";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    de: {
      translation: {
        agreeTerms: "Bitte die Bedingungen akzeptieren um sich zu registrieren",
        alreadyRegistered: "Bereits registriert",
        brew: "Offener Raum für KI Entwickler:innen, um Ideen zu teilen, voneinander zu lernen und die Agenda gemeinsam zu gestalten. Keine Speaker, keine Zuschauer – nur Teilnehmende.",
        checkEmail: "Bitte überprüfe deine E-Mails um die Registrierung für das KI Code Camp Frankfurt 2026 abzuschließen!",
        company: "Firma (optional)",
        completeRegistration: "Registrierung absenden",
        date: "17. Oktober 2026",
        developer: "100 Entwickler",
        email: "E-Mail",
        emailMissing: "Bitte gib deine E-Mail und den Namen an",
        emailRegistered: "Es gibt bereits eine Registrierung mit dieser E-Mail",
        formDetails: "Melde dich beim KI Code Camp an, es ist kostenlos!",
        join: "Mach mit in der KI Code Community",
        missingInformation: "Fehlende Angaben",
        name: "Name",
        ourSponsors: "Unsere Sponsoren",
        register: "Registrieren",
        registerNow: "Jetzt Registrieren",
        registrationError: "Bei der Registrierung ist ein Fehler aufgetreten.",
        registrationForm: "Anmeldung",
        registrationSuccess: "Registrierung erfolgreich! ☕",
        reserve: "Reserviere deinen Platz beim KI Code Camp in Frankfurt",
        schedule: "Zeitplan",
        sponsors: "Sponsoren",
        suggestTopic: "Ein Thema vorschlagen",
        terms: "Ich nehme am KI Code Camp teil und bin damit einverstanden, dass der Sessionplan erst am Tag des Events erstellt wird.",
        termsRequired: "Bedingungen akzeptieren",
        topics: "Themen",
        ultimative: "Die ultimative KI Code Unkonferenz",
        yourName: "Dein Name",
        yourCompany: "Deine Firma"
      },
    },
    en: {
      translation: {
        agreeTerms: "Please agree to the terms to register.",
        alreadyRegistered: "Already registered",
        brew: "Where AI developers brew ideas, share knowledge, and build community together.",
        checkEmail: "Please check your emails to complete the registration for AI Barcamp Frankfurt 2026!",
        company: "Company (Optional)",
        completeRegistration: "Complete Registration",
        date: "October 17, 2026",
        developer: "100 Developers",
        email: "Email Address",
        emailMissing: "Please fill in your name and email.",
        emailRegistered: "This email is already registered.",
        formDetails: "Fill in your details to secure your spot. It's free!",
        join: "Join the Community",
        missingInformation: "Missing Information",
        name: "Full name",
        ourSponsors: "Our Sponsors",
        register: "Register",
        registerNow: "Register now",
        registrationError: "There was an error when trying to register.",
        registrationForm: "Registration Form",
        registrationSuccess: "Registration Successful! ☕",
        reserve: "Reserve your spot at Frankfurt's premier AI code unconference",
        schedule: "Schedule",
        sponsors: "Sponsors",
        suggestTopic: "Suggest a Topic",
        terms: "I agree to participate in the barcamp and understand that session topics are proposed on the day of the event.",
        termsRequired: "Terms Required",
        topics: "Topics",
        ultimative: "The Ultimate AI code Unconference",
        yourName: "Your name",
        yourCompany: "Your company"
      },
    },
  },
  lng: "de", // default
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
