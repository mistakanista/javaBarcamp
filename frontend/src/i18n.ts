import i18n from "i18next";
import { register } from "module";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    de: {
      translation: {
        agreeTerms: "Bitte die Bedingungen akzeptieren um sich zu registrieren",
        alreadyRegistered: "Bereits registriert",
        brew: "Ein offener Raum für Entwickler:innen – zum Ideen austauschen, voneinander lernen und gemeinsam das Programm gestalten. Keine festen Speaker, keine Zuschauer – alle sind Teil des Ganzen.",
        checkEmail: "Bitte überprüfe deine E-Mails um die Registrierung für das Entwickler Barcamp Frankfurt 2026 abzuschließen!",
        company: "Firma (optional)",
        completeRegistration: "Registrierung absenden",
        date: "17. Oktober 2026",
        developer: "100 Entwickler",
        email: "E-Mail",
        emailMissing: "Bitte gib deine E-Mail und den Namen an",
        emailRegistered: "Es gibt bereits eine Registrierung mit dieser E-Mail",
        formDetails: "Melde dich beim Entwickler Barcamp an, es ist kostenlos!",
        join: "Mach mit in der Entwickler Community",
        missingInformation: "Fehlende Angaben",
        name: "Name",
        ourSponsors: "Unsere Sponsoren",
        register: "Registrieren",
        registerNow: "Jetzt Registrieren",
        registrationError: "Bei der Registrierung ist ein Fehler aufgetreten.",
        registrationForm: "Anmeldung",
        registrationSuccess: "Registrierung erfolgreich! ☕",
        reserve: "Reserviere deinen Platz beim Dev Barcamp in Frankfurt",
        schedule: "Zeitplan",
        sponsors: "Sponsoren",
        suggestTopic: "Ein Thema vorschlagen",
        terms: "Ich nehme am Dev Barcamp teil und bin damit einverstanden, dass der Sessionplan erst am Tag des Events erstellt wird.",
        termsRequired: "Bedingungen akzeptieren",
        topics: "Themen",
        ultimative: "Die ultimative Entwickler Unkonferenz",
        yourName: "Dein Name",
        yourCompany: "Deine Firma"
      },
    },
    en: {
      translation: {
        agreeTerms: "Please agree to the terms to register.",
        alreadyRegistered: "Already registered",
        brew: "An open space for developers to share ideas, learn from peers, and shape the agenda together. No speakers, no spectators — just participants.",
        checkEmail: "Please check your emails to complete the registration for Developer Barcamp Frankfurt 2026!",
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
        reserve: "Reserve your spot at Frankfurt's premier Developer unconference",
        schedule: "Schedule",
        sponsors: "Sponsors",
        suggestTopic: "Suggest a Topic",
        terms: "I agree to participate in the barcamp and understand that session topics are proposed on the day of the event.",
        termsRequired: "Terms Required",
        topics: "Topics",
        ultimative: "The Ultimate Developer Unconference",
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
